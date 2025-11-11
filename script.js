// Ballstar Mobile Wallpapers Website JavaScript
// ============================================================================

// Add防盗链 protection
function checkReferrer() {
    const allowedDomains = ['nba110.com', 'localhost', '127.0.0.1'];
    const referrer = document.referrer;
    
    // If referrer exists, check if it's from allowed domains
    if (referrer) {
        const isAllowed = allowedDomains.some(domain => 
            referrer.includes(domain)
        );
        
        // If not allowed, redirect to homepage
        if (!isAllowed) {
            window.location.href = '/';
        }
    }
}

// Disable right-click context menu
function disableRightClick() {
    // Right-click is now enabled
    return;
}

// Check referrer on page load
document.addEventListener('DOMContentLoaded', function() {
    checkReferrer();
    disableRightClick();
});

// Sample wallpaper data using local images from the iphone folder
// wallpapers are sorted by update time, from newest to oldest
const wallpapers = [
    // Kobe Bryant wallpapers (newest first)
    {
        id: 150,
        name: "Kobe Bryant Wallpaper 50",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6228.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6228.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 149,
        name: "Kobe Bryant Wallpaper 49",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6227.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6227.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 148,
        name: "Kobe Bryant Wallpaper 48",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6226.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6226.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 147,
        name: "Kobe Bryant Wallpaper 47",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6225.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6225.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 146,
        name: "Kobe Bryant Wallpaper 46",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6224.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6224.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 145,
        name: "Kobe Bryant Wallpaper 45",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6223.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6223.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 144,
        name: "Kobe Bryant Wallpaper 44",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6222.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6222.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 143,
        name: "Kobe Bryant Wallpaper 43",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6221.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6221.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 142,
        name: "Kobe Bryant Wallpaper 42",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6220.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6220.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 141,
        name: "Kobe Bryant Wallpaper 41",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6219.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6219.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 140,
        name: "Kobe Bryant Wallpaper 40",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6218.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6218.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 139,
        name: "Kobe Bryant Wallpaper 39",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6217.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6217.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 138,
        name: "Kobe Bryant Wallpaper 38",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6216.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6216.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 137,
        name: "Kobe Bryant Wallpaper 37",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6215.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6215.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 136,
        name: "Kobe Bryant Wallpaper 36",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6214.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6214.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 135,
        name: "Kobe Bryant Wallpaper 35",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6213.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6213.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 134,
        name: "Kobe Bryant Wallpaper 34",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6212.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6212.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 133,
        name: "Kobe Bryant Wallpaper 33",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6211.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6211.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 132,
        name: "Kobe Bryant Wallpaper 32",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6210.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6210.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 131,
        name: "Kobe Bryant Wallpaper 31",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6209.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6209.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 130,
        name: "Kobe Bryant Wallpaper 30",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6208.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6208.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 129,
        name: "Kobe Bryant Wallpaper 29",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6207.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6207.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 128,
        name: "Kobe Bryant Wallpaper 28",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6206.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6206.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 127,
        name: "Kobe Bryant Wallpaper 27",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6205.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6205.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 126,
        name: "Kobe Bryant Wallpaper 26",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6204.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6204.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 125,
        name: "Kobe Bryant Wallpaper 25",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6203.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6203.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 124,
        name: "Kobe Bryant Wallpaper 24",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6202.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6202.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 123,
        name: "Kobe Bryant Wallpaper 23",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6201.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6201.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 122,
        name: "Kobe Bryant Wallpaper 22",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6049.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6049.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 121,
        name: "Kobe Bryant Wallpaper 21",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6048.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6048.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 120,
        name: "Kobe Bryant Wallpaper 20",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6047.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6047.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 119,
        name: "Kobe Bryant Wallpaper 19",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6046.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6046.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 118,
        name: "Kobe Bryant Wallpaper 18",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6045.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6045.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 117,
        name: "Kobe Bryant Wallpaper 17",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6044.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6044.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 116,
        name: "Kobe Bryant Wallpaper 16",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6043.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6043.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 115,
        name: "Kobe Bryant Wallpaper 15",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6042.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6042.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 114,
        name: "Kobe Bryant Wallpaper 14",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6041.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6041.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 113,
        name: "Kobe Bryant Wallpaper 13",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6040.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6040.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 112,
        name: "Kobe Bryant Wallpaper 12",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6039.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6039.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 111,
        name: "Kobe Bryant Wallpaper 11",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5954.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5954.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 110,
        name: "Kobe Bryant Wallpaper 10",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5952.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5952.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 109,
        name: "Kobe Bryant Wallpaper 9",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5951.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5951.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 108,
        name: "Kobe Bryant Wallpaper 8",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5949.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5949.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 107,
        name: "Kobe Bryant Wallpaper 7",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5948.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5948.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 106,
        name: "Kobe Bryant Wallpaper 6",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5947.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5947.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 105,
        name: "Kobe Bryant Wallpaper 5",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5946.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5946.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 104,
        name: "Kobe Bryant Wallpaper 4",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5945.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5945.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 103,
        name: "Kobe Bryant Wallpaper 3",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5944.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5944.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 102,
        name: "Kobe Bryant Wallpaper 2",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5943.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5943.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 101,
        name: "Kobe Bryant Wallpaper 1",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5942.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5942.JPG",
        category: "Kobe Bryant"
    },
    
    // Kyrie Irving wallpapers (newest first)
    {
        id: 78,
        name: "Kyrie Irving Wallpaper 27",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6075.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6075.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 77,
        name: "Kyrie Irving Wallpaper 26",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6074.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6074.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 76,
        name: "Kyrie Irving Wallpaper 25",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6073.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6073.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 75,
        name: "Kyrie Irving Wallpaper 24",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6072.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6072.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 74,
        name: "Kyrie Irving Wallpaper 23",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6071.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6071.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 73,
        name: "Kyrie Irving Wallpaper 22",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6070.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6070.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 72,
        name: "Kyrie Irving Wallpaper 21",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6069.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6069.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 71,
        name: "Kyrie Irving Wallpaper 20",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6068.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6068.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 70,
        name: "Kyrie Irving Wallpaper 19",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6067.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6067.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 69,
        name: "Kyrie Irving Wallpaper 18",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6066.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6066.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 68,
        name: "Kyrie Irving Wallpaper 17",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6065.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6065.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 67,
        name: "Kyrie Irving Wallpaper 16",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6064.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6064.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 66,
        name: "Kyrie Irving Wallpaper 15",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6063.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6063.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 65,
        name: "Kyrie Irving Wallpaper 14",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6062.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6062.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 64,
        name: "Kyrie Irving Wallpaper 13",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6061.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6061.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 63,
        name: "Kyrie Irving Wallpaper 12",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6060.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6060.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 62,
        name: "Kyrie Irving Wallpaper 11",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6059.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6059.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 61,
        name: "Kyrie Irving Wallpaper 10",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6058.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6058.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 60,
        name: "Kyrie Irving Wallpaper 9",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6057.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6057.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 59,
        name: "Kyrie Irving Wallpaper 8",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6056.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6056.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 58,
        name: "Kyrie Irving Wallpaper 7",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6055.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6055.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 57,
        name: "Kyrie Irving Wallpaper 6",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6053.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6053.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 56,
        name: "Kyrie Irving Wallpaper 5",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6052.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6052.JPG",
        category: "Kyrie Irving"
    },
    // Allen Iverson wallpapers (newest first)
    {
        id: 55,
        name: "Allen Iverson Wallpaper 17",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6038.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6038.JPG",
        category: "Allen Iverson"
    },
    {
        id: 54,
        name: "Allen Iverson Wallpaper 16",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6037.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6037.JPG",
        category: "Allen Iverson"
    },
    {
        id: 53,
        name: "Allen Iverson Wallpaper 15",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6036.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6036.JPG",
        category: "Allen Iverson"
    },
    {
        id: 52,
        name: "Allen Iverson Wallpaper 14",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6035.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6035.JPG",
        category: "Allen Iverson"
    },
    {
        id: 51,
        name: "Allen Iverson Wallpaper 13",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6034.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6034.JPG",
        category: "Allen Iverson"
    },
    {
        id: 50,
        name: "Allen Iverson Wallpaper 12",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6032.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6032.JPG",
        category: "Allen Iverson"
    },
    {
        id: 49,
        name: "Allen Iverson Wallpaper 11",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6031.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6031.JPG",
        category: "Allen Iverson"
    },
    {
        id: 48,
        name: "Allen Iverson Wallpaper 10",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6030.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6030.JPG",
        category: "Allen Iverson"
    },
    {
        id: 47,
        name: "Allen Iverson Wallpaper 9",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6029.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6029.JPG",
        category: "Allen Iverson"
    },
    {
        id: 46,
        name: "Allen Iverson Wallpaper 8",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6028.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6028.JPG",
        category: "Allen Iverson"
    },
    {
        id: 45,
        name: "Allen Iverson Wallpaper 7",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6027.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6027.JPG",
        category: "Allen Iverson"
    },
    {
        id: 44,
        name: "Allen Iverson Wallpaper 6",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6026.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6026.JPG",
        category: "Allen Iverson"
    },
    {
        id: 43,
        name: "Allen Iverson Wallpaper 5",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6025.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6025.JPG",
        category: "Allen Iverson"
    },
    {
        id: 42,
        name: "Allen Iverson Wallpaper 4",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6024.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6024.JPG",
        category: "Allen Iverson"
    },
    {
        id: 41,
        name: "Allen Iverson Wallpaper 3",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6023.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6023.JPG",
        category: "Allen Iverson"
    },
    {
        id: 40,
        name: "Allen Iverson Wallpaper 2",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6022.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6022.JPG",
        category: "Allen Iverson"
    },
    {
        id: 39,
        name: "Allen Iverson Wallpaper 1",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6021.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6021.JPG",
        category: "Allen Iverson"
    },
    
    // Carmelo Anthony wallpapers
    {
        id: 38,
        name: "Carmelo Anthony Wallpaper 16",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6020.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6020.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 37,
        name: "Carmelo Anthony Wallpaper 15",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6019.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6019.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 36,
        name: "Carmelo Anthony Wallpaper 14",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6018.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6018.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 35,
        name: "Carmelo Anthony Wallpaper 13",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6017.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6017.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 34,
        name: "Carmelo Anthony Wallpaper 12",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6016.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6016.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 33,
        name: "Carmelo Anthony Wallpaper 11",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6015.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6015.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 32,
        name: "Carmelo Anthony Wallpaper 10",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6014.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6014.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 31,
        name: "Carmelo Anthony Wallpaper 9",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6013.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6013.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 30,
        name: "Carmelo Anthony Wallpaper 8",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6012.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6012.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 29,
        name: "Carmelo Anthony Wallpaper 7",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6011.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6011.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 28,
        name: "Carmelo Anthony Wallpaper 6",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6010.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6010.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 27,
        name: "Carmelo Anthony Wallpaper 5",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6009.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6009.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 26,
        name: "Carmelo Anthony Wallpaper 4",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6008.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6008.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 25,
        name: "Carmelo Anthony Wallpaper 3",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6006 2.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6006 2.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 24,
        name: "Carmelo Anthony Wallpaper 2",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6006.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6006.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 23,
        name: "Carmelo Anthony Wallpaper 1",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6005.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6005.JPG",
        category: "Carmelo Anthony"
    },
    
    // Kevin Durant wallpapers (updated with new image)
    {
        id: 22,
        name: "Kevin Durant Wallpaper 19",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6004.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6004.JPG",
        category: "Kevin Durant"
    },
    {
        id: 21,
        name: "Kevin Durant Wallpaper 18",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6003.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6003.JPG",
        category: "Kevin Durant"
    },
    {
        id: 20,
        name: "Kevin Durant Wallpaper 17",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6002.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6002.JPG",
        category: "Kevin Durant"
    },
    {
        id: 19,
        name: "Kevin Durant Wallpaper 16",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5999.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5999.JPG",
        category: "Kevin Durant"
    },
    {
        id: 18,
        name: "Kevin Durant Wallpaper 15",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5998.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5998.JPG",
        category: "Kevin Durant"
    },
    {
        id: 17,
        name: "Kevin Durant Wallpaper 14",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5997.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5997.JPG",
        category: "Kevin Durant"
    },
    {
        id: 16,
        name: "Kevin Durant Wallpaper 13",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5996.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5996.JPG",
        category: "Kevin Durant"
    },
    {
        id: 15,
        name: "Kevin Durant Wallpaper 12",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5995.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5995.JPG",
        category: "Kevin Durant"
    },
    {
        id: 14,
        name: "Kevin Durant Wallpaper 11",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5994.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5994.JPG",
        category: "Kevin Durant"
    },
    {
        id: 13,
        name: "Kevin Durant Wallpaper 10",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5993.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5993.JPG",
        category: "Kevin Durant"
    },
    {
        id: 12,
        name: "Kevin Durant Wallpaper 9",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5992.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5992.JPG",
        category: "Kevin Durant"
    },
    {
        id: 11,
        name: "Kevin Durant Wallpaper 8",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5991.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5991.JPG",
        category: "Kevin Durant"
    },
    {
        id: 10,
        name: "Kevin Durant Wallpaper 7",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5990.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5990.JPG",
        category: "Kevin Durant"
    },
    {
        id: 9,
        name: "Kevin Durant Wallpaper 6",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5989.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5989.JPG",
        category: "Kevin Durant"
    },
    {
        id: 8,
        name: "Kevin Durant Wallpaper 5",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5988.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5988.JPG",
        category: "Kevin Durant"
    },
    {
        id: 7,
        name: "Kevin Durant Wallpaper 4",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5987.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5987.JPG",
        category: "Kevin Durant"
    },
    {
        id: 6,
        name: "Kevin Durant Wallpaper 3",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5986.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5986.JPG",
        category: "Kevin Durant"
    },
    {
        id: 5,
        name: "Kevin Durant Wallpaper 2",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5985.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5985.JPG",
        category: "Kevin Durant"
    },
    
    // James Harden wallpapers
    {
        id: 4,
        name: "James Harden Wallpaper 9",
        thumbnail: "iphone/James Harden/James Harden_5984.JPG",
        original: "iphone/James Harden/James Harden_5984.JPG",
        category: "James Harden"
    },
    {
        id: 3,
        name: "James Harden Wallpaper 8",
        thumbnail: "iphone/James Harden/James Harden_5983.JPG",
        original: "iphone/James Harden/James Harden_5983.JPG",
        category: "James Harden"
    },
    {
        id: 2,
        name: "James Harden Wallpaper 7",
        thumbnail: "iphone/James Harden/James Harden_5982.JPG",
        original: "iphone/James Harden/James Harden_5982.JPG",
        category: "James Harden"
    },
    {
        id: 1,
        name: "James Harden Wallpaper 6",
        thumbnail: "iphone/James Harden/James Harden_5981.JPG",
        original: "iphone/James Harden/James Harden_5981.JPG",
        category: "James Harden"
    },
    {
        id: 0,
        name: "James Harden Wallpaper 5",
        thumbnail: "iphone/James Harden/James Harden_5980.JPG",
        original: "iphone/James Harden/James Harden_5980.JPG",
        category: "James Harden"
    },
    {
        id: -1,
        name: "James Harden Wallpaper 4",
        thumbnail: "iphone/James Harden/James Harden_5979.JPG",
        original: "iphone/James Harden/James Harden_5979.JPG",
        category: "James Harden"
    },
    {
        id: -2,
        name: "James Harden Wallpaper 3",
        thumbnail: "iphone/James Harden/James Harden_5978.JPG",
        original: "iphone/James Harden/James Harden_5978.JPG",
        category: "James Harden"
    },
    {
        id: -3,
        name: "James Harden Wallpaper 2",
        thumbnail: "iphone/James Harden/James Harden_5977.JPG",
        original: "iphone/James Harden/James Harden_5977.JPG",
        category: "James Harden"
    },
    {
        id: -4,
        name: "James Harden Wallpaper 1",
        thumbnail: "iphone/James Harden/James Harden_5976.JPG",
        original: "iphone/James Harden/James Harden_5976.JPG",
        category: "James Harden"
    },
    
    // LeBron James wallpapers
    {
        id: 50,
        name: "LeBron James Wallpaper 12",
        thumbnail: "iphone/LeBron James/LeBron James_6098.JPG",
        original: "iphone/LeBron James/LeBron James_6098.JPG",
        category: "LeBron James"
    },
    {
        id: 49,
        name: "LeBron James Wallpaper 11",
        thumbnail: "iphone/LeBron James/LeBron James_6097.JPG",
        original: "iphone/LeBron James/LeBron James_6097.JPG",
        category: "LeBron James"
    },
    {
        id: 48,
        name: "LeBron James Wallpaper 10",
        thumbnail: "iphone/LeBron James/LeBron James_6096.JPG",
        original: "iphone/LeBron James/LeBron James_6096.JPG",
        category: "LeBron James"
    },
    {
        id: 47,
        name: "LeBron James Wallpaper 9",
        thumbnail: "iphone/LeBron James/LeBron James_6095.JPG",
        original: "iphone/LeBron James/LeBron James_6095.JPG",
        category: "LeBron James"
    },
    {
        id: 46,
        name: "LeBron James Wallpaper 8",
        thumbnail: "iphone/LeBron James/LeBron James_6094.JPG",
        original: "iphone/LeBron James/LeBron James_6094.JPG",
        category: "LeBron James"
    },
    {
        id: 45,
        name: "LeBron James Wallpaper 7",
        thumbnail: "iphone/LeBron James/LeBron James_6093.JPG",
        original: "iphone/LeBron James/LeBron James_6093.JPG",
        category: "LeBron James"
    },
    {
        id: 44,
        name: "LeBron James Wallpaper 6",
        thumbnail: "iphone/LeBron James/LeBron James_6092.JPG",
        original: "iphone/LeBron James/LeBron James_6092.JPG",
        category: "LeBron James"
    },
    {
        id: 43,
        name: "LeBron James Wallpaper 5",
        thumbnail: "iphone/LeBron James/LeBron James_5975.JPG",
        original: "iphone/LeBron James/LeBron James_5975.JPG",
        category: "LeBron James"
    },
    {
        id: 42,
        name: "LeBron James Wallpaper 4",
        thumbnail: "iphone/LeBron James/LeBron James_5974.JPG",
        original: "iphone/LeBron James/LeBron James_5974.JPG",
        category: "LeBron James"
    },
    {
        id: 41,
        name: "LeBron James Wallpaper 3",
        thumbnail: "iphone/LeBron James/LeBron James_5973.JPG",
        original: "iphone/LeBron James/LeBron James_5973.JPG",
        category: "LeBron James"
    },
    {
        id: 40,
        name: "LeBron James Wallpaper 2",
        thumbnail: "iphone/LeBron James/LeBron James_5972.JPG",
        original: "iphone/LeBron James/LeBron James_5972.JPG",
        category: "LeBron James"
    },
    
    // Stephen Curry wallpapers
    {
        id: -9,
        name: "Stephen Curry Wallpaper 4",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_5941.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_5941.JPG",
        category: "Stephen Curry"
    },
    {
        id: -10,
        name: "Stephen Curry Wallpaper 3",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_5940.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_5940.JPG",
        category: "Stephen Curry"
    },
    {
        id: -11,
        name: "Stephen Curry Wallpaper 2",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_5939.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_5939.JPG",
        category: "Stephen Curry"
    },
    {
        id: -12,
        name: "Stephen Curry Wallpaper 1",
        thumbnail: "iphone/Stephen Curry/Stephen Curry5938.JPG",
        original: "iphone/Stephen Curry/Stephen Curry5938.JPG",
        category: "Stephen Curry"
    },
    
    // Kyrie Irving wallpapers
    {
        id: -9,
        name: "Kyrie Irving Wallpaper 4",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5971.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5971.JPG",
        category: "Kyrie Irving"
    },
    {
        id: -10,
        name: "Kyrie Irving Wallpaper 3",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5970.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5970.JPG",
        category: "Kyrie Irving"
    },
    {
        id: -11,
        name: "Kyrie Irving Wallpaper 2",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5969.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5969.JPG",
        category: "Kyrie Irving"
    },
    {
        id: -12,
        name: "Kyrie Irving Wallpaper 1",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5968.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5968.JPG",
        category: "Kyrie Irving"
    },
    
    // Slam Dunk wallpapers
    {
        id: 180,
        name: "Slam Dunk Wallpaper 20",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6176.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6176.JPG",
        category: "Slam Dunk"
    },
    {
        id: 179,
        name: "Slam Dunk Wallpaper 19",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6175.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6175.JPG",
        category: "Slam Dunk"
    },
    {
        id: 178,
        name: "Slam Dunk Wallpaper 18",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6174.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6174.JPG",
        category: "Slam Dunk"
    },
    {
        id: 177,
        name: "Slam Dunk Wallpaper 17",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6173.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6173.JPG",
        category: "Slam Dunk"
    },
    {
        id: 176,
        name: "Slam Dunk Wallpaper 16",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6172.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6172.JPG",
        category: "Slam Dunk"
    },
    {
        id: 175,
        name: "Slam Dunk Wallpaper 15",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6171.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6171.JPG",
        category: "Slam Dunk"
    },
    {
        id: 174,
        name: "Slam Dunk Wallpaper 14",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6170.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6170.JPG",
        category: "Slam Dunk"
    },
    {
        id: 173,
        name: "Slam Dunk Wallpaper 13",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6168.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6168.JPG",
        category: "Slam Dunk"
    },
    {
        id: 172,
        name: "Slam Dunk Wallpaper 12",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6167.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6167.JPG",
        category: "Slam Dunk"
    },
    {
        id: 171,
        name: "Slam Dunk Wallpaper 11",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6166.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6166.JPG",
        category: "Slam Dunk"
    },
    {
        id: 170,
        name: "Slam Dunk Wallpaper 10",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6165.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6165.JPG",
        category: "Slam Dunk"
    },
    {
        id: 169,
        name: "Slam Dunk Wallpaper 9",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6164.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6164.JPG",
        category: "Slam Dunk"
    },
    {
        id: 168,
        name: "Slam Dunk Wallpaper 8",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6162 (1).JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6162 (1).JPG",
        category: "Slam Dunk"
    },
    {
        id: 167,
        name: "Slam Dunk Wallpaper 7",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6162.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6162.JPG",
        category: "Slam Dunk"
    },
    {
        id: 166,
        name: "Slam Dunk Wallpaper 6",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6161.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6161.JPG",
        category: "Slam Dunk"
    },
    {
        id: 165,
        name: "Slam Dunk Wallpaper 5",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6124.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6124.JPG",
        category: "Slam Dunk"
    },
    {
        id: 164,
        name: "Slam Dunk Wallpaper 4",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6123.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6123.JPG",
        category: "Slam Dunk"
    },
    {
        id: 163,
        name: "Slam Dunk Wallpaper 3",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6122.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6122.JPG",
        category: "Slam Dunk"
    },
    {
        id: 162,
        name: "Slam Dunk Wallpaper 2",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6121.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6121.JPG",
        category: "Slam Dunk"
    },
    
    // Other basketball wallpapers
    {
        id: 161,
        name: "Basketball Wallpaper 83",
        thumbnail: "iphone/other basketball/basketball_6197.JPG",
        original: "iphone/other basketball/basketball_6197.JPG",
        category: "Other Basketball"
    },
    {
        id: 160,
        name: "Basketball Wallpaper 82",
        thumbnail: "iphone/other basketball/basketball_6196.JPG",
        original: "iphone/other basketball/basketball_6196.JPG",
        category: "Other Basketball"
    },
    {
        id: 159,
        name: "Basketball Wallpaper 81",
        thumbnail: "iphone/other basketball/basketball_6195.JPG",
        original: "iphone/other basketball/basketball_6195.JPG",
        category: "Other Basketball"
    },
    {
        id: 158,
        name: "Basketball Wallpaper 80",
        thumbnail: "iphone/other basketball/basketball_6194.JPG",
        original: "iphone/other basketball/basketball_6194.JPG",
        category: "Other Basketball"
    },
    {
        id: 157,
        name: "Basketball Wallpaper 79",
        thumbnail: "iphone/other basketball/basketball_6193.JPG",
        original: "iphone/other basketball/basketball_6193.JPG",
        category: "Other Basketball"
    },
    {
        id: 156,
        name: "Basketball Wallpaper 78",
        thumbnail: "iphone/other basketball/basketball_6191.JPG",
        original: "iphone/other basketball/basketball_6191.JPG",
        category: "Other Basketball"
    },
    {
        id: 155,
        name: "Basketball Wallpaper 77",
        thumbnail: "iphone/other basketball/basketball_6190.JPG",
        original: "iphone/other basketball/basketball_6190.JPG",
        category: "Other Basketball"
    },
    {
        id: 154,
        name: "Basketball Wallpaper 76",
        thumbnail: "iphone/other basketball/basketball_6189.JPG",
        original: "iphone/other basketball/basketball_6189.JPG",
        category: "Other Basketball"
    },
    {
        id: 153,
        name: "Basketball Wallpaper 75",
        thumbnail: "iphone/other basketball/basketball_6188.JPG",
        original: "iphone/other basketball/basketball_6188.JPG",
        category: "Other Basketball"
    },
    {
        id: 152,
        name: "Basketball Wallpaper 74",
        thumbnail: "iphone/other basketball/basketball_6187.JPG",
        original: "iphone/other basketball/basketball_6187.JPG",
        category: "Other Basketball"
    },
    {
        id: 151,
        name: "Basketball Wallpaper 73",
        thumbnail: "iphone/other basketball/basketball_6186.JPG",
        original: "iphone/other basketball/basketball_6186.JPG",
        category: "Other Basketball"
    },
    {
        id: 150,
        name: "Basketball Wallpaper 72",
        thumbnail: "iphone/other basketball/basketball_6185.JPG",
        original: "iphone/other basketball/basketball_6185.JPG",
        category: "Other Basketball"
    },
    {
        id: 149,
        name: "Basketball Wallpaper 71",
        thumbnail: "iphone/other basketball/basketball_6184.JPG",
        original: "iphone/other basketball/basketball_6184.JPG",
        category: "Other Basketball"
    },
    {
        id: 148,
        name: "Basketball Wallpaper 70",
        thumbnail: "iphone/other basketball/basketball_6183.JPG",
        original: "iphone/other basketball/basketball_6183.JPG",
        category: "Other Basketball"
    },
    {
        id: 147,
        name: "Basketball Wallpaper 69",
        thumbnail: "iphone/other basketball/basketball_6182.JPG",
        original: "iphone/other basketball/basketball_6182.JPG",
        category: "Other Basketball"
    },
    {
        id: 146,
        name: "Basketball Wallpaper 68",
        thumbnail: "iphone/other basketball/basketball_6181.JPG",
        original: "iphone/other basketball/basketball_6181.JPG",
        category: "Other Basketball"
    },
    {
        id: 145,
        name: "Basketball Wallpaper 67",
        thumbnail: "iphone/other basketball/basketball_6180.JPG",
        original: "iphone/other basketball/basketball_6180.JPG",
        category: "Other Basketball"
    },
    {
        id: 144,
        name: "Basketball Wallpaper 66",
        thumbnail: "iphone/other basketball/basketball_6179.JPG",
        original: "iphone/other basketball/basketball_6179.JPG",
        category: "Other Basketball"
    },
    {
        id: 143,
        name: "Basketball Wallpaper 65",
        thumbnail: "iphone/other basketball/basketball_6178.JPG",
        original: "iphone/other basketball/basketball_6178.JPG",
        category: "Other Basketball"
    },
    {
        id: 142,
        name: "Basketball Wallpaper 64",
        thumbnail: "iphone/other basketball/basketball_6177.JPG",
        original: "iphone/other basketball/basketball_6177.JPG",
        category: "Other Basketball"
    },
    {
        id: 141,
        name: "Basketball Wallpaper 63",
        thumbnail: "iphone/other basketball/basketball_6158.JPG",
        original: "iphone/other basketball/basketball_6158.JPG",
        category: "Other Basketball"
    },
    {
        id: 140,
        name: "Basketball Wallpaper 62",
        thumbnail: "iphone/other basketball/basketball_6157.JPG",
        original: "iphone/other basketball/basketball_6157.JPG",
        category: "Other Basketball"
    },
    {
        id: 139,
        name: "Basketball Wallpaper 61",
        thumbnail: "iphone/other basketball/basketball_6155.JPG",
        original: "iphone/other basketball/basketball_6155.JPG",
        category: "Other Basketball"
    },
    {
        id: 138,
        name: "Basketball Wallpaper 60",
        thumbnail: "iphone/other basketball/basketball_6154.JPG",
        original: "iphone/other basketball/basketball_6154.JPG",
        category: "Other Basketball"
    },
    {
        id: 137,
        name: "Basketball Wallpaper 59",
        thumbnail: "iphone/other basketball/basketball_6153.JPG",
        original: "iphone/other basketball/basketball_6153.JPG",
        category: "Other Basketball"
    },
    {
        id: 136,
        name: "Basketball Wallpaper 58",
        thumbnail: "iphone/other basketball/basketball_6152.JPG",
        original: "iphone/other basketball/basketball_6152.JPG",
        category: "Other Basketball"
    },
    {
        id: 135,
        name: "Basketball Wallpaper 57",
        thumbnail: "iphone/other basketball/basketball_6151.JPG",
        original: "iphone/other basketball/basketball_6151.JPG",
        category: "Other Basketball"
    },
    {
        id: 134,
        name: "Basketball Wallpaper 56",
        thumbnail: "iphone/other basketball/basketball_6150.JPG",
        original: "iphone/other basketball/basketball_6150.JPG",
        category: "Other Basketball"
    },
    {
        id: 133,
        name: "Basketball Wallpaper 55",
        thumbnail: "iphone/other basketball/basketball_6149.JPG",
        original: "iphone/other basketball/basketball_6149.JPG",
        category: "Other Basketball"
    },
    {
        id: 132,
        name: "Basketball Wallpaper 54",
        thumbnail: "iphone/other basketball/basketball_6148.JPG",
        original: "iphone/other basketball/basketball_6148.JPG",
        category: "Other Basketball"
    },
    {
        id: 131,
        name: "Basketball Wallpaper 53",
        thumbnail: "iphone/other basketball/basketball_6147.JPG",
        original: "iphone/other basketball/basketball_6147.JPG",
        category: "Other Basketball"
    },
    {
        id: 130,
        name: "Basketball Wallpaper 52",
        thumbnail: "iphone/other basketball/basketball_6146.JPG",
        original: "iphone/other basketball/basketball_6146.JPG",
        category: "Other Basketball"
    },
    {
        id: 129,
        name: "Basketball Wallpaper 51",
        thumbnail: "iphone/other basketball/basketball_6144.JPG",
        original: "iphone/other basketball/basketball_6144.JPG",
        category: "Other Basketball"
    },
    {
        id: 128,
        name: "Basketball Wallpaper 50",
        thumbnail: "iphone/other basketball/basketball_6143.JPG",
        original: "iphone/other basketball/basketball_6143.JPG",
        category: "Other Basketball"
    },
    {
        id: 127,
        name: "Basketball Wallpaper 49",
        thumbnail: "iphone/other basketball/basketball_6142.JPG",
        original: "iphone/other basketball/basketball_6142.JPG",
        category: "Other Basketball"
    },
    {
        id: 126,
        name: "Basketball Wallpaper 48",
        thumbnail: "iphone/other basketball/basketball_6141.JPG",
        original: "iphone/other basketball/basketball_6141.JPG",
        category: "Other Basketball"
    },
    {
        id: 125,
        name: "Basketball Wallpaper 47",
        thumbnail: "iphone/other basketball/basketball_6140.JPG",
        original: "iphone/other basketball/basketball_6140.JPG",
        category: "Other Basketball"
    },
    {
        id: 124,
        name: "Basketball Wallpaper 46",
        thumbnail: "iphone/other basketball/basketball_6139.JPG",
        original: "iphone/other basketball/basketball_6139.JPG",
        category: "Other Basketball"
    },
    {
        id: 123,
        name: "Basketball Wallpaper 45",
        thumbnail: "iphone/other basketball/basketball_6138.JPG",
        original: "iphone/other basketball/basketball_6138.JPG",
        category: "Other Basketball"
    },
    {
        id: 122,
        name: "Basketball Wallpaper 44",
        thumbnail: "iphone/other basketball/basketball_6137.JPG",
        original: "iphone/other basketball/basketball_6137.JPG",
        category: "Other Basketball"
    },
    {
        id: 121,
        name: "Basketball Wallpaper 43",
        thumbnail: "iphone/other basketball/basketball_6136.JPG",
        original: "iphone/other basketball/basketball_6136.JPG",
        category: "Other Basketball"
    },
    {
        id: 120,
        name: "Basketball Wallpaper 42",
        thumbnail: "iphone/other basketball/basketball_6135.JPG",
        original: "iphone/other basketball/basketball_6135.JPG",
        category: "Other Basketball"
    },
    {
        id: 119,
        name: "Basketball Wallpaper 41",
        thumbnail: "iphone/other basketball/basketball_6134.JPG",
        original: "iphone/other basketball/basketball_6134.JPG",
        category: "Other Basketball"
    },
    {
        id: 118,
        name: "Basketball Wallpaper 40",
        thumbnail: "iphone/other basketball/basketball_6133.JPG",
        original: "iphone/other basketball/basketball_6133.JPG",
        category: "Other Basketball"
    },
    {
        id: 117,
        name: "Basketball Wallpaper 39",
        thumbnail: "iphone/other basketball/basketball_6132.JPG",
        original: "iphone/other basketball/basketball_6132.JPG",
        category: "Other Basketball"
    },
    {
        id: 116,
        name: "Basketball Wallpaper 38",
        thumbnail: "iphone/other basketball/basketball_6131.JPG",
        original: "iphone/other basketball/basketball_6131.JPG",
        category: "Other Basketball"
    },
    {
        id: 115,
        name: "Basketball Wallpaper 37",
        thumbnail: "iphone/other basketball/basketball_6130.JPG",
        original: "iphone/other basketball/basketball_6130.JPG",
        category: "Other Basketball"
    },
    {
        id: 114,
        name: "Basketball Wallpaper 36",
        thumbnail: "iphone/other basketball/basketball_6129.JPG",
        original: "iphone/other basketball/basketball_6129.JPG",
        category: "Other Basketball"
    },
    {
        id: 113,
        name: "Basketball Wallpaper 35",
        thumbnail: "iphone/other basketball/basketball_6128.JPG",
        original: "iphone/other basketball/basketball_6128.JPG",
        category: "Other Basketball"
    },
    {
        id: 112,
        name: "Basketball Wallpaper 34",
        thumbnail: "iphone/other basketball/basketball_6126.JPG",
        original: "iphone/other basketball/basketball_6126.JPG",
        category: "Other Basketball"
    },
    {
        id: 111,
        name: "Basketball Wallpaper 33",
        thumbnail: "iphone/other basketball/basketball_6125.JPG",
        original: "iphone/other basketball/basketball_6125.JPG",
        category: "Other Basketball"
    },
    {
        id: 110,
        name: "Basketball Wallpaper 32",
        thumbnail: "iphone/other basketball/basketball_6120.JPG",
        original: "iphone/other basketball/basketball_6120.JPG",
        category: "Other Basketball"
    },
    {
        id: 109,
        name: "Basketball Wallpaper 31",
        thumbnail: "iphone/other basketball/basketball_6119.JPG",
        original: "iphone/other basketball/basketball_6119.JPG",
        category: "Other Basketball"
    },
    {
        id: 108,
        name: "Basketball Wallpaper 30",
        thumbnail: "iphone/other basketball/basketball_6118.JPG",
        original: "iphone/other basketball/basketball_6118.JPG",
        category: "Other Basketball"
    },
    {
        id: 107,
        name: "Basketball Wallpaper 29",
        thumbnail: "iphone/other basketball/basketball_6117.JPG",
        original: "iphone/other basketball/basketball_6117.JPG",
        category: "Other Basketball"
    },
    {
        id: 106,
        name: "Basketball Wallpaper 28",
        thumbnail: "iphone/other basketball/basketball_6116.JPG",
        original: "iphone/other basketball/basketball_6116.JPG",
        category: "Other Basketball"
    },
    {
        id: 105,
        name: "Basketball Wallpaper 27",
        thumbnail: "iphone/other basketball/basketball_6115.JPG",
        original: "iphone/other basketball/basketball_6115.JPG",
        category: "Other Basketball"
    },
    {
        id: 104,
        name: "Basketball Wallpaper 26",
        thumbnail: "iphone/other basketball/basketball_6114.JPG",
        original: "iphone/other basketball/basketball_6114.JPG",
        category: "Other Basketball"
    },
    {
        id: 103,
        name: "Basketball Wallpaper 25",
        thumbnail: "iphone/other basketball/basketball_6113.JPG",
        original: "iphone/other basketball/basketball_6113.JPG",
        category: "Other Basketball"
    },
    {
        id: 102,
        name: "Basketball Wallpaper 24",
        thumbnail: "iphone/other basketball/basketball_6112.JPG",
        original: "iphone/other basketball/basketball_6112.JPG",
        category: "Other Basketball"
    },
    {
        id: 101,
        name: "Basketball Wallpaper 23",
        thumbnail: "iphone/other basketball/basketball_6111.JPG",
        original: "iphone/other basketball/basketball_6111.JPG",
        category: "Other Basketball"
    },
    {
        id: 100,
        name: "Basketball Wallpaper 22",
        thumbnail: "iphone/other basketball/basketball_6110.JPG",
        original: "iphone/other basketball/basketball_6110.JPG",
        category: "Other Basketball"
    },
    {
        id: 99,
        name: "Basketball Wallpaper 21",
        thumbnail: "iphone/other basketball/basketball_6109.JPG",
        original: "iphone/other basketball/basketball_6109.JPG",
        category: "Other Basketball"
    },
    {
        id: 98,
        name: "Basketball Wallpaper 20",
        thumbnail: "iphone/other basketball/basketball_6108.JPG",
        original: "iphone/other basketball/basketball_6108.JPG",
        category: "Other Basketball"
    },
    {
        id: 97,
        name: "Basketball Wallpaper 19",
        thumbnail: "iphone/other basketball/basketball_6107.JPG",
        original: "iphone/other basketball/basketball_6107.JPG",
        category: "Other Basketball"
    },
    {
        id: 96,
        name: "Basketball Wallpaper 18",
        thumbnail: "iphone/other basketball/basketball_6106.JPG",
        original: "iphone/other basketball/basketball_6106.JPG",
        category: "Other Basketball"
    },
    {
        id: 95,
        name: "Basketball Wallpaper 17",
        thumbnail: "iphone/other basketball/basketball_6105.JPG",
        original: "iphone/other basketball/basketball_6105.JPG",
        category: "Other Basketball"
    },
    {
        id: 94,
        name: "Basketball Wallpaper 16",
        thumbnail: "iphone/other basketball/basketball_6104.JPG",
        original: "iphone/other basketball/basketball_6104.JPG",
        category: "Other Basketball"
    },
    {
        id: 93,
        name: "Basketball Wallpaper 15",
        thumbnail: "iphone/other basketball/basketball_6103.JPG",
        original: "iphone/other basketball/basketball_6103.JPG",
        category: "Other Basketball"
    },
    {
        id: 92,
        name: "Basketball Wallpaper 14",
        thumbnail: "iphone/other basketball/basketball_6102.JPG",
        original: "iphone/other basketball/basketball_6102.JPG",
        category: "Other Basketball"
    },
    {
        id: 91,
        name: "Basketball Wallpaper 13",
        thumbnail: "iphone/other basketball/basketball_6101.JPG",
        original: "iphone/other basketball/basketball_6101.JPG",
        category: "Other Basketball"
    },
    {
        id: 90,
        name: "Basketball Wallpaper 12",
        thumbnail: "iphone/other basketball/basketball_6100.JPG",
        original: "iphone/other basketball/basketball_6100.JPG",
        category: "Other Basketball"
    },
    {
        id: 89,
        name: "Basketball Wallpaper 11",
        thumbnail: "iphone/other basketball/basketball_6099.JPG",
        original: "iphone/other basketball/basketball_6099.JPG",
        category: "Other Basketball"
    },
    {
        id: 88,
        name: "Basketball Wallpaper 10",
        thumbnail: "iphone/other basketball/basketball_5967.JPG",
        original: "iphone/other basketball/basketball_5967.JPG",
        category: "Other Basketball"
    },
    {
        id: 87,
        name: "Basketball Wallpaper 9",
        thumbnail: "iphone/other basketball/basketball_5966.JPG",
        original: "iphone/other basketball/basketball_5966.JPG",
        category: "Other Basketball"
    },
    {
        id: 86,
        name: "Basketball Wallpaper 8",
        thumbnail: "iphone/other basketball/basketball_5964.JPG",
        original: "iphone/other basketball/basketball_5964.JPG",
        category: "Other Basketball"
    },
    {
        id: 85,
        name: "Basketball Wallpaper 7",
        thumbnail: "iphone/other basketball/basketball_5961.JPG",
        original: "iphone/other basketball/basketball_5961.JPG",
        category: "Other Basketball"
    },
    {
        id: 84,
        name: "Basketball Wallpaper 6",
        thumbnail: "iphone/other basketball/basketball_5960.JPG",
        original: "iphone/other basketball/basketball_5960.JPG",
        category: "Other Basketball"
    },
    {
        id: 83,
        name: "Basketball Wallpaper 5",
        thumbnail: "iphone/other basketball/basketball_5959.JPG",
        original: "iphone/other basketball/basketball_5959.JPG",
        category: "Other Basketball"
    },
    {
        id: 82,
        name: "Basketball Wallpaper 4",
        thumbnail: "iphone/other basketball/basketball_5958.JPG",
        original: "iphone/other basketball/basketball_5958.JPG",
        category: "Other Basketball"
    },
    {
        id: 81,
        name: "Basketball Wallpaper 3",
        thumbnail: "iphone/other basketball/basketball_5956.JPG",
        original: "iphone/other basketball/basketball_5956.JPG",
        category: "Other Basketball"
    },
    {
        id: 80,
        name: "Basketball Wallpaper 2",
        thumbnail: "iphone/other basketball/basketball_5955.JPG",
        original: "iphone/other basketball/basketball_5955.JPG",
        category: "Other Basketball"
    }
];

