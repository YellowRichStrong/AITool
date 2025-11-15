#!/usr/bin/env python3
# 脚本用于更新壁纸数据

import os
import glob

# 分类映射 - 将文件夹名称映射到分类名称
category_mapping = {
    'Allen Iverson': 'Allen Iverson',
    'Carmelo Anthony': 'Carmelo Anthony',
    'James Harden': 'James Harden',
    'Kevin Durant': 'Kevin Durant',
    'Kobe Bryant': 'Kobe Bryant',
    'Kyrie Irving': 'Kyrie Irving',
    'LeBron James': 'LeBron James',
    'Michael Jordan': 'Michael Jordan',
    'Slam Dunk': 'Slam Dunk',
    'Stephen Curry': 'Stephen Curry',
    'other basketball': 'Other Basketball'
}

def get_jpg_files(dir_path):
    """获取文件夹中的所有JPG文件"""
    try:
        jpg_files = glob.glob(os.path.join(dir_path, "*.JPG"))
        # 只返回文件名部分
        return [os.path.basename(f) for f in jpg_files]
    except Exception as e:
        print(f"Error reading directory {dir_path}: {e}")
        return []

def generate_wallpaper_data():
    """生成新的壁纸数据"""
    iphone_dir = '/Users/macbookpro/Desktop/html_wangxiao/ballstar/iphone'
    wallpapers = []
    id_counter = 1000  # 从1000开始，避免与现有ID冲突

    # 遍历所有分类文件夹
    for folder_name, category_name in category_mapping.items():
        category_dir = os.path.join(iphone_dir, folder_name)
        
        if os.path.exists(category_dir):
            jpg_files = get_jpg_files(category_dir)
            print(f"Found {len(jpg_files)} JPG files in {folder_name}")
            
            # 为每个文件创建壁纸对象（按倒序编号，最新的在前）
            for index, file in enumerate(reversed(jpg_files)):
                wallpapers.append({
                    'id': id_counter,
                    'name': f"{category_name} Wallpaper {len(jpg_files) - index}",
                    'thumbnail': f"iphone/{folder_name}/{file}",
                    'original': f"iphone/{folder_name}/{file}",
                    'category': category_name
                })
                id_counter += 1
    
    return wallpapers

def generate_js_code(wallpapers):
    """生成JavaScript代码"""
    code = 'const wallpapers = [\n'
    
    # 按分类分组
    grouped_wallpapers = {}
    for wallpaper in wallpapers:
        category = wallpaper['category']
        if category not in grouped_wallpapers:
            grouped_wallpapers[category] = []
        grouped_wallpapers[category].append(wallpaper)
    
    # 为每个分类生成代码
    for category, category_wallpapers in grouped_wallpapers.items():
        code += f'    // {category} wallpapers (newest first)\n'
        for wallpaper in category_wallpapers:
            code += '    {\n'
            code += f'        id: {wallpaper["id"]},\n'
            code += f'        name: "{wallpaper["name"]}",\n'
            code += f'        thumbnail: "{wallpaper["thumbnail"]}",\n'
            code += f'        original: "{wallpaper["original"]}",\n'
            code += f'        category: "{wallpaper["category"]}"\n'
            code += '    },\n'
        code += '\n'
    
    code += '];\n'
    return code

def main():
    print('Updating wallpaper data...')
    
    # 生成新的壁纸数据
    wallpapers = generate_wallpaper_data()
    print(f'Generated data for {len(wallpapers)} wallpapers')
    
    # 生成JavaScript代码
    js_code = generate_js_code(wallpapers)
    
    # 输出到文件
    output_file = '/Users/macbookpro/Desktop/html_wangxiao/ballstar/wallpapers_new.js'
    with open(output_file, 'w') as f:
        f.write(js_code)
    
    print(f'New wallpaper data saved to {output_file}')
    
    print('\nNext steps:')
    print('1. Review the generated wallpapers_new.js file')
    print('2. Replace the wallpapers array in script.js with the new data')
    print('3. Test the website to ensure all images load correctly')

if __name__ == '__main__':
    main()