// DOM Elements
const wallpapersContainer = document.getElementById('wallpapers-container');
const previewModal = document.getElementById('preview-modal');
const previewImage = document.getElementById('preview-image');
const downloadLink = document.getElementById('download-link');
const closeModal = document.querySelector('.close');
const privacyLink = document.getElementById('privacy-link');
const termsLink = document.getElementById('terms-link');
const contactLink = document.getElementById('contact-link');
const categoryLinks = document.querySelectorAll('.category-link');
const sortSelect = document.getElementById('sort-order');

// Current category filter and sort order
let currentCategory = 'all';
let currentSortOrder = 'newest';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Ballstar website loaded');
    displayWallpapers(wallpapers);
    setupEventListeners();
});

// Display wallpapers in the grid
function displayWallpapers(wallpaperList) {
    wallpapersContainer.innerHTML = '';
    
    if (wallpaperList.length === 0) {
        wallpapersContainer.innerHTML = `
            <div class="no-results">
                <p>No wallpapers found.</p>
            </div>
        `;
        return;
    }
    
    wallpaperList.forEach(wallpaper => {
        const wallpaperElement = document.createElement('div');
        wallpaperElement.className = 'wallpaper-item';
        wallpaperElement.innerHTML = `
            <div class="free-badge">Free</div>
            <img src="${wallpaper.thumbnail}" alt="${wallpaper.name}" class="wallpaper-thumb" data-id="${wallpaper.id}" loading="lazy">
            <button class="download-thumb-btn" data-id="${wallpaper.id}">Download</button>
        `;
        wallpapersContainer.appendChild(wallpaperElement);
    });
    
    // Add event listeners to new elements
    addWallpaperEventListeners();
    
    // Trigger loading of images that are in viewport
    if ('IntersectionObserver' in window) {
        loadVisibleImages();
    }
}

// Add event listeners to wallpaper elements
function addWallpaperEventListeners() {
    // Thumbnail click for preview
    document.querySelectorAll('.wallpaper-thumb').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            openPreview(id);
        });
    });
    
    // Download button click
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const id = parseInt(this.getAttribute('data-id'));
            // Increment download count
            incrementDownloadCount(id);
        });
    });
    
    // Thumbnail download button click
    document.querySelectorAll('.download-thumb-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the thumbnail click
            const id = parseInt(this.getAttribute('data-id'));
            const wallpaper = wallpapers.find(w => w.id === id);
            if (wallpaper) {
                // Create a temporary link to trigger download
                const link = document.createElement('a');
                link.href = wallpaper.original;
                link.download = `${wallpaper.name.replace(/\s+/g, '_')}_ballstar_wallpaper.jpg`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Increment download count
                incrementDownloadCount(id);
            }
        });
    });
}

// Increment download count for a wallpaper
function incrementDownloadCount(wallpaperId) {
    const wallpaper = wallpapers.find(w => w.id === wallpaperId);
    if (wallpaper) {
        if (!wallpaper.downloadCount) {
            wallpaper.downloadCount = 0;
        }
        wallpaper.downloadCount++;
        console.log(`Wallpaper ${wallpaperId} downloaded. Total downloads: ${wallpaper.downloadCount}`);
    }
}

// Set up global event listeners
function setupEventListeners() {
    // Category filtering
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.getAttribute('data-category');
            filterByCategory(category);
        });
    });
    
    // Sort order change
    sortSelect.addEventListener('change', function() {
        currentSortOrder = this.value;
        filterByCategory(currentCategory);
    });
    
    // Modal close
    closeModal.addEventListener('click', function() {
        previewModal.style.display = 'none';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === previewModal) {
            previewModal.style.display = 'none';
        }
    });
    
    // Footer links
    privacyLink.addEventListener('click', function(e) {
        // Allow default behavior to navigate to privacy policy page
        window.location.href = '/privacy-policy.html';
    });
    
    termsLink.addEventListener('click', function(e) {
        // Allow default behavior to navigate to terms of use page
        window.location.href = '/terms-of-use.html';
    });
    
    contactLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Contact Us: tankeapp@gmail.com\n\nIf the content infringes any rights, please contact us via email to have it removed.');
    });
}

// Filter wallpapers by category
function filterByCategory(category) {
    currentCategory = category;
    
    // Update active category link
    categoryLinks.forEach(link => {
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Filter wallpapers
    let filteredWallpapers;
    if (category === 'all') {
        filteredWallpapers = [...wallpapers];
    } else {
        filteredWallpapers = wallpapers.filter(wallpaper => wallpaper.category === category);
    }
    
    // Sort wallpapers based on current sort order
    if (currentSortOrder === 'newest') {
        // Sort by ID in descending order (newest first)
        filteredWallpapers.sort((a, b) => b.id - a.id);
    } else if (currentSortOrder === 'downloads') {
        // Sort by download count in descending order (most downloads first)
        // Wallpapers without download count are treated as having 0 downloads
        filteredWallpapers.sort((a, b) => {
            const aCount = a.downloadCount || 0;
            const bCount = b.downloadCount || 0;
            return bCount - aCount;
        });
    }
    
    displayWallpapers(filteredWallpapers);
}

// Open preview modal
function openPreview(wallpaperId) {
    const wallpaper = wallpapers.find(w => w.id === wallpaperId);
    
    if (wallpaper) {
        previewImage.src = wallpaper.original;
        previewImage.alt = wallpaper.name;
        downloadLink.href = wallpaper.original;
        downloadLink.download = `${wallpaper.name.replace(/\s+/g, '_')}_ballstar_wallpaper.jpg`;
        downloadLink.setAttribute('data-id', wallpaperId);
        previewModal.style.display = 'block';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === previewModal) {
        previewModal.style.display = 'none';
    }
});

// Load images that are in viewport
function loadVisibleImages() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                // Trigger loading by removing lazy loading attribute
                img.loading = 'eager';
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('.wallpaper-thumb').forEach(img => {
        imageObserver.observe(img);
    });
}