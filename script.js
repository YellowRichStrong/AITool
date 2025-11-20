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
    // Allen Iverson wallpapers (newest first)
    {
        id: 1000,
        name: "Allen Iverson Wallpaper 56",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6666.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6666.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1001,
        name: "Allen Iverson Wallpaper 55",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6672.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6672.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1002,
        name: "Allen Iverson Wallpaper 54",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6667.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6667.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1003,
        name: "Allen Iverson Wallpaper 53",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6659.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6659.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1004,
        name: "Allen Iverson Wallpaper 52",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6671.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6671.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1005,
        name: "Allen Iverson Wallpaper 51",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6665.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6665.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1006,
        name: "Allen Iverson Wallpaper 50",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6664.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6664.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1007,
        name: "Allen Iverson Wallpaper 49",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6670.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6670.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1008,
        name: "Allen Iverson Wallpaper 48",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6658.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6658.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1009,
        name: "Allen Iverson Wallpaper 47",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6660.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6660.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1010,
        name: "Allen Iverson Wallpaper 46",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6661.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6661.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1011,
        name: "Allen Iverson Wallpaper 45",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6449.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6449.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1012,
        name: "Allen Iverson Wallpaper 44",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6663.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6663.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1013,
        name: "Allen Iverson Wallpaper 43",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6662.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6662.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1014,
        name: "Allen Iverson Wallpaper 42",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6438.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6438.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1015,
        name: "Allen Iverson Wallpaper 41",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6028.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6028.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1016,
        name: "Allen Iverson Wallpaper 40",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6029.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6029.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1017,
        name: "Allen Iverson Wallpaper 39",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6439.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6439.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1018,
        name: "Allen Iverson Wallpaper 38",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6429.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6429.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1019,
        name: "Allen Iverson Wallpaper 37",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6038.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6038.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1020,
        name: "Allen Iverson Wallpaper 36",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6428.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6428.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1021,
        name: "Allen Iverson Wallpaper 35",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6432.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6432.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1022,
        name: "Allen Iverson Wallpaper 34",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6036.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6036.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1023,
        name: "Allen Iverson Wallpaper 33",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6022.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6022.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1024,
        name: "Allen Iverson Wallpaper 32",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6023.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6023.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1025,
        name: "Allen Iverson Wallpaper 31",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6037.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6037.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1026,
        name: "Allen Iverson Wallpaper 30",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6433.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6433.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1027,
        name: "Allen Iverson Wallpaper 29",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6427.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6427.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1028,
        name: "Allen Iverson Wallpaper 28",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6431.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6431.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1029,
        name: "Allen Iverson Wallpaper 27",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6021.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6021.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1030,
        name: "Allen Iverson Wallpaper 26",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6035.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6035.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1031,
        name: "Allen Iverson Wallpaper 25",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6034.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6034.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1032,
        name: "Allen Iverson Wallpaper 24",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6430.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6430.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1033,
        name: "Allen Iverson Wallpaper 23",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6434.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6434.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1034,
        name: "Allen Iverson Wallpaper 22",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6024.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6024.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1035,
        name: "Allen Iverson Wallpaper 21",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6030.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6030.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1036,
        name: "Allen Iverson Wallpaper 20",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6031.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6031.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1037,
        name: "Allen Iverson Wallpaper 19",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6025.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6025.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1038,
        name: "Allen Iverson Wallpaper 18",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6435.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6435.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1039,
        name: "Allen Iverson Wallpaper 17",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6027.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6027.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1040,
        name: "Allen Iverson Wallpaper 16",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6026.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6026.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1041,
        name: "Allen Iverson Wallpaper 15",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6032.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6032.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1042,
        name: "Allen Iverson Wallpaper 14",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6436.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6436.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1043,
        name: "Allen Iverson Wallpaper 13",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6445.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6445.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1044,
        name: "Allen Iverson Wallpaper 12",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6685.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6685.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1045,
        name: "Allen Iverson Wallpaper 11",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6450.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6450.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1046,
        name: "Allen Iverson Wallpaper 10",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6444.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6444.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1047,
        name: "Allen Iverson Wallpaper 9",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6446.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6446.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1048,
        name: "Allen Iverson Wallpaper 8",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6447.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6447.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1049,
        name: "Allen Iverson Wallpaper 7",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6443.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6443.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1050,
        name: "Allen Iverson Wallpaper 6",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6669.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6669.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1051,
        name: "Allen Iverson Wallpaper 5",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6668.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6668.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1052,
        name: "Allen Iverson Wallpaper 4",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6442.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6442.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1053,
        name: "Allen Iverson Wallpaper 3",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6440.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6440.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1054,
        name: "Allen Iverson Wallpaper 2",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6657.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6657.JPG",
        category: "Allen Iverson"
    },
    {
        id: 1055,
        name: "Allen Iverson Wallpaper 1",
        thumbnail: "iphone/Allen Iverson/Allen Iverson_6441.JPG",
        original: "iphone/Allen Iverson/Allen Iverson_6441.JPG",
        category: "Allen Iverson"
    },

    // Carmelo Anthony wallpapers (newest first)
    {
        id: 1056,
        name: "Carmelo Anthony Wallpaper 27",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6019.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6019.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1057,
        name: "Carmelo Anthony Wallpaper 26",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6018.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6018.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1058,
        name: "Carmelo Anthony Wallpaper 25",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6020.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6020.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1059,
        name: "Carmelo Anthony Wallpaper 24",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6008.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6008.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1060,
        name: "Carmelo Anthony Wallpaper 23",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6009.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6009.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1061,
        name: "Carmelo Anthony Wallpaper 22",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6697.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6697.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1062,
        name: "Carmelo Anthony Wallpaper 21",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6696.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6696.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1063,
        name: "Carmelo Anthony Wallpaper 20",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6694.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6694.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1064,
        name: "Carmelo Anthony Wallpaper 19",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6695.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6695.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1065,
        name: "Carmelo Anthony Wallpaper 18",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6691.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6691.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1066,
        name: "Carmelo Anthony Wallpaper 17",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6690.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6690.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1067,
        name: "Carmelo Anthony Wallpaper 16",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6692.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6692.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1068,
        name: "Carmelo Anthony Wallpaper 15",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6693.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6693.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1069,
        name: "Carmelo Anthony Wallpaper 14",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6687.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6687.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1070,
        name: "Carmelo Anthony Wallpaper 13",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6688.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6688.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1071,
        name: "Carmelo Anthony Wallpaper 12",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6698.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6698.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1072,
        name: "Carmelo Anthony Wallpaper 11",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6006 2.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6006 2.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1073,
        name: "Carmelo Anthony Wallpaper 10",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6010.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6010.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1074,
        name: "Carmelo Anthony Wallpaper 9",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6005.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6005.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1075,
        name: "Carmelo Anthony Wallpaper 8",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6011.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6011.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1076,
        name: "Carmelo Anthony Wallpaper 7",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6013.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6013.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1077,
        name: "Carmelo Anthony Wallpaper 6",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6012.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6012.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1078,
        name: "Carmelo Anthony Wallpaper 5",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6006.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6006.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1079,
        name: "Carmelo Anthony Wallpaper 4",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6016.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6016.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1080,
        name: "Carmelo Anthony Wallpaper 3",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6017.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6017.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1081,
        name: "Carmelo Anthony Wallpaper 2",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6015.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6015.JPG",
        category: "Carmelo Anthony"
    },
    {
        id: 1082,
        name: "Carmelo Anthony Wallpaper 1",
        thumbnail: "iphone/Carmelo Anthony/Carmelo Anthony_6014.JPG",
        original: "iphone/Carmelo Anthony/Carmelo Anthony_6014.JPG",
        category: "Carmelo Anthony"
    },

    // James Harden wallpapers (newest first)
    {
        id: 1083,
        name: "James Harden Wallpaper 101",
        thumbnail: "iphone/James Harden/james harden_5194.JPG",
        original: "iphone/James Harden/james harden_5194.JPG",
        category: "James Harden"
    },
    {
        id: 1084,
        name: "James Harden Wallpaper 100",
        thumbnail: "iphone/James Harden/james harden_5180.JPG",
        original: "iphone/James Harden/james harden_5180.JPG",
        category: "James Harden"
    },
    {
        id: 1085,
        name: "James Harden Wallpaper 99",
        thumbnail: "iphone/James Harden/james harden_5157.JPG",
        original: "iphone/James Harden/james harden_5157.JPG",
        category: "James Harden"
    },
    {
        id: 1086,
        name: "James Harden Wallpaper 98",
        thumbnail: "iphone/James Harden/james harden_5209.JPG",
        original: "iphone/James Harden/james harden_5209.JPG",
        category: "James Harden"
    },
    {
        id: 1087,
        name: "James Harden Wallpaper 97",
        thumbnail: "iphone/James Harden/james harden_5221.JPG",
        original: "iphone/James Harden/james harden_5221.JPG",
        category: "James Harden"
    },
    {
        id: 1088,
        name: "James Harden Wallpaper 96",
        thumbnail: "iphone/James Harden/james harden_5235.JPG",
        original: "iphone/James Harden/james harden_5235.JPG",
        category: "James Harden"
    },
    {
        id: 1089,
        name: "James Harden Wallpaper 95",
        thumbnail: "iphone/James Harden/James Harden_5976.JPG",
        original: "iphone/James Harden/James Harden_5976.JPG",
        category: "James Harden"
    },
    {
        id: 1090,
        name: "James Harden Wallpaper 94",
        thumbnail: "iphone/James Harden/James Harden_5977.JPG",
        original: "iphone/James Harden/James Harden_5977.JPG",
        category: "James Harden"
    },
    {
        id: 1091,
        name: "James Harden Wallpaper 93",
        thumbnail: "iphone/James Harden/james harden_5234.JPG",
        original: "iphone/James Harden/james harden_5234.JPG",
        category: "James Harden"
    },
    {
        id: 1092,
        name: "James Harden Wallpaper 92",
        thumbnail: "iphone/James Harden/james harden_5220.JPG",
        original: "iphone/James Harden/james harden_5220.JPG",
        category: "James Harden"
    },
    {
        id: 1093,
        name: "James Harden Wallpaper 91",
        thumbnail: "iphone/James Harden/james harden_5208.JPG",
        original: "iphone/James Harden/james harden_5208.JPG",
        category: "James Harden"
    },
    {
        id: 1094,
        name: "James Harden Wallpaper 90",
        thumbnail: "iphone/James Harden/james harden_5156.JPG",
        original: "iphone/James Harden/james harden_5156.JPG",
        category: "James Harden"
    },
    {
        id: 1095,
        name: "James Harden Wallpaper 89",
        thumbnail: "iphone/James Harden/james harden_5181.JPG",
        original: "iphone/James Harden/james harden_5181.JPG",
        category: "James Harden"
    },
    {
        id: 1096,
        name: "James Harden Wallpaper 88",
        thumbnail: "iphone/James Harden/james harden_5195.JPG",
        original: "iphone/James Harden/james harden_5195.JPG",
        category: "James Harden"
    },
    {
        id: 1097,
        name: "James Harden Wallpaper 87",
        thumbnail: "iphone/James Harden/james harden_5183.JPG",
        original: "iphone/James Harden/james harden_5183.JPG",
        category: "James Harden"
    },
    {
        id: 1098,
        name: "James Harden Wallpaper 86",
        thumbnail: "iphone/James Harden/james harden_5197.JPG",
        original: "iphone/James Harden/james harden_5197.JPG",
        category: "James Harden"
    },
    {
        id: 1099,
        name: "James Harden Wallpaper 85",
        thumbnail: "iphone/James Harden/james harden_5168.JPG",
        original: "iphone/James Harden/james harden_5168.JPG",
        category: "James Harden"
    },
    {
        id: 1100,
        name: "James Harden Wallpaper 84",
        thumbnail: "iphone/James Harden/james harden_5236.JPG",
        original: "iphone/James Harden/james harden_5236.JPG",
        category: "James Harden"
    },
    {
        id: 1101,
        name: "James Harden Wallpaper 83",
        thumbnail: "iphone/James Harden/james harden_5222.JPG",
        original: "iphone/James Harden/james harden_5222.JPG",
        category: "James Harden"
    },
    {
        id: 1102,
        name: "James Harden Wallpaper 82",
        thumbnail: "iphone/James Harden/james harden_5223.JPG",
        original: "iphone/James Harden/james harden_5223.JPG",
        category: "James Harden"
    },
    {
        id: 1103,
        name: "James Harden Wallpaper 81",
        thumbnail: "iphone/James Harden/james harden_5237.JPG",
        original: "iphone/James Harden/james harden_5237.JPG",
        category: "James Harden"
    },
    {
        id: 1104,
        name: "James Harden Wallpaper 80",
        thumbnail: "iphone/James Harden/james harden_5169.JPG",
        original: "iphone/James Harden/james harden_5169.JPG",
        category: "James Harden"
    },
    {
        id: 1105,
        name: "James Harden Wallpaper 79",
        thumbnail: "iphone/James Harden/james harden_5196.JPG",
        original: "iphone/James Harden/james harden_5196.JPG",
        category: "James Harden"
    },
    {
        id: 1106,
        name: "James Harden Wallpaper 78",
        thumbnail: "iphone/James Harden/james harden_5182.JPG",
        original: "iphone/James Harden/james harden_5182.JPG",
        category: "James Harden"
    },
    {
        id: 1107,
        name: "James Harden Wallpaper 77",
        thumbnail: "iphone/James Harden/james harden_5186.JPG",
        original: "iphone/James Harden/james harden_5186.JPG",
        category: "James Harden"
    },
    {
        id: 1108,
        name: "James Harden Wallpaper 76",
        thumbnail: "iphone/James Harden/james harden_5192.JPG",
        original: "iphone/James Harden/james harden_5192.JPG",
        category: "James Harden"
    },
    {
        id: 1109,
        name: "James Harden Wallpaper 75",
        thumbnail: "iphone/James Harden/james harden_5179.JPG",
        original: "iphone/James Harden/james harden_5179.JPG",
        category: "James Harden"
    },
    {
        id: 1110,
        name: "James Harden Wallpaper 74",
        thumbnail: "iphone/James Harden/james harden_5233.JPG",
        original: "iphone/James Harden/james harden_5233.JPG",
        category: "James Harden"
    },
    {
        id: 1111,
        name: "James Harden Wallpaper 73",
        thumbnail: "iphone/James Harden/james harden_5227.JPG",
        original: "iphone/James Harden/james harden_5227.JPG",
        category: "James Harden"
    },
    {
        id: 1112,
        name: "James Harden Wallpaper 72",
        thumbnail: "iphone/James Harden/james harden_5226.JPG",
        original: "iphone/James Harden/james harden_5226.JPG",
        category: "James Harden"
    },
    {
        id: 1113,
        name: "James Harden Wallpaper 71",
        thumbnail: "iphone/James Harden/james harden_5232.JPG",
        original: "iphone/James Harden/james harden_5232.JPG",
        category: "James Harden"
    },
    {
        id: 1114,
        name: "James Harden Wallpaper 70",
        thumbnail: "iphone/James Harden/james harden_5178.JPG",
        original: "iphone/James Harden/james harden_5178.JPG",
        category: "James Harden"
    },
    {
        id: 1115,
        name: "James Harden Wallpaper 69",
        thumbnail: "iphone/James Harden/james harden_5193.JPG",
        original: "iphone/James Harden/james harden_5193.JPG",
        category: "James Harden"
    },
    {
        id: 1116,
        name: "James Harden Wallpaper 68",
        thumbnail: "iphone/James Harden/james harden_5187.JPG",
        original: "iphone/James Harden/james harden_5187.JPG",
        category: "James Harden"
    },
    {
        id: 1117,
        name: "James Harden Wallpaper 67",
        thumbnail: "iphone/James Harden/james harden_5191.JPG",
        original: "iphone/James Harden/james harden_5191.JPG",
        category: "James Harden"
    },
    {
        id: 1118,
        name: "James Harden Wallpaper 66",
        thumbnail: "iphone/James Harden/james harden_5185.JPG",
        original: "iphone/James Harden/james harden_5185.JPG",
        category: "James Harden"
    },
    {
        id: 1119,
        name: "James Harden Wallpaper 65",
        thumbnail: "iphone/James Harden/james harden_5224.JPG",
        original: "iphone/James Harden/james harden_5224.JPG",
        category: "James Harden"
    },
    {
        id: 1120,
        name: "James Harden Wallpaper 64",
        thumbnail: "iphone/James Harden/james harden_5230.JPG",
        original: "iphone/James Harden/james harden_5230.JPG",
        category: "James Harden"
    },
    {
        id: 1121,
        name: "James Harden Wallpaper 63",
        thumbnail: "iphone/James Harden/james harden_5218.JPG",
        original: "iphone/James Harden/james harden_5218.JPG",
        category: "James Harden"
    },
    {
        id: 1122,
        name: "James Harden Wallpaper 62",
        thumbnail: "iphone/James Harden/james harden_5219.JPG",
        original: "iphone/James Harden/james harden_5219.JPG",
        category: "James Harden"
    },
    {
        id: 1123,
        name: "James Harden Wallpaper 61",
        thumbnail: "iphone/James Harden/james harden_5231.JPG",
        original: "iphone/James Harden/james harden_5231.JPG",
        category: "James Harden"
    },
    {
        id: 1124,
        name: "James Harden Wallpaper 60",
        thumbnail: "iphone/James Harden/james harden_5225.JPG",
        original: "iphone/James Harden/james harden_5225.JPG",
        category: "James Harden"
    },
    {
        id: 1125,
        name: "James Harden Wallpaper 59",
        thumbnail: "iphone/James Harden/james harden_5184.JPG",
        original: "iphone/James Harden/james harden_5184.JPG",
        category: "James Harden"
    },
    {
        id: 1126,
        name: "James Harden Wallpaper 58",
        thumbnail: "iphone/James Harden/james harden_5190.JPG",
        original: "iphone/James Harden/james harden_5190.JPG",
        category: "James Harden"
    },
    {
        id: 1127,
        name: "James Harden Wallpaper 57",
        thumbnail: "iphone/James Harden/james harden_5242.JPG",
        original: "iphone/James Harden/james harden_5242.JPG",
        category: "James Harden"
    },
    {
        id: 1128,
        name: "James Harden Wallpaper 56",
        thumbnail: "iphone/James Harden/james harden_5243.JPG",
        original: "iphone/James Harden/james harden_5243.JPG",
        category: "James Harden"
    },
    {
        id: 1129,
        name: "James Harden Wallpaper 55",
        thumbnail: "iphone/James Harden/james harden_5241.JPG",
        original: "iphone/James Harden/james harden_5241.JPG",
        category: "James Harden"
    },
    {
        id: 1130,
        name: "James Harden Wallpaper 54",
        thumbnail: "iphone/James Harden/james harden_5240.JPG",
        original: "iphone/James Harden/james harden_5240.JPG",
        category: "James Harden"
    },
    {
        id: 1131,
        name: "James Harden Wallpaper 53",
        thumbnail: "iphone/James Harden/james harden_5250.JPG",
        original: "iphone/James Harden/james harden_5250.JPG",
        category: "James Harden"
    },
    {
        id: 1132,
        name: "James Harden Wallpaper 52",
        thumbnail: "iphone/James Harden/james harden_5244.JPG",
        original: "iphone/James Harden/james harden_5244.JPG",
        category: "James Harden"
    },
    {
        id: 1133,
        name: "James Harden Wallpaper 51",
        thumbnail: "iphone/James Harden/james harden_5245.JPG",
        original: "iphone/James Harden/james harden_5245.JPG",
        category: "James Harden"
    },
    {
        id: 1134,
        name: "James Harden Wallpaper 50",
        thumbnail: "iphone/James Harden/james harden_5247.JPG",
        original: "iphone/James Harden/james harden_5247.JPG",
        category: "James Harden"
    },
    {
        id: 1135,
        name: "James Harden Wallpaper 49",
        thumbnail: "iphone/James Harden/james harden_5246.JPG",
        original: "iphone/James Harden/james harden_5246.JPG",
        category: "James Harden"
    },
    {
        id: 1136,
        name: "James Harden Wallpaper 48",
        thumbnail: "iphone/James Harden/james harden_5248.JPG",
        original: "iphone/James Harden/james harden_5248.JPG",
        category: "James Harden"
    },
    {
        id: 1137,
        name: "James Harden Wallpaper 47",
        thumbnail: "iphone/James Harden/james harden_5249.JPG",
        original: "iphone/James Harden/james harden_5249.JPG",
        category: "James Harden"
    },
    {
        id: 1138,
        name: "James Harden Wallpaper 46",
        thumbnail: "iphone/James Harden/james harden_5189.JPG",
        original: "iphone/James Harden/james harden_5189.JPG",
        category: "James Harden"
    },
    {
        id: 1139,
        name: "James Harden Wallpaper 45",
        thumbnail: "iphone/James Harden/james harden_5176.JPG",
        original: "iphone/James Harden/james harden_5176.JPG",
        category: "James Harden"
    },
    {
        id: 1140,
        name: "James Harden Wallpaper 44",
        thumbnail: "iphone/James Harden/james harden_5162.JPG",
        original: "iphone/James Harden/james harden_5162.JPG",
        category: "James Harden"
    },
    {
        id: 1141,
        name: "James Harden Wallpaper 43",
        thumbnail: "iphone/James Harden/james harden_5228.JPG",
        original: "iphone/James Harden/james harden_5228.JPG",
        category: "James Harden"
    },
    {
        id: 1142,
        name: "James Harden Wallpaper 42",
        thumbnail: "iphone/James Harden/james harden_5200.JPG",
        original: "iphone/James Harden/james harden_5200.JPG",
        category: "James Harden"
    },
    {
        id: 1143,
        name: "James Harden Wallpaper 41",
        thumbnail: "iphone/James Harden/james harden_5214.JPG",
        original: "iphone/James Harden/james harden_5214.JPG",
        category: "James Harden"
    },
    {
        id: 1144,
        name: "James Harden Wallpaper 40",
        thumbnail: "iphone/James Harden/James Harden_5980.JPG",
        original: "iphone/James Harden/James Harden_5980.JPG",
        category: "James Harden"
    },
    {
        id: 1145,
        name: "James Harden Wallpaper 39",
        thumbnail: "iphone/James Harden/James Harden_5981.JPG",
        original: "iphone/James Harden/James Harden_5981.JPG",
        category: "James Harden"
    },
    {
        id: 1146,
        name: "James Harden Wallpaper 38",
        thumbnail: "iphone/James Harden/james harden_5215.JPG",
        original: "iphone/James Harden/james harden_5215.JPG",
        category: "James Harden"
    },
    {
        id: 1147,
        name: "James Harden Wallpaper 37",
        thumbnail: "iphone/James Harden/james harden_5201.JPG",
        original: "iphone/James Harden/james harden_5201.JPG",
        category: "James Harden"
    },
    {
        id: 1148,
        name: "James Harden Wallpaper 36",
        thumbnail: "iphone/James Harden/james harden_5229.JPG",
        original: "iphone/James Harden/james harden_5229.JPG",
        category: "James Harden"
    },
    {
        id: 1149,
        name: "James Harden Wallpaper 35",
        thumbnail: "iphone/James Harden/james harden_5163.JPG",
        original: "iphone/James Harden/james harden_5163.JPG",
        category: "James Harden"
    },
    {
        id: 1150,
        name: "James Harden Wallpaper 34",
        thumbnail: "iphone/James Harden/james harden_5177.JPG",
        original: "iphone/James Harden/james harden_5177.JPG",
        category: "James Harden"
    },
    {
        id: 1151,
        name: "James Harden Wallpaper 33",
        thumbnail: "iphone/James Harden/james harden_5188.JPG",
        original: "iphone/James Harden/james harden_5188.JPG",
        category: "James Harden"
    },
    {
        id: 1152,
        name: "James Harden Wallpaper 32",
        thumbnail: "iphone/James Harden/james harden_5161.JPG",
        original: "iphone/James Harden/james harden_5161.JPG",
        category: "James Harden"
    },
    {
        id: 1153,
        name: "James Harden Wallpaper 31",
        thumbnail: "iphone/James Harden/james harden_5175.JPG",
        original: "iphone/James Harden/james harden_5175.JPG",
        category: "James Harden"
    },
    {
        id: 1154,
        name: "James Harden Wallpaper 30",
        thumbnail: "iphone/James Harden/james harden_5217.JPG",
        original: "iphone/James Harden/james harden_5217.JPG",
        category: "James Harden"
    },
    {
        id: 1155,
        name: "James Harden Wallpaper 29",
        thumbnail: "iphone/James Harden/james harden_5203.JPG",
        original: "iphone/James Harden/james harden_5203.JPG",
        category: "James Harden"
    },
    {
        id: 1156,
        name: "James Harden Wallpaper 28",
        thumbnail: "iphone/James Harden/James Harden_5983.JPG",
        original: "iphone/James Harden/James Harden_5983.JPG",
        category: "James Harden"
    },
    {
        id: 1157,
        name: "James Harden Wallpaper 27",
        thumbnail: "iphone/James Harden/James Harden_5982.JPG",
        original: "iphone/James Harden/James Harden_5982.JPG",
        category: "James Harden"
    },
    {
        id: 1158,
        name: "James Harden Wallpaper 26",
        thumbnail: "iphone/James Harden/james harden_5202.JPG",
        original: "iphone/James Harden/james harden_5202.JPG",
        category: "James Harden"
    },
    {
        id: 1159,
        name: "James Harden Wallpaper 25",
        thumbnail: "iphone/James Harden/james harden_5216.JPG",
        original: "iphone/James Harden/james harden_5216.JPG",
        category: "James Harden"
    },
    {
        id: 1160,
        name: "James Harden Wallpaper 24",
        thumbnail: "iphone/James Harden/james harden_5174.JPG",
        original: "iphone/James Harden/james harden_5174.JPG",
        category: "James Harden"
    },
    {
        id: 1161,
        name: "James Harden Wallpaper 23",
        thumbnail: "iphone/James Harden/james harden_5160.JPG",
        original: "iphone/James Harden/james harden_5160.JPG",
        category: "James Harden"
    },
    {
        id: 1162,
        name: "James Harden Wallpaper 22",
        thumbnail: "iphone/James Harden/james harden_5164.JPG",
        original: "iphone/James Harden/james harden_5164.JPG",
        category: "James Harden"
    },
    {
        id: 1163,
        name: "James Harden Wallpaper 21",
        thumbnail: "iphone/James Harden/james harden_5170.JPG",
        original: "iphone/James Harden/james harden_5170.JPG",
        category: "James Harden"
    },
    {
        id: 1164,
        name: "James Harden Wallpaper 20",
        thumbnail: "iphone/James Harden/james harden_5158.JPG",
        original: "iphone/James Harden/james harden_5158.JPG",
        category: "James Harden"
    },
    {
        id: 1165,
        name: "James Harden Wallpaper 19",
        thumbnail: "iphone/James Harden/james harden_5212.JPG",
        original: "iphone/James Harden/james harden_5212.JPG",
        category: "James Harden"
    },
    {
        id: 1166,
        name: "James Harden Wallpaper 18",
        thumbnail: "iphone/James Harden/james harden_5206.JPG",
        original: "iphone/James Harden/james harden_5206.JPG",
        category: "James Harden"
    },
    {
        id: 1167,
        name: "James Harden Wallpaper 17",
        thumbnail: "iphone/James Harden/James Harden_5979.JPG",
        original: "iphone/James Harden/James Harden_5979.JPG",
        category: "James Harden"
    },
    {
        id: 1168,
        name: "James Harden Wallpaper 16",
        thumbnail: "iphone/James Harden/James Harden_5978.JPG",
        original: "iphone/James Harden/James Harden_5978.JPG",
        category: "James Harden"
    },
    {
        id: 1169,
        name: "James Harden Wallpaper 15",
        thumbnail: "iphone/James Harden/james harden_5207.JPG",
        original: "iphone/James Harden/james harden_5207.JPG",
        category: "James Harden"
    },
    {
        id: 1170,
        name: "James Harden Wallpaper 14",
        thumbnail: "iphone/James Harden/james harden_5213.JPG",
        original: "iphone/James Harden/james harden_5213.JPG",
        category: "James Harden"
    },
    {
        id: 1171,
        name: "James Harden Wallpaper 13",
        thumbnail: "iphone/James Harden/james harden_5159.JPG",
        original: "iphone/James Harden/james harden_5159.JPG",
        category: "James Harden"
    },
    {
        id: 1172,
        name: "James Harden Wallpaper 12",
        thumbnail: "iphone/James Harden/james harden_5171.JPG",
        original: "iphone/James Harden/james harden_5171.JPG",
        category: "James Harden"
    },
    {
        id: 1173,
        name: "James Harden Wallpaper 11",
        thumbnail: "iphone/James Harden/james harden_5165.JPG",
        original: "iphone/James Harden/james harden_5165.JPG",
        category: "James Harden"
    },
    {
        id: 1174,
        name: "James Harden Wallpaper 10",
        thumbnail: "iphone/James Harden/james harden_5173.JPG",
        original: "iphone/James Harden/james harden_5173.JPG",
        category: "James Harden"
    },
    {
        id: 1175,
        name: "James Harden Wallpaper 9",
        thumbnail: "iphone/James Harden/james harden_5167.JPG",
        original: "iphone/James Harden/james harden_5167.JPG",
        category: "James Harden"
    },
    {
        id: 1176,
        name: "James Harden Wallpaper 8",
        thumbnail: "iphone/James Harden/james harden_5211.JPG",
        original: "iphone/James Harden/james harden_5211.JPG",
        category: "James Harden"
    },
    {
        id: 1177,
        name: "James Harden Wallpaper 7",
        thumbnail: "iphone/James Harden/james harden_5239.JPG",
        original: "iphone/James Harden/james harden_5239.JPG",
        category: "James Harden"
    },
    {
        id: 1178,
        name: "James Harden Wallpaper 6",
        thumbnail: "iphone/James Harden/James Harden_5984.JPG",
        original: "iphone/James Harden/James Harden_5984.JPG",
        category: "James Harden"
    },
    {
        id: 1179,
        name: "James Harden Wallpaper 5",
        thumbnail: "iphone/James Harden/james harden_5238.JPG",
        original: "iphone/James Harden/james harden_5238.JPG",
        category: "James Harden"
    },
    {
        id: 1180,
        name: "James Harden Wallpaper 4",
        thumbnail: "iphone/James Harden/james harden_5204.JPG",
        original: "iphone/James Harden/james harden_5204.JPG",
        category: "James Harden"
    },
    {
        id: 1181,
        name: "James Harden Wallpaper 3",
        thumbnail: "iphone/James Harden/james harden_5166.JPG",
        original: "iphone/James Harden/james harden_5166.JPG",
        category: "James Harden"
    },
    {
        id: 1182,
        name: "James Harden Wallpaper 2",
        thumbnail: "iphone/James Harden/james harden_5172.JPG",
        original: "iphone/James Harden/james harden_5172.JPG",
        category: "James Harden"
    },
    {
        id: 1183,
        name: "James Harden Wallpaper 1",
        thumbnail: "iphone/James Harden/james harden_5199.JPG",
        original: "iphone/James Harden/james harden_5199.JPG",
        category: "James Harden"
    },

    // Kevin Durant wallpapers (newest first)
    {
        id: 1184,
        name: "Kevin Durant Wallpaper 37",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6002.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6002.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1185,
        name: "Kevin Durant Wallpaper 36",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6003.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6003.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1186,
        name: "Kevin Durant Wallpaper 35",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6004.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6004.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1187,
        name: "Kevin Durant Wallpaper 34",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6288.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6288.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1188,
        name: "Kevin Durant Wallpaper 33",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6289.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6289.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1189,
        name: "Kevin Durant Wallpaper 32",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5999.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5999.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1190,
        name: "Kevin Durant Wallpaper 31",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5998.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5998.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1191,
        name: "Kevin Durant Wallpaper 30",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5988.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5988.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1192,
        name: "Kevin Durant Wallpaper 29",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5989.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5989.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1193,
        name: "Kevin Durant Wallpaper 28",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6281.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6281.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1194,
        name: "Kevin Durant Wallpaper 27",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6295.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6295.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1195,
        name: "Kevin Durant Wallpaper 26",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5993.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5993.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1196,
        name: "Kevin Durant Wallpaper 25",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5987.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5987.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1197,
        name: "Kevin Durant Wallpaper 24",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5986.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5986.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1198,
        name: "Kevin Durant Wallpaper 23",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5992.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5992.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1199,
        name: "Kevin Durant Wallpaper 22",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6294.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6294.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1200,
        name: "Kevin Durant Wallpaper 21",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6280.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6280.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1201,
        name: "Kevin Durant Wallpaper 20",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6296.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6296.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1202,
        name: "Kevin Durant Wallpaper 19",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6282.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6282.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1203,
        name: "Kevin Durant Wallpaper 18",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5990.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5990.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1204,
        name: "Kevin Durant Wallpaper 17",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5991.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5991.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1205,
        name: "Kevin Durant Wallpaper 16",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5985.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5985.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1206,
        name: "Kevin Durant Wallpaper 15",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6293.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6293.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1207,
        name: "Kevin Durant Wallpaper 14",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6287.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6287.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1208,
        name: "Kevin Durant Wallpaper 13",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5995.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5995.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1209,
        name: "Kevin Durant Wallpaper 12",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6278.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6278.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1210,
        name: "Kevin Durant Wallpaper 11",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6279.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6279.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1211,
        name: "Kevin Durant Wallpaper 10",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5994.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5994.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1212,
        name: "Kevin Durant Wallpaper 9",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6286.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6286.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1213,
        name: "Kevin Durant Wallpaper 8",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6284.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6284.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1214,
        name: "Kevin Durant Wallpaper 7",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6290.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6290.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1215,
        name: "Kevin Durant Wallpaper 6",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5996.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5996.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1216,
        name: "Kevin Durant Wallpaper 5",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6291 (1).JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6291 (1).JPG",
        category: "Kevin Durant"
    },
    {
        id: 1217,
        name: "Kevin Durant Wallpaper 4",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_5997.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_5997.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1218,
        name: "Kevin Durant Wallpaper 3",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6291.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6291.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1219,
        name: "Kevin Durant Wallpaper 2",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6285.JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6285.JPG",
        category: "Kevin Durant"
    },
    {
        id: 1220,
        name: "Kevin Durant Wallpaper 1",
        thumbnail: "iphone/Kevin Durant/Kevin Durant_6282 (1).JPG",
        original: "iphone/Kevin Durant/Kevin Durant_6282 (1).JPG",
        category: "Kevin Durant"
    },

    // Kobe Bryant wallpapers (newest first)
    {
        id: 1221,
        name: "Kobe Bryant Wallpaper 58",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6049.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6049.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1222,
        name: "Kobe Bryant Wallpaper 57",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6276.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6276.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1223,
        name: "Kobe Bryant Wallpaper 56",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6048.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6048.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1224,
        name: "Kobe Bryant Wallpaper 55",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6274.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6274.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1225,
        name: "Kobe Bryant Wallpaper 54",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6275.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6275.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1226,
        name: "Kobe Bryant Wallpaper 53",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5948.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5948.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1227,
        name: "Kobe Bryant Wallpaper 52",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5949.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5949.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1228,
        name: "Kobe Bryant Wallpaper 51",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6214.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6214.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1229,
        name: "Kobe Bryant Wallpaper 50",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6228.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6228.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1230,
        name: "Kobe Bryant Wallpaper 49",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6215.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6215.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1231,
        name: "Kobe Bryant Wallpaper 48",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6201.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6201.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1232,
        name: "Kobe Bryant Wallpaper 47",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6217.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6217.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1233,
        name: "Kobe Bryant Wallpaper 46",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6203.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6203.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1234,
        name: "Kobe Bryant Wallpaper 45",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6202.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6202.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1235,
        name: "Kobe Bryant Wallpaper 44",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6216.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6216.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1236,
        name: "Kobe Bryant Wallpaper 43",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6212.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6212.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1237,
        name: "Kobe Bryant Wallpaper 42",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6206.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6206.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1238,
        name: "Kobe Bryant Wallpaper 41",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6207.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6207.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1239,
        name: "Kobe Bryant Wallpaper 40",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6213.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6213.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1240,
        name: "Kobe Bryant Wallpaper 39",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6039.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6039.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1241,
        name: "Kobe Bryant Wallpaper 38",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6205.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6205.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1242,
        name: "Kobe Bryant Wallpaper 37",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6211.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6211.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1243,
        name: "Kobe Bryant Wallpaper 36",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6210.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6210.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1244,
        name: "Kobe Bryant Wallpaper 35",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6204.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6204.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1245,
        name: "Kobe Bryant Wallpaper 34",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6221.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6221.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1246,
        name: "Kobe Bryant Wallpaper 33",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6209.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6209.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1247,
        name: "Kobe Bryant Wallpaper 32",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6208.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6208.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1248,
        name: "Kobe Bryant Wallpaper 31",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6220.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6220.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1249,
        name: "Kobe Bryant Wallpaper 30",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6222.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6222.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1250,
        name: "Kobe Bryant Wallpaper 29",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6223.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6223.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1251,
        name: "Kobe Bryant Wallpaper 28",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6227.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6227.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1252,
        name: "Kobe Bryant Wallpaper 27",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6226.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6226.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1253,
        name: "Kobe Bryant Wallpaper 26",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6218.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6218.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1254,
        name: "Kobe Bryant Wallpaper 25",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6224.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6224.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1255,
        name: "Kobe Bryant Wallpaper 24",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6225.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6225.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1256,
        name: "Kobe Bryant Wallpaper 23",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6219.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6219.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1257,
        name: "Kobe Bryant Wallpaper 22",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6040.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6040.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1258,
        name: "Kobe Bryant Wallpaper 21",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5944.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5944.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1259,
        name: "Kobe Bryant Wallpaper 20",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5945.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5945.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1260,
        name: "Kobe Bryant Wallpaper 19",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5951.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5951.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1261,
        name: "Kobe Bryant Wallpaper 18",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6041.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6041.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1262,
        name: "Kobe Bryant Wallpaper 17",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6684.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6684.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1263,
        name: "Kobe Bryant Wallpaper 16",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6043.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6043.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1264,
        name: "Kobe Bryant Wallpaper 15",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5947.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5947.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1265,
        name: "Kobe Bryant Wallpaper 14",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5952.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5952.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1266,
        name: "Kobe Bryant Wallpaper 13",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5946.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5946.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1267,
        name: "Kobe Bryant Wallpaper 12",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6042.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6042.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1268,
        name: "Kobe Bryant Wallpaper 11",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6683.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6683.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1269,
        name: "Kobe Bryant Wallpaper 10",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6046.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6046.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1270,
        name: "Kobe Bryant Wallpaper 9",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5942.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5942.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1271,
        name: "Kobe Bryant Wallpaper 8",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5943.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5943.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1272,
        name: "Kobe Bryant Wallpaper 7",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6047.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6047.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1273,
        name: "Kobe Bryant Wallpaper 6",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6682.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6682.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1274,
        name: "Kobe Bryant Wallpaper 5",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6680.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6680.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1275,
        name: "Kobe Bryant Wallpaper 4",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6045.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6045.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1276,
        name: "Kobe Bryant Wallpaper 3",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_5954.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_5954.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1277,
        name: "Kobe Bryant Wallpaper 2",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6044.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6044.JPG",
        category: "Kobe Bryant"
    },
    {
        id: 1278,
        name: "Kobe Bryant Wallpaper 1",
        thumbnail: "iphone/Kobe Bryant/Kobe Bryant_6681.JPG",
        original: "iphone/Kobe Bryant/Kobe Bryant_6681.JPG",
        category: "Kobe Bryant"
    },

    // Kyrie Irving wallpapers (newest first)
    {
        id: 1279,
        name: "Kyrie Irving Wallpaper 109",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5143.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5143.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1280,
        name: "Kyrie Irving Wallpaper 108",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6066.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6066.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1281,
        name: "Kyrie Irving Wallpaper 107",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6072.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6072.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1282,
        name: "Kyrie Irving Wallpaper 106",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6073.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6073.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1283,
        name: "Kyrie Irving Wallpaper 105",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6067.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6067.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1284,
        name: "Kyrie Irving Wallpaper 104",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5142.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5142.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1285,
        name: "Kyrie Irving Wallpaper 103",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5154.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5154.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1286,
        name: "Kyrie Irving Wallpaper 102",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5140.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5140.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1287,
        name: "Kyrie Irving Wallpaper 101",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6059.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6059.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1288,
        name: "Kyrie Irving Wallpaper 100",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6071.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6071.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1289,
        name: "Kyrie Irving Wallpaper 99",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6065.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6065.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1290,
        name: "Kyrie Irving Wallpaper 98",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6064.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6064.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1291,
        name: "Kyrie Irving Wallpaper 97",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6070.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6070.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1292,
        name: "Kyrie Irving Wallpaper 96",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6058.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6058.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1293,
        name: "Kyrie Irving Wallpaper 95",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5141.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5141.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1294,
        name: "Kyrie Irving Wallpaper 94",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5155.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5155.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1295,
        name: "Kyrie Irving Wallpaper 93",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5151.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5151.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1296,
        name: "Kyrie Irving Wallpaper 92",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5145.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5145.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1297,
        name: "Kyrie Irving Wallpaper 91",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5970.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5970.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1298,
        name: "Kyrie Irving Wallpaper 90",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6074.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6074.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1299,
        name: "Kyrie Irving Wallpaper 89",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6060.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6060.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1300,
        name: "Kyrie Irving Wallpaper 88",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6061.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6061.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1301,
        name: "Kyrie Irving Wallpaper 87",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6075.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6075.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1302,
        name: "Kyrie Irving Wallpaper 86",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5971.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5971.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1303,
        name: "Kyrie Irving Wallpaper 85",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5144.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5144.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1304,
        name: "Kyrie Irving Wallpaper 84",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5150.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5150.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1305,
        name: "Kyrie Irving Wallpaper 83",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5146.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5146.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1306,
        name: "Kyrie Irving Wallpaper 82",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5152.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5152.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1307,
        name: "Kyrie Irving Wallpaper 81",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6063.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6063.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1308,
        name: "Kyrie Irving Wallpaper 80",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5108 2.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5108 2.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1309,
        name: "Kyrie Irving Wallpaper 79",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6062.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6062.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1310,
        name: "Kyrie Irving Wallpaper 78",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5153.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5153.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1311,
        name: "Kyrie Irving Wallpaper 77",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5147.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5147.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1312,
        name: "Kyrie Irving Wallpaper 76",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5120.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5120.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1313,
        name: "Kyrie Irving Wallpaper 75",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5134.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5134.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1314,
        name: "Kyrie Irving Wallpaper 74",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5097.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5097.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1315,
        name: "Kyrie Irving Wallpaper 73",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5083.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5083.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1316,
        name: "Kyrie Irving Wallpaper 72",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5082.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5082.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1317,
        name: "Kyrie Irving Wallpaper 71",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5096.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5096.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1318,
        name: "Kyrie Irving Wallpaper 70",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5135.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5135.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1319,
        name: "Kyrie Irving Wallpaper 69",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5121.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5121.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1320,
        name: "Kyrie Irving Wallpaper 68",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5137.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5137.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1321,
        name: "Kyrie Irving Wallpaper 67",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5123.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5123.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1322,
        name: "Kyrie Irving Wallpaper 66",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5080.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5080.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1323,
        name: "Kyrie Irving Wallpaper 65",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5094.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5094.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1324,
        name: "Kyrie Irving Wallpaper 64",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5095.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5095.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1325,
        name: "Kyrie Irving Wallpaper 63",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5081.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5081.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1326,
        name: "Kyrie Irving Wallpaper 62",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5122.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5122.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1327,
        name: "Kyrie Irving Wallpaper 61",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5136.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5136.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1328,
        name: "Kyrie Irving Wallpaper 60",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5132.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5132.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1329,
        name: "Kyrie Irving Wallpaper 59",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5126.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5126.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1330,
        name: "Kyrie Irving Wallpaper 58",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5085.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5085.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1331,
        name: "Kyrie Irving Wallpaper 57",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5091.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5091.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1332,
        name: "Kyrie Irving Wallpaper 56",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5090.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5090.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1333,
        name: "Kyrie Irving Wallpaper 55",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5084.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5084.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1334,
        name: "Kyrie Irving Wallpaper 54",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5127.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5127.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1335,
        name: "Kyrie Irving Wallpaper 53",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5133.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5133.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1336,
        name: "Kyrie Irving Wallpaper 52",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5119.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5119.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1337,
        name: "Kyrie Irving Wallpaper 51",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5125.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5125.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1338,
        name: "Kyrie Irving Wallpaper 50",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5131.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5131.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1339,
        name: "Kyrie Irving Wallpaper 49",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5092.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5092.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1340,
        name: "Kyrie Irving Wallpaper 48",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5086.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5086.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1341,
        name: "Kyrie Irving Wallpaper 47",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5079.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5079.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1342,
        name: "Kyrie Irving Wallpaper 46",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5078.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5078.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1343,
        name: "Kyrie Irving Wallpaper 45",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5087.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5087.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1344,
        name: "Kyrie Irving Wallpaper 44",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5093.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5093.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1345,
        name: "Kyrie Irving Wallpaper 43",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5130.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5130.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1346,
        name: "Kyrie Irving Wallpaper 42",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5124.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5124.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1347,
        name: "Kyrie Irving Wallpaper 41",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5118.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5118.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1348,
        name: "Kyrie Irving Wallpaper 40",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5101.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5101.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1349,
        name: "Kyrie Irving Wallpaper 39",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5115.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5115.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1350,
        name: "Kyrie Irving Wallpaper 38",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5129.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5129.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1351,
        name: "Kyrie Irving Wallpaper 37",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5075.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5075.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1352,
        name: "Kyrie Irving Wallpaper 36",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5074.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5074.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1353,
        name: "Kyrie Irving Wallpaper 35",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5128.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5128.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1354,
        name: "Kyrie Irving Wallpaper 34",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5114.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5114.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1355,
        name: "Kyrie Irving Wallpaper 33",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5100.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5100.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1356,
        name: "Kyrie Irving Wallpaper 32",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5116.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5116.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1357,
        name: "Kyrie Irving Wallpaper 31",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5102.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5102.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1358,
        name: "Kyrie Irving Wallpaper 30",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5089.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5089.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1359,
        name: "Kyrie Irving Wallpaper 29",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5076.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5076.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1360,
        name: "Kyrie Irving Wallpaper 28",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5077.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5077.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1361,
        name: "Kyrie Irving Wallpaper 27",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5088.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5088.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1362,
        name: "Kyrie Irving Wallpaper 26",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5103.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5103.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1363,
        name: "Kyrie Irving Wallpaper 25",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5117.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5117.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1364,
        name: "Kyrie Irving Wallpaper 24",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5113.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5113.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1365,
        name: "Kyrie Irving Wallpaper 23",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5107.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5107.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1366,
        name: "Kyrie Irving Wallpaper 22",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5098.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5098.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1367,
        name: "Kyrie Irving Wallpaper 21",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5099.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5099.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1368,
        name: "Kyrie Irving Wallpaper 20",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5112.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5112.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1369,
        name: "Kyrie Irving Wallpaper 19",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5138.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5138.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1370,
        name: "Kyrie Irving Wallpaper 18",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5104.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5104.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1371,
        name: "Kyrie Irving Wallpaper 17",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5110.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5110.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1372,
        name: "Kyrie Irving Wallpaper 16",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5111.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5111.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1373,
        name: "Kyrie Irving Wallpaper 15",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5105.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5105.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1374,
        name: "Kyrie Irving Wallpaper 14",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5139.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5139.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1375,
        name: "Kyrie Irving Wallpaper 13",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6053.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6053.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1376,
        name: "Kyrie Irving Wallpaper 12",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6052.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6052.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1377,
        name: "Kyrie Irving Wallpaper 11",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5149.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5149.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1378,
        name: "Kyrie Irving Wallpaper 10",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5968.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5968.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1379,
        name: "Kyrie Irving Wallpaper 9",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5969.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5969.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1380,
        name: "Kyrie Irving Wallpaper 8",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5148.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5148.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1381,
        name: "Kyrie Irving Wallpaper 7",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5105 (1).JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5105 (1).JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1382,
        name: "Kyrie Irving Wallpaper 6",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6055.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6055.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1383,
        name: "Kyrie Irving Wallpaper 5",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6069.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6069.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1384,
        name: "Kyrie Irving Wallpaper 4",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6068.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6068.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1385,
        name: "Kyrie Irving Wallpaper 3",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_5108 2 (1).JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_5108 2 (1).JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1386,
        name: "Kyrie Irving Wallpaper 2",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6056.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6056.JPG",
        category: "Kyrie Irving"
    },
    {
        id: 1387,
        name: "Kyrie Irving Wallpaper 1",
        thumbnail: "iphone/Kyrie Irving/Kyrie Irving_6057.JPG",
        original: "iphone/Kyrie Irving/Kyrie Irving_6057.JPG",
        category: "Kyrie Irving"
    },

    // LeBron James wallpapers (newest first)
    {
        id: 1388,
        name: "LeBron James Wallpaper 73",
        thumbnail: "iphone/LeBron James/LeBron James_5972.JPG",
        original: "iphone/LeBron James/LeBron James_5972.JPG",
        category: "LeBron James"
    },
    {
        id: 1389,
        name: "LeBron James Wallpaper 72",
        thumbnail: "iphone/LeBron James/LeBron James_5973.JPG",
        original: "iphone/LeBron James/LeBron James_5973.JPG",
        category: "LeBron James"
    },
    {
        id: 1390,
        name: "LeBron James Wallpaper 71",
        thumbnail: "iphone/LeBron James/LeBron James_5974.JPG",
        original: "iphone/LeBron James/LeBron James_5974.JPG",
        category: "LeBron James"
    },
    {
        id: 1391,
        name: "LeBron James Wallpaper 70",
        thumbnail: "iphone/LeBron James/LeBron James_5975.JPG",
        original: "iphone/LeBron James/LeBron James_5975.JPG",
        category: "LeBron James"
    },
    {
        id: 1392,
        name: "LeBron James Wallpaper 69",
        thumbnail: "iphone/LeBron James/LeBron James_6098.JPG",
        original: "iphone/LeBron James/LeBron James_6098.JPG",
        category: "LeBron James"
    },
    {
        id: 1393,
        name: "LeBron James Wallpaper 68",
        thumbnail: "iphone/LeBron James/LeBron James_6388.JPG",
        original: "iphone/LeBron James/LeBron James_6388.JPG",
        category: "LeBron James"
    },
    {
        id: 1394,
        name: "LeBron James Wallpaper 67",
        thumbnail: "iphone/LeBron James/LeBron James_6405.JPG",
        original: "iphone/LeBron James/LeBron James_6405.JPG",
        category: "LeBron James"
    },
    {
        id: 1395,
        name: "LeBron James Wallpaper 66",
        thumbnail: "iphone/LeBron James/LeBron James_6411.JPG",
        original: "iphone/LeBron James/LeBron James_6411.JPG",
        category: "LeBron James"
    },
    {
        id: 1396,
        name: "LeBron James Wallpaper 65",
        thumbnail: "iphone/LeBron James/LeBron James_6377.JPG",
        original: "iphone/LeBron James/LeBron James_6377.JPG",
        category: "LeBron James"
    },
    {
        id: 1397,
        name: "LeBron James Wallpaper 64",
        thumbnail: "iphone/LeBron James/LeBron James_6410.JPG",
        original: "iphone/LeBron James/LeBron James_6410.JPG",
        category: "LeBron James"
    },
    {
        id: 1398,
        name: "LeBron James Wallpaper 63",
        thumbnail: "iphone/LeBron James/LeBron James_6376.JPG",
        original: "iphone/LeBron James/LeBron James_6376.JPG",
        category: "LeBron James"
    },
    {
        id: 1399,
        name: "LeBron James Wallpaper 62",
        thumbnail: "iphone/LeBron James/LeBron James_6404.JPG",
        original: "iphone/LeBron James/LeBron James_6404.JPG",
        category: "LeBron James"
    },
    {
        id: 1400,
        name: "LeBron James Wallpaper 61",
        thumbnail: "iphone/LeBron James/LeBron James_6389.JPG",
        original: "iphone/LeBron James/LeBron James_6389.JPG",
        category: "LeBron James"
    },
    {
        id: 1401,
        name: "LeBron James Wallpaper 60",
        thumbnail: "iphone/LeBron James/LeBron James_6374.JPG",
        original: "iphone/LeBron James/LeBron James_6374.JPG",
        category: "LeBron James"
    },
    {
        id: 1402,
        name: "LeBron James Wallpaper 59",
        thumbnail: "iphone/LeBron James/LeBron James_6412.JPG",
        original: "iphone/LeBron James/LeBron James_6412.JPG",
        category: "LeBron James"
    },
    {
        id: 1403,
        name: "LeBron James Wallpaper 58",
        thumbnail: "iphone/LeBron James/LeBron James_6407.JPG",
        original: "iphone/LeBron James/LeBron James_6407.JPG",
        category: "LeBron James"
    },
    {
        id: 1404,
        name: "LeBron James Wallpaper 57",
        thumbnail: "iphone/LeBron James/LeBron James_6375.JPG",
        original: "iphone/LeBron James/LeBron James_6375.JPG",
        category: "LeBron James"
    },
    {
        id: 1405,
        name: "LeBron James Wallpaper 56",
        thumbnail: "iphone/LeBron James/LeBron James_6413.JPG",
        original: "iphone/LeBron James/LeBron James_6413.JPG",
        category: "LeBron James"
    },
    {
        id: 1406,
        name: "LeBron James Wallpaper 55",
        thumbnail: "iphone/LeBron James/LeBron James_6417.JPG",
        original: "iphone/LeBron James/LeBron James_6417.JPG",
        category: "LeBron James"
    },
    {
        id: 1407,
        name: "LeBron James Wallpaper 54",
        thumbnail: "iphone/LeBron James/LeBron James_6371.JPG",
        original: "iphone/LeBron James/LeBron James_6371.JPG",
        category: "LeBron James"
    },
    {
        id: 1408,
        name: "LeBron James Wallpaper 53",
        thumbnail: "iphone/LeBron James/LeBron James_6365.JPG",
        original: "iphone/LeBron James/LeBron James_6365.JPG",
        category: "LeBron James"
    },
    {
        id: 1409,
        name: "LeBron James Wallpaper 52",
        thumbnail: "iphone/LeBron James/LeBron James_6403.JPG",
        original: "iphone/LeBron James/LeBron James_6403.JPG",
        category: "LeBron James"
    },
    {
        id: 1410,
        name: "LeBron James Wallpaper 51",
        thumbnail: "iphone/LeBron James/LeBron James_6402.JPG",
        original: "iphone/LeBron James/LeBron James_6402.JPG",
        category: "LeBron James"
    },
    {
        id: 1411,
        name: "LeBron James Wallpaper 50",
        thumbnail: "iphone/LeBron James/LeBron James_6416.JPG",
        original: "iphone/LeBron James/LeBron James_6416.JPG",
        category: "LeBron James"
    },
    {
        id: 1412,
        name: "LeBron James Wallpaper 49",
        thumbnail: "iphone/LeBron James/LeBron James_6370.JPG",
        original: "iphone/LeBron James/LeBron James_6370.JPG",
        category: "LeBron James"
    },
    {
        id: 1413,
        name: "LeBron James Wallpaper 48",
        thumbnail: "iphone/LeBron James/LeBron James_6399.JPG",
        original: "iphone/LeBron James/LeBron James_6399.JPG",
        category: "LeBron James"
    },
    {
        id: 1414,
        name: "LeBron James Wallpaper 47",
        thumbnail: "iphone/LeBron James/LeBron James_6400.JPG",
        original: "iphone/LeBron James/LeBron James_6400.JPG",
        category: "LeBron James"
    },
    {
        id: 1415,
        name: "LeBron James Wallpaper 46",
        thumbnail: "iphone/LeBron James/LeBron James_6366.JPG",
        original: "iphone/LeBron James/LeBron James_6366.JPG",
        category: "LeBron James"
    },
    {
        id: 1416,
        name: "LeBron James Wallpaper 45",
        thumbnail: "iphone/LeBron James/LeBron James_6372.JPG",
        original: "iphone/LeBron James/LeBron James_6372.JPG",
        category: "LeBron James"
    },
    {
        id: 1417,
        name: "LeBron James Wallpaper 44",
        thumbnail: "iphone/LeBron James/LeBron James_6414.JPG",
        original: "iphone/LeBron James/LeBron James_6414.JPG",
        category: "LeBron James"
    },
    {
        id: 1418,
        name: "LeBron James Wallpaper 43",
        thumbnail: "iphone/LeBron James/LeBron James_6373.JPG",
        original: "iphone/LeBron James/LeBron James_6373.JPG",
        category: "LeBron James"
    },
    {
        id: 1419,
        name: "LeBron James Wallpaper 42",
        thumbnail: "iphone/LeBron James/LeBron James_6415.JPG",
        original: "iphone/LeBron James/LeBron James_6415.JPG",
        category: "LeBron James"
    },
    {
        id: 1420,
        name: "LeBron James Wallpaper 41",
        thumbnail: "iphone/LeBron James/LeBron James_6401.JPG",
        original: "iphone/LeBron James/LeBron James_6401.JPG",
        category: "LeBron James"
    },
    {
        id: 1421,
        name: "LeBron James Wallpaper 40",
        thumbnail: "iphone/LeBron James/LeBron James_6367.JPG",
        original: "iphone/LeBron James/LeBron James_6367.JPG",
        category: "LeBron James"
    },
    {
        id: 1422,
        name: "LeBron James Wallpaper 39",
        thumbnail: "iphone/LeBron James/LeBron James_6398.JPG",
        original: "iphone/LeBron James/LeBron James_6398.JPG",
        category: "LeBron James"
    },
    {
        id: 1423,
        name: "LeBron James Wallpaper 38",
        thumbnail: "iphone/LeBron James/LeBron James_6381.JPG",
        original: "iphone/LeBron James/LeBron James_6381.JPG",
        category: "LeBron James"
    },
    {
        id: 1424,
        name: "LeBron James Wallpaper 37",
        thumbnail: "iphone/LeBron James/LeBron James_6395.JPG",
        original: "iphone/LeBron James/LeBron James_6395.JPG",
        category: "LeBron James"
    },
    {
        id: 1425,
        name: "LeBron James Wallpaper 36",
        thumbnail: "iphone/LeBron James/LeBron James_6424.JPG",
        original: "iphone/LeBron James/LeBron James_6424.JPG",
        category: "LeBron James"
    },
    {
        id: 1426,
        name: "LeBron James Wallpaper 35",
        thumbnail: "iphone/LeBron James/LeBron James_6418.JPG",
        original: "iphone/LeBron James/LeBron James_6418.JPG",
        category: "LeBron James"
    },
    {
        id: 1427,
        name: "LeBron James Wallpaper 34",
        thumbnail: "iphone/LeBron James/LeBron James_6419.JPG",
        original: "iphone/LeBron James/LeBron James_6419.JPG",
        category: "LeBron James"
    },
    {
        id: 1428,
        name: "LeBron James Wallpaper 33",
        thumbnail: "iphone/LeBron James/LeBron James_6425.JPG",
        original: "iphone/LeBron James/LeBron James_6425.JPG",
        category: "LeBron James"
    },
    {
        id: 1429,
        name: "LeBron James Wallpaper 32",
        thumbnail: "iphone/LeBron James/LeBron James_6394.JPG",
        original: "iphone/LeBron James/LeBron James_6394.JPG",
        category: "LeBron James"
    },
    {
        id: 1430,
        name: "LeBron James Wallpaper 31",
        thumbnail: "iphone/LeBron James/LeBron James_6380.JPG",
        original: "iphone/LeBron James/LeBron James_6380.JPG",
        category: "LeBron James"
    },
    {
        id: 1431,
        name: "LeBron James Wallpaper 30",
        thumbnail: "iphone/LeBron James/LeBron James_6396.JPG",
        original: "iphone/LeBron James/LeBron James_6396.JPG",
        category: "LeBron James"
    },
    {
        id: 1432,
        name: "LeBron James Wallpaper 29",
        thumbnail: "iphone/LeBron James/LeBron James_6382.JPG",
        original: "iphone/LeBron James/LeBron James_6382.JPG",
        category: "LeBron James"
    },
    {
        id: 1433,
        name: "LeBron James Wallpaper 28",
        thumbnail: "iphone/LeBron James/LeBron James_6369.JPG",
        original: "iphone/LeBron James/LeBron James_6369.JPG",
        category: "LeBron James"
    },
    {
        id: 1434,
        name: "LeBron James Wallpaper 27",
        thumbnail: "iphone/LeBron James/LeBron James_6368.JPG",
        original: "iphone/LeBron James/LeBron James_6368.JPG",
        category: "LeBron James"
    },
    {
        id: 1435,
        name: "LeBron James Wallpaper 26",
        thumbnail: "iphone/LeBron James/LeBron James_6426.JPG",
        original: "iphone/LeBron James/LeBron James_6426.JPG",
        category: "LeBron James"
    },
    {
        id: 1436,
        name: "LeBron James Wallpaper 25",
        thumbnail: "iphone/LeBron James/LeBron James_6383.JPG",
        original: "iphone/LeBron James/LeBron James_6383.JPG",
        category: "LeBron James"
    },
    {
        id: 1437,
        name: "LeBron James Wallpaper 24",
        thumbnail: "iphone/LeBron James/LeBron James_6397.JPG",
        original: "iphone/LeBron James/LeBron James_6397.JPG",
        category: "LeBron James"
    },
    {
        id: 1438,
        name: "LeBron James Wallpaper 23",
        thumbnail: "iphone/LeBron James/LeBron James_6393.JPG",
        original: "iphone/LeBron James/LeBron James_6393.JPG",
        category: "LeBron James"
    },
    {
        id: 1439,
        name: "LeBron James Wallpaper 22",
        thumbnail: "iphone/LeBron James/LeBron James_6387.JPG",
        original: "iphone/LeBron James/LeBron James_6387.JPG",
        category: "LeBron James"
    },
    {
        id: 1440,
        name: "LeBron James Wallpaper 21",
        thumbnail: "iphone/LeBron James/LeBron James_6378.JPG",
        original: "iphone/LeBron James/LeBron James_6378.JPG",
        category: "LeBron James"
    },
    {
        id: 1441,
        name: "LeBron James Wallpaper 20",
        thumbnail: "iphone/LeBron James/LeBron James_6422.JPG",
        original: "iphone/LeBron James/LeBron James_6422.JPG",
        category: "LeBron James"
    },
    {
        id: 1442,
        name: "LeBron James Wallpaper 19",
        thumbnail: "iphone/LeBron James/LeBron James_6405 (1).JPG",
        original: "iphone/LeBron James/LeBron James_6405 (1).JPG",
        category: "LeBron James"
    },
    {
        id: 1443,
        name: "LeBron James Wallpaper 18",
        thumbnail: "iphone/LeBron James/LeBron James_6423.JPG",
        original: "iphone/LeBron James/LeBron James_6423.JPG",
        category: "LeBron James"
    },
    {
        id: 1444,
        name: "LeBron James Wallpaper 17",
        thumbnail: "iphone/LeBron James/LeBron James_6379.JPG",
        original: "iphone/LeBron James/LeBron James_6379.JPG",
        category: "LeBron James"
    },
    {
        id: 1445,
        name: "LeBron James Wallpaper 16",
        thumbnail: "iphone/LeBron James/LeBron James_6386.JPG",
        original: "iphone/LeBron James/LeBron James_6386.JPG",
        category: "LeBron James"
    },
    {
        id: 1446,
        name: "LeBron James Wallpaper 15",
        thumbnail: "iphone/LeBron James/LeBron James_6392.JPG",
        original: "iphone/LeBron James/LeBron James_6392.JPG",
        category: "LeBron James"
    },
    {
        id: 1447,
        name: "LeBron James Wallpaper 14",
        thumbnail: "iphone/LeBron James/LeBron James_6384.JPG",
        original: "iphone/LeBron James/LeBron James_6384.JPG",
        category: "LeBron James"
    },
    {
        id: 1448,
        name: "LeBron James Wallpaper 13",
        thumbnail: "iphone/LeBron James/LeBron James_6390.JPG",
        original: "iphone/LeBron James/LeBron James_6390.JPG",
        category: "LeBron James"
    },
    {
        id: 1449,
        name: "LeBron James Wallpaper 12",
        thumbnail: "iphone/LeBron James/LeBron James_6409.JPG",
        original: "iphone/LeBron James/LeBron James_6409.JPG",
        category: "LeBron James"
    },
    {
        id: 1450,
        name: "LeBron James Wallpaper 11",
        thumbnail: "iphone/LeBron James/LeBron James_6421.JPG",
        original: "iphone/LeBron James/LeBron James_6421.JPG",
        category: "LeBron James"
    },
    {
        id: 1451,
        name: "LeBron James Wallpaper 10",
        thumbnail: "iphone/LeBron James/LeBron James_6420.JPG",
        original: "iphone/LeBron James/LeBron James_6420.JPG",
        category: "LeBron James"
    },
    {
        id: 1452,
        name: "LeBron James Wallpaper 9",
        thumbnail: "iphone/LeBron James/LeBron James_6408.JPG",
        original: "iphone/LeBron James/LeBron James_6408.JPG",
        category: "LeBron James"
    },
    {
        id: 1453,
        name: "LeBron James Wallpaper 8",
        thumbnail: "iphone/LeBron James/LeBron James_6391.JPG",
        original: "iphone/LeBron James/LeBron James_6391.JPG",
        category: "LeBron James"
    },
    {
        id: 1454,
        name: "LeBron James Wallpaper 7",
        thumbnail: "iphone/LeBron James/LeBron James_6385.JPG",
        original: "iphone/LeBron James/LeBron James_6385.JPG",
        category: "LeBron James"
    },
    {
        id: 1455,
        name: "LeBron James Wallpaper 6",
        thumbnail: "iphone/LeBron James/LeBron James_6094.JPG",
        original: "iphone/LeBron James/LeBron James_6094.JPG",
        category: "LeBron James"
    },
    {
        id: 1456,
        name: "LeBron James Wallpaper 5",
        thumbnail: "iphone/LeBron James/LeBron James_6095.JPG",
        original: "iphone/LeBron James/LeBron James_6095.JPG",
        category: "LeBron James"
    },
    {
        id: 1457,
        name: "LeBron James Wallpaper 4",
        thumbnail: "iphone/LeBron James/LeBron James_6097.JPG",
        original: "iphone/LeBron James/LeBron James_6097.JPG",
        category: "LeBron James"
    },
    {
        id: 1458,
        name: "LeBron James Wallpaper 3",
        thumbnail: "iphone/LeBron James/LeBron James_6096.JPG",
        original: "iphone/LeBron James/LeBron James_6096.JPG",
        category: "LeBron James"
    },
    {
        id: 1459,
        name: "LeBron James Wallpaper 2",
        thumbnail: "iphone/LeBron James/LeBron James_6092.JPG",
        original: "iphone/LeBron James/LeBron James_6092.JPG",
        category: "LeBron James"
    },
    {
        id: 1460,
        name: "LeBron James Wallpaper 1",
        thumbnail: "iphone/LeBron James/LeBron James_6093.JPG",
        original: "iphone/LeBron James/LeBron James_6093.JPG",
        category: "LeBron James"
    },

    // Michael Jordan wallpapers (newest first)
    {
        id: 1461,
        name: "Michael Jordan Wallpaper 131",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6472.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6472.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1462,
        name: "Michael Jordan Wallpaper 130",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6466.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6466.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1463,
        name: "Michael Jordan Wallpaper 129",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6499.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6499.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1464,
        name: "Michael Jordan Wallpaper 128",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6506.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6506.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1465,
        name: "Michael Jordan Wallpaper 127",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6512.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6512.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1466,
        name: "Michael Jordan Wallpaper 126",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6513.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6513.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1467,
        name: "Michael Jordan Wallpaper 125",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6507.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6507.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1468,
        name: "Michael Jordan Wallpaper 124",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6498.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6498.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1469,
        name: "Michael Jordan Wallpaper 123",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6467.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6467.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1470,
        name: "Michael Jordan Wallpaper 122",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6473.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6473.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1471,
        name: "Michael Jordan Wallpaper 121",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6465.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6465.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1472,
        name: "Michael Jordan Wallpaper 120",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6471.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6471.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1473,
        name: "Michael Jordan Wallpaper 119",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6459.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6459.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1474,
        name: "Michael Jordan Wallpaper 118",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6511.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6511.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1475,
        name: "Michael Jordan Wallpaper 117",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6505.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6505.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1476,
        name: "Michael Jordan Wallpaper 116",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6539.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6539.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1477,
        name: "Michael Jordan Wallpaper 115",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6538.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6538.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1478,
        name: "Michael Jordan Wallpaper 114",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6504.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6504.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1479,
        name: "Michael Jordan Wallpaper 113",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6510.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6510.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1480,
        name: "Michael Jordan Wallpaper 112",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6458.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6458.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1481,
        name: "Michael Jordan Wallpaper 111",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6470.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6470.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1482,
        name: "Michael Jordan Wallpaper 110",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6464.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6464.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1483,
        name: "Michael Jordan Wallpaper 109",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6460.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6460.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1484,
        name: "Michael Jordan Wallpaper 108",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6474.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6474.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1485,
        name: "Michael Jordan Wallpaper 107",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6528.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6528.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1486,
        name: "Michael Jordan Wallpaper 106",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6514.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6514.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1487,
        name: "Michael Jordan Wallpaper 105",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6500.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6500.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1488,
        name: "Michael Jordan Wallpaper 104",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6501.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6501.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1489,
        name: "Michael Jordan Wallpaper 103",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6515.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6515.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1490,
        name: "Michael Jordan Wallpaper 102",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6529.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6529.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1491,
        name: "Michael Jordan Wallpaper 101",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6475.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6475.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1492,
        name: "Michael Jordan Wallpaper 100",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6461.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6461.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1493,
        name: "Michael Jordan Wallpaper 99",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6477.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6477.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1494,
        name: "Michael Jordan Wallpaper 98",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6463.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6463.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1495,
        name: "Michael Jordan Wallpaper 97",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6488.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6488.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1496,
        name: "Michael Jordan Wallpaper 96",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6503.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6503.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1497,
        name: "Michael Jordan Wallpaper 95",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6517.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6517.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1498,
        name: "Michael Jordan Wallpaper 94",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6516.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6516.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1499,
        name: "Michael Jordan Wallpaper 93",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6502.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6502.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1500,
        name: "Michael Jordan Wallpaper 92",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6489.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6489.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1501,
        name: "Michael Jordan Wallpaper 91",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6462.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6462.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1502,
        name: "Michael Jordan Wallpaper 90",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6476.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6476.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1503,
        name: "Michael Jordan Wallpaper 89",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6565.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6565.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1504,
        name: "Michael Jordan Wallpaper 88",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6571.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6571.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1505,
        name: "Michael Jordan Wallpaper 87",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6559.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6559.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1506,
        name: "Michael Jordan Wallpaper 86",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6558.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6558.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1507,
        name: "Michael Jordan Wallpaper 85",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6570.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6570.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1508,
        name: "Michael Jordan Wallpaper 84",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6564.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6564.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1509,
        name: "Michael Jordan Wallpaper 83",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6572.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6572.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1510,
        name: "Michael Jordan Wallpaper 82",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6566.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6566.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1511,
        name: "Michael Jordan Wallpaper 81",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6567.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6567.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1512,
        name: "Michael Jordan Wallpaper 80",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6573.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6573.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1513,
        name: "Michael Jordan Wallpaper 79",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6555 (1).JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6555 (1).JPG",
        category: "Michael Jordan"
    },
    {
        id: 1514,
        name: "Michael Jordan Wallpaper 78",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6577.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6577.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1515,
        name: "Michael Jordan Wallpaper 77",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6563.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6563.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1516,
        name: "Michael Jordan Wallpaper 76",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6562.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6562.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1517,
        name: "Michael Jordan Wallpaper 75",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6576.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6576.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1518,
        name: "Michael Jordan Wallpaper 74",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6548.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6548.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1519,
        name: "Michael Jordan Wallpaper 73",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6560.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6560.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1520,
        name: "Michael Jordan Wallpaper 72",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6574.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6574.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1521,
        name: "Michael Jordan Wallpaper 71",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6575.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6575.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1522,
        name: "Michael Jordan Wallpaper 70",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6561.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6561.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1523,
        name: "Michael Jordan Wallpaper 69",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6549.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6549.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1524,
        name: "Michael Jordan Wallpaper 68",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6544.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6544.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1525,
        name: "Michael Jordan Wallpaper 67",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6550.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6550.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1526,
        name: "Michael Jordan Wallpaper 66",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6578.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6578.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1527,
        name: "Michael Jordan Wallpaper 65",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6579.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6579.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1528,
        name: "Michael Jordan Wallpaper 64",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6551.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6551.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1529,
        name: "Michael Jordan Wallpaper 63",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6545.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6545.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1530,
        name: "Michael Jordan Wallpaper 62",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6553.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6553.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1531,
        name: "Michael Jordan Wallpaper 61",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6547.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6547.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1532,
        name: "Michael Jordan Wallpaper 60",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6546.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6546.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1533,
        name: "Michael Jordan Wallpaper 59",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6552.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6552.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1534,
        name: "Michael Jordan Wallpaper 58",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6542.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6542.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1535,
        name: "Michael Jordan Wallpaper 57",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6581.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6581.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1536,
        name: "Michael Jordan Wallpaper 56",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6580.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6580.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1537,
        name: "Michael Jordan Wallpaper 55",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6543.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6543.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1538,
        name: "Michael Jordan Wallpaper 54",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6557.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6557.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1539,
        name: "Michael Jordan Wallpaper 53",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6569.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6569.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1540,
        name: "Michael Jordan Wallpaper 52",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6541.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6541.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1541,
        name: "Michael Jordan Wallpaper 51",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6555.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6555.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1542,
        name: "Michael Jordan Wallpaper 50",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6554.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6554.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1543,
        name: "Michael Jordan Wallpaper 49",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6540.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6540.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1544,
        name: "Michael Jordan Wallpaper 48",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6568.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6568.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1545,
        name: "Michael Jordan Wallpaper 47",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6453.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6453.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1546,
        name: "Michael Jordan Wallpaper 46",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6490.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6490.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1547,
        name: "Michael Jordan Wallpaper 45",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6484.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6484.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1548,
        name: "Michael Jordan Wallpaper 44",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6527.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6527.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1549,
        name: "Michael Jordan Wallpaper 43",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6533.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6533.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1550,
        name: "Michael Jordan Wallpaper 42",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6532.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6532.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1551,
        name: "Michael Jordan Wallpaper 41",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6526.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6526.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1552,
        name: "Michael Jordan Wallpaper 40",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6485.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6485.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1553,
        name: "Michael Jordan Wallpaper 39",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6491.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6491.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1554,
        name: "Michael Jordan Wallpaper 38",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6452.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6452.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1555,
        name: "Michael Jordan Wallpaper 37",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6478.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6478.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1556,
        name: "Michael Jordan Wallpaper 36",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6487.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6487.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1557,
        name: "Michael Jordan Wallpaper 35",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6493.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6493.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1558,
        name: "Michael Jordan Wallpaper 34",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6530.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6530.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1559,
        name: "Michael Jordan Wallpaper 33",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6524.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6524.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1560,
        name: "Michael Jordan Wallpaper 32",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6518.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6518.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1561,
        name: "Michael Jordan Wallpaper 31",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6519.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6519.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1562,
        name: "Michael Jordan Wallpaper 30",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6525.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6525.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1563,
        name: "Michael Jordan Wallpaper 29",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6531.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6531.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1564,
        name: "Michael Jordan Wallpaper 28",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6492.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6492.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1565,
        name: "Michael Jordan Wallpaper 27",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6486.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6486.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1566,
        name: "Michael Jordan Wallpaper 26",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6479.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6479.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1567,
        name: "Michael Jordan Wallpaper 25",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6451.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6451.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1568,
        name: "Michael Jordan Wallpaper 24",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6469.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6469.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1569,
        name: "Michael Jordan Wallpaper 23",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6455.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6455.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1570,
        name: "Michael Jordan Wallpaper 22",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6482.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6482.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1571,
        name: "Michael Jordan Wallpaper 21",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6496.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6496.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1572,
        name: "Michael Jordan Wallpaper 20",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6509.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6509.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1573,
        name: "Michael Jordan Wallpaper 19",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6535.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6535.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1574,
        name: "Michael Jordan Wallpaper 18",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6521.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6521.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1575,
        name: "Michael Jordan Wallpaper 17",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6520.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6520.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1576,
        name: "Michael Jordan Wallpaper 16",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6534.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6534.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1577,
        name: "Michael Jordan Wallpaper 15",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6508.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6508.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1578,
        name: "Michael Jordan Wallpaper 14",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6497.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6497.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1579,
        name: "Michael Jordan Wallpaper 13",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6483.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6483.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1580,
        name: "Michael Jordan Wallpaper 12",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6454.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6454.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1581,
        name: "Michael Jordan Wallpaper 11",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6468.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6468.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1582,
        name: "Michael Jordan Wallpaper 10",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6456.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6456.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1583,
        name: "Michael Jordan Wallpaper 9",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6495.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6495.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1584,
        name: "Michael Jordan Wallpaper 8",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6481.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6481.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1585,
        name: "Michael Jordan Wallpaper 7",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6522.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6522.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1586,
        name: "Michael Jordan Wallpaper 6",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6536.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6536.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1587,
        name: "Michael Jordan Wallpaper 5",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6537.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6537.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1588,
        name: "Michael Jordan Wallpaper 4",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6523.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6523.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1589,
        name: "Michael Jordan Wallpaper 3",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6480.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6480.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1590,
        name: "Michael Jordan Wallpaper 2",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6494.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6494.JPG",
        category: "Michael Jordan"
    },
    {
        id: 1591,
        name: "Michael Jordan Wallpaper 1",
        thumbnail: "iphone/Michael Jordan/Michael Jordan_6457.JPG",
        original: "iphone/Michael Jordan/Michael Jordan_6457.JPG",
        category: "Michael Jordan"
    },

    // Slam Dunk wallpapers (newest first)
    {
        id: 1592,
        name: "Slam Dunk Wallpaper 19",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6165.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6165.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1593,
        name: "Slam Dunk Wallpaper 18",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6171.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6171.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1594,
        name: "Slam Dunk Wallpaper 17",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6170.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6170.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1595,
        name: "Slam Dunk Wallpaper 16",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6164.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6164.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1596,
        name: "Slam Dunk Wallpaper 15",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6172.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6172.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1597,
        name: "Slam Dunk Wallpaper 14",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6166.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6166.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1598,
        name: "Slam Dunk Wallpaper 13",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6167.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6167.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1599,
        name: "Slam Dunk Wallpaper 12",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6173.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6173.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1600,
        name: "Slam Dunk Wallpaper 11",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6162.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6162.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1601,
        name: "Slam Dunk Wallpaper 10",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6176.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6176.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1602,
        name: "Slam Dunk Wallpaper 9",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6174.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6174.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1603,
        name: "Slam Dunk Wallpaper 8",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6175.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6175.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1604,
        name: "Slam Dunk Wallpaper 7",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6161.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6161.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1605,
        name: "Slam Dunk Wallpaper 6",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6162 (1).JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6162 (1).JPG",
        category: "Slam Dunk"
    },
    {
        id: 1606,
        name: "Slam Dunk Wallpaper 5",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6168.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6168.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1607,
        name: "Slam Dunk Wallpaper 4",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6124.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6124.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1608,
        name: "Slam Dunk Wallpaper 3",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6121.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6121.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1609,
        name: "Slam Dunk Wallpaper 2",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6122.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6122.JPG",
        category: "Slam Dunk"
    },
    {
        id: 1610,
        name: "Slam Dunk Wallpaper 1",
        thumbnail: "iphone/Slam Dunk/Slam Dunk_6123.JPG",
        original: "iphone/Slam Dunk/Slam Dunk_6123.JPG",
        category: "Slam Dunk"
    },

    // Stephen Curry wallpapers (newest first)
    {
        id: 1611,
        name: "Stephen Curry Wallpaper 64",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6356.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6356.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1612,
        name: "Stephen Curry Wallpaper 63",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6342.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6342.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1613,
        name: "Stephen Curry Wallpaper 62",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6343.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6343.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1614,
        name: "Stephen Curry Wallpaper 61",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6357.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6357.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1615,
        name: "Stephen Curry Wallpaper 60",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6341.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6341.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1616,
        name: "Stephen Curry Wallpaper 59",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6355.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6355.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1617,
        name: "Stephen Curry Wallpaper 58",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6354.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6354.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1618,
        name: "Stephen Curry Wallpaper 57",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6340.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6340.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1619,
        name: "Stephen Curry Wallpaper 56",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6344.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6344.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1620,
        name: "Stephen Curry Wallpaper 55",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6350.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6350.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1621,
        name: "Stephen Curry Wallpaper 54",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6351.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6351.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1622,
        name: "Stephen Curry Wallpaper 53",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6345.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6345.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1623,
        name: "Stephen Curry Wallpaper 52",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6353.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6353.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1624,
        name: "Stephen Curry Wallpaper 51",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6347.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6347.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1625,
        name: "Stephen Curry Wallpaper 50",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6346.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6346.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1626,
        name: "Stephen Curry Wallpaper 49",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6352.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6352.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1627,
        name: "Stephen Curry Wallpaper 48",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6309.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6309.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1628,
        name: "Stephen Curry Wallpaper 47",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6335.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6335.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1629,
        name: "Stephen Curry Wallpaper 46",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6321.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6321.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1630,
        name: "Stephen Curry Wallpaper 45",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6320.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6320.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1631,
        name: "Stephen Curry Wallpaper 44",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6334.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6334.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1632,
        name: "Stephen Curry Wallpaper 43",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6308.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6308.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1633,
        name: "Stephen Curry Wallpaper 42",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6322.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6322.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1634,
        name: "Stephen Curry Wallpaper 41",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6336.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6336.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1635,
        name: "Stephen Curry Wallpaper 40",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6337.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6337.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1636,
        name: "Stephen Curry Wallpaper 39",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6323.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6323.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1637,
        name: "Stephen Curry Wallpaper 38",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_5941.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_5941.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1638,
        name: "Stephen Curry Wallpaper 37",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6327.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6327.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1639,
        name: "Stephen Curry Wallpaper 36",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6333.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6333.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1640,
        name: "Stephen Curry Wallpaper 35",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6332.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6332.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1641,
        name: "Stephen Curry Wallpaper 34",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6326.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6326.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1642,
        name: "Stephen Curry Wallpaper 33",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_5940.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_5940.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1643,
        name: "Stephen Curry Wallpaper 32",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6330.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6330.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1644,
        name: "Stephen Curry Wallpaper 31",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6324.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6324.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1645,
        name: "Stephen Curry Wallpaper 30",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6318.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6318.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1646,
        name: "Stephen Curry Wallpaper 29",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6319.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6319.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1647,
        name: "Stephen Curry Wallpaper 28",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6325.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6325.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1648,
        name: "Stephen Curry Wallpaper 27",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6331.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6331.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1649,
        name: "Stephen Curry Wallpaper 26",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6328.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6328.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1650,
        name: "Stephen Curry Wallpaper 25",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6314.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6314.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1651,
        name: "Stephen Curry Wallpaper 24",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6315.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6315.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1652,
        name: "Stephen Curry Wallpaper 23",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6329.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6329.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1653,
        name: "Stephen Curry Wallpaper 22",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6317.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6317.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1654,
        name: "Stephen Curry Wallpaper 21",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6316.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6316.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1655,
        name: "Stephen Curry Wallpaper 20",
        thumbnail: "iphone/Stephen Curry/Stephen Curry5938.JPG",
        original: "iphone/Stephen Curry/Stephen Curry5938.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1656,
        name: "Stephen Curry Wallpaper 19",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6306.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6306.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1657,
        name: "Stephen Curry Wallpaper 18",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6312.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6312.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1658,
        name: "Stephen Curry Wallpaper 17",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6313.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6313.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1659,
        name: "Stephen Curry Wallpaper 16",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6307.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6307.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1660,
        name: "Stephen Curry Wallpaper 15",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6311.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6311.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1661,
        name: "Stephen Curry Wallpaper 14",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6305.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6305.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1662,
        name: "Stephen Curry Wallpaper 13",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6339.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6339.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1663,
        name: "Stephen Curry Wallpaper 12",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6338.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6338.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1664,
        name: "Stephen Curry Wallpaper 11",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6310.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6310.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1665,
        name: "Stephen Curry Wallpaper 10",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_5939.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_5939.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1666,
        name: "Stephen Curry Wallpaper 9",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6363.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6363.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1667,
        name: "Stephen Curry Wallpaper 8",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6362.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6362.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1668,
        name: "Stephen Curry Wallpaper 7",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6348.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6348.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1669,
        name: "Stephen Curry Wallpaper 6",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6360.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6360.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1670,
        name: "Stephen Curry Wallpaper 5",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6361.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6361.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1671,
        name: "Stephen Curry Wallpaper 4",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6349.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6349.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1672,
        name: "Stephen Curry Wallpaper 3",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6359.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6359.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1673,
        name: "Stephen Curry Wallpaper 2",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6358.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6358.JPG",
        category: "Stephen Curry"
    },
    {
        id: 1674,
        name: "Stephen Curry Wallpaper 1",
        thumbnail: "iphone/Stephen Curry/Stephen Curry_6364.JPG",
        original: "iphone/Stephen Curry/Stephen Curry_6364.JPG",
        category: "Stephen Curry"
    },

    // Other Basketball wallpapers (newest first)
    {
        id: 1675,
        name: "Other Basketball Wallpaper 106",
        thumbnail: "iphone/other basketball/basketball_6177.JPG",
        original: "iphone/other basketball/basketball_6177.JPG",
        category: "Other Basketball"
    },
    {
        id: 1676,
        name: "Other Basketball Wallpaper 105",
        thumbnail: "iphone/other basketball/basketball_6188.JPG",
        original: "iphone/other basketball/basketball_6188.JPG",
        category: "Other Basketball"
    },
    {
        id: 1677,
        name: "Other Basketball Wallpaper 104",
        thumbnail: "iphone/other basketball/basketball_6189.JPG",
        original: "iphone/other basketball/basketball_6189.JPG",
        category: "Other Basketball"
    },
    {
        id: 1678,
        name: "Other Basketball Wallpaper 103",
        thumbnail: "iphone/other basketball/basketball_6148.JPG",
        original: "iphone/other basketball/basketball_6148.JPG",
        category: "Other Basketball"
    },
    {
        id: 1679,
        name: "Other Basketball Wallpaper 102",
        thumbnail: "iphone/other basketball/basketball_6149.JPG",
        original: "iphone/other basketball/basketball_6149.JPG",
        category: "Other Basketball"
    },
    {
        id: 1680,
        name: "Other Basketball Wallpaper 101",
        thumbnail: "iphone/other basketball/basketball_6158.JPG",
        original: "iphone/other basketball/basketball_6158.JPG",
        category: "Other Basketball"
    },
    {
        id: 1681,
        name: "Other Basketball Wallpaper 100",
        thumbnail: "iphone/other basketball/basketball_6262.JPG",
        original: "iphone/other basketball/basketball_6262.JPG",
        category: "Other Basketball"
    },
    {
        id: 1682,
        name: "Other Basketball Wallpaper 99",
        thumbnail: "iphone/other basketball/basketball_5964.JPG",
        original: "iphone/other basketball/basketball_5964.JPG",
        category: "Other Basketball"
    },
    {
        id: 1683,
        name: "Other Basketball Wallpaper 98",
        thumbnail: "iphone/other basketball/basketball_5958.JPG",
        original: "iphone/other basketball/basketball_5958.JPG",
        category: "Other Basketball"
    },
    {
        id: 1684,
        name: "Other Basketball Wallpaper 97",
        thumbnail: "iphone/other basketball/basketball_6100.JPG",
        original: "iphone/other basketball/basketball_6100.JPG",
        category: "Other Basketball"
    },
    {
        id: 1685,
        name: "Other Basketball Wallpaper 96",
        thumbnail: "iphone/other basketball/basketball_6114.JPG",
        original: "iphone/other basketball/basketball_6114.JPG",
        category: "Other Basketball"
    },
    {
        id: 1686,
        name: "Other Basketball Wallpaper 95",
        thumbnail: "iphone/other basketball/basketball_6128.JPG",
        original: "iphone/other basketball/basketball_6128.JPG",
        category: "Other Basketball"
    },
    {
        id: 1687,
        name: "Other Basketball Wallpaper 94",
        thumbnail: "iphone/other basketball/basketball_6129.JPG",
        original: "iphone/other basketball/basketball_6129.JPG",
        category: "Other Basketball"
    },
    {
        id: 1688,
        name: "Other Basketball Wallpaper 93",
        thumbnail: "iphone/other basketball/basketball_6115.JPG",
        original: "iphone/other basketball/basketball_6115.JPG",
        category: "Other Basketball"
    },
    {
        id: 1689,
        name: "Other Basketball Wallpaper 92",
        thumbnail: "iphone/other basketball/basketball_6673.JPG",
        original: "iphone/other basketball/basketball_6673.JPG",
        category: "Other Basketball"
    },
    {
        id: 1690,
        name: "Other Basketball Wallpaper 91",
        thumbnail: "iphone/other basketball/basketball_6101.JPG",
        original: "iphone/other basketball/basketball_6101.JPG",
        category: "Other Basketball"
    },
    {
        id: 1691,
        name: "Other Basketball Wallpaper 90",
        thumbnail: "iphone/other basketball/basketball_5959.JPG",
        original: "iphone/other basketball/basketball_5959.JPG",
        category: "Other Basketball"
    },
    {
        id: 1692,
        name: "Other Basketball Wallpaper 89",
        thumbnail: "iphone/other basketball/basketball_6263.JPG",
        original: "iphone/other basketball/basketball_6263.JPG",
        category: "Other Basketball"
    },
    {
        id: 1693,
        name: "Other Basketball Wallpaper 88",
        thumbnail: "iphone/other basketball/basketball_6261.JPG",
        original: "iphone/other basketball/basketball_6261.JPG",
        category: "Other Basketball"
    },
    {
        id: 1694,
        name: "Other Basketball Wallpaper 87",
        thumbnail: "iphone/other basketball/basketball_5967.JPG",
        original: "iphone/other basketball/basketball_5967.JPG",
        category: "Other Basketball"
    },
    {
        id: 1695,
        name: "Other Basketball Wallpaper 86",
        thumbnail: "iphone/other basketball/basketball_6117.JPG",
        original: "iphone/other basketball/basketball_6117.JPG",
        category: "Other Basketball"
    },
    {
        id: 1696,
        name: "Other Basketball Wallpaper 85",
        thumbnail: "iphone/other basketball/basketball_6103.JPG",
        original: "iphone/other basketball/basketball_6103.JPG",
        category: "Other Basketball"
    },
    {
        id: 1697,
        name: "Other Basketball Wallpaper 84",
        thumbnail: "iphone/other basketball/basketball_6102.JPG",
        original: "iphone/other basketball/basketball_6102.JPG",
        category: "Other Basketball"
    },
    {
        id: 1698,
        name: "Other Basketball Wallpaper 83",
        thumbnail: "iphone/other basketball/basketball_6116.JPG",
        original: "iphone/other basketball/basketball_6116.JPG",
        category: "Other Basketball"
    },
    {
        id: 1699,
        name: "Other Basketball Wallpaper 82",
        thumbnail: "iphone/other basketball/basketball_5966.JPG",
        original: "iphone/other basketball/basketball_5966.JPG",
        category: "Other Basketball"
    },
    {
        id: 1700,
        name: "Other Basketball Wallpaper 81",
        thumbnail: "iphone/other basketball/basketball_6260.JPG",
        original: "iphone/other basketball/basketball_6260.JPG",
        category: "Other Basketball"
    },
    {
        id: 1701,
        name: "Other Basketball Wallpaper 80",
        thumbnail: "iphone/other basketball/basketball_6258.JPG",
        original: "iphone/other basketball/basketball_6258.JPG",
        category: "Other Basketball"
    },
    {
        id: 1702,
        name: "Other Basketball Wallpaper 79",
        thumbnail: "iphone/other basketball/basketball_6264.JPG",
        original: "iphone/other basketball/basketball_6264.JPG",
        category: "Other Basketball"
    },
    {
        id: 1703,
        name: "Other Basketball Wallpaper 78",
        thumbnail: "iphone/other basketball/basketball_6270.JPG",
        original: "iphone/other basketball/basketball_6270.JPG",
        category: "Other Basketball"
    },
    {
        id: 1704,
        name: "Other Basketball Wallpaper 77",
        thumbnail: "iphone/other basketball/basketball_6099.JPG",
        original: "iphone/other basketball/basketball_6099.JPG",
        category: "Other Basketball"
    },
    {
        id: 1705,
        name: "Other Basketball Wallpaper 76",
        thumbnail: "iphone/other basketball/basketball_6112.JPG",
        original: "iphone/other basketball/basketball_6112.JPG",
        category: "Other Basketball"
    },
    {
        id: 1706,
        name: "Other Basketball Wallpaper 75",
        thumbnail: "iphone/other basketball/basketball_6674.JPG",
        original: "iphone/other basketball/basketball_6674.JPG",
        category: "Other Basketball"
    },
    {
        id: 1707,
        name: "Other Basketball Wallpaper 74",
        thumbnail: "iphone/other basketball/basketball_6106.JPG",
        original: "iphone/other basketball/basketball_6106.JPG",
        category: "Other Basketball"
    },
    {
        id: 1708,
        name: "Other Basketball Wallpaper 73",
        thumbnail: "iphone/other basketball/basketball_6107.JPG",
        original: "iphone/other basketball/basketball_6107.JPG",
        category: "Other Basketball"
    },
    {
        id: 1709,
        name: "Other Basketball Wallpaper 72",
        thumbnail: "iphone/other basketball/basketball_6113.JPG",
        original: "iphone/other basketball/basketball_6113.JPG",
        category: "Other Basketball"
    },
    {
        id: 1710,
        name: "Other Basketball Wallpaper 71",
        thumbnail: "iphone/other basketball/basketball_6675.JPG",
        original: "iphone/other basketball/basketball_6675.JPG",
        category: "Other Basketball"
    },
    {
        id: 1711,
        name: "Other Basketball Wallpaper 70",
        thumbnail: "iphone/other basketball/basketball_6271.JPG",
        original: "iphone/other basketball/basketball_6271.JPG",
        category: "Other Basketball"
    },
    {
        id: 1712,
        name: "Other Basketball Wallpaper 69",
        thumbnail: "iphone/other basketball/basketball_6265.JPG",
        original: "iphone/other basketball/basketball_6265.JPG",
        category: "Other Basketball"
    },
    {
        id: 1713,
        name: "Other Basketball Wallpaper 68",
        thumbnail: "iphone/other basketball/basketball_6259.JPG",
        original: "iphone/other basketball/basketball_6259.JPG",
        category: "Other Basketball"
    },
    {
        id: 1714,
        name: "Other Basketball Wallpaper 67",
        thumbnail: "iphone/other basketball/basketball_6273.JPG",
        original: "iphone/other basketball/basketball_6273.JPG",
        category: "Other Basketball"
    },
    {
        id: 1715,
        name: "Other Basketball Wallpaper 66",
        thumbnail: "iphone/other basketball/basketball_6267.JPG",
        original: "iphone/other basketball/basketball_6267.JPG",
        category: "Other Basketball"
    },
    {
        id: 1716,
        name: "Other Basketball Wallpaper 65",
        thumbnail: "iphone/other basketball/basketball_5961.JPG",
        original: "iphone/other basketball/basketball_5961.JPG",
        category: "Other Basketball"
    },
    {
        id: 1717,
        name: "Other Basketball Wallpaper 64",
        thumbnail: "iphone/other basketball/basketball_6139.JPG",
        original: "iphone/other basketball/basketball_6139.JPG",
        category: "Other Basketball"
    },
    {
        id: 1718,
        name: "Other Basketball Wallpaper 63",
        thumbnail: "iphone/other basketball/basketball_6105.JPG",
        original: "iphone/other basketball/basketball_6105.JPG",
        category: "Other Basketball"
    },
    {
        id: 1719,
        name: "Other Basketball Wallpaper 62",
        thumbnail: "iphone/other basketball/basketball_6677.JPG",
        original: "iphone/other basketball/basketball_6677.JPG",
        category: "Other Basketball"
    },
    {
        id: 1720,
        name: "Other Basketball Wallpaper 61",
        thumbnail: "iphone/other basketball/basketball_6111.JPG",
        original: "iphone/other basketball/basketball_6111.JPG",
        category: "Other Basketball"
    },
    {
        id: 1721,
        name: "Other Basketball Wallpaper 60",
        thumbnail: "iphone/other basketball/basketball_6676.JPG",
        original: "iphone/other basketball/basketball_6676.JPG",
        category: "Other Basketball"
    },
    {
        id: 1722,
        name: "Other Basketball Wallpaper 59",
        thumbnail: "iphone/other basketball/basketball_6110.JPG",
        original: "iphone/other basketball/basketball_6110.JPG",
        category: "Other Basketball"
    },
    {
        id: 1723,
        name: "Other Basketball Wallpaper 58",
        thumbnail: "iphone/other basketball/basketball_6104.JPG",
        original: "iphone/other basketball/basketball_6104.JPG",
        category: "Other Basketball"
    },
    {
        id: 1724,
        name: "Other Basketball Wallpaper 57",
        thumbnail: "iphone/other basketball/basketball_6138.JPG",
        original: "iphone/other basketball/basketball_6138.JPG",
        category: "Other Basketball"
    },
    {
        id: 1725,
        name: "Other Basketball Wallpaper 56",
        thumbnail: "iphone/other basketball/basketball_5960.JPG",
        original: "iphone/other basketball/basketball_5960.JPG",
        category: "Other Basketball"
    },
    {
        id: 1726,
        name: "Other Basketball Wallpaper 55",
        thumbnail: "iphone/other basketball/basketball_6266.JPG",
        original: "iphone/other basketball/basketball_6266.JPG",
        category: "Other Basketball"
    },
    {
        id: 1727,
        name: "Other Basketball Wallpaper 54",
        thumbnail: "iphone/other basketball/basketball_6272.JPG",
        original: "iphone/other basketball/basketball_6272.JPG",
        category: "Other Basketball"
    },
    {
        id: 1728,
        name: "Other Basketball Wallpaper 53",
        thumbnail: "iphone/other basketball/basketball_6135.JPG",
        original: "iphone/other basketball/basketball_6135.JPG",
        category: "Other Basketball"
    },
    {
        id: 1729,
        name: "Other Basketball Wallpaper 52",
        thumbnail: "iphone/other basketball/basketball_6109.JPG",
        original: "iphone/other basketball/basketball_6109.JPG",
        category: "Other Basketball"
    },
    {
        id: 1730,
        name: "Other Basketball Wallpaper 51",
        thumbnail: "iphone/other basketball/basketball_6108.JPG",
        original: "iphone/other basketball/basketball_6108.JPG",
        category: "Other Basketball"
    },
    {
        id: 1731,
        name: "Other Basketball Wallpaper 50",
        thumbnail: "iphone/other basketball/basketball_6134.JPG",
        original: "iphone/other basketball/basketball_6134.JPG",
        category: "Other Basketball"
    },
    {
        id: 1732,
        name: "Other Basketball Wallpaper 49",
        thumbnail: "iphone/other basketball/basketball_6120.JPG",
        original: "iphone/other basketball/basketball_6120.JPG",
        category: "Other Basketball"
    },
    {
        id: 1733,
        name: "Other Basketball Wallpaper 48",
        thumbnail: "iphone/other basketball/basketball_6268.JPG",
        original: "iphone/other basketball/basketball_6268.JPG",
        category: "Other Basketball"
    },
    {
        id: 1734,
        name: "Other Basketball Wallpaper 47",
        thumbnail: "iphone/other basketball/basketball_6136.JPG",
        original: "iphone/other basketball/basketball_6136.JPG",
        category: "Other Basketball"
    },
    {
        id: 1735,
        name: "Other Basketball Wallpaper 46",
        thumbnail: "iphone/other basketball/basketball_6678.JPG",
        original: "iphone/other basketball/basketball_6678.JPG",
        category: "Other Basketball"
    },
    {
        id: 1736,
        name: "Other Basketball Wallpaper 45",
        thumbnail: "iphone/other basketball/basketball_6686.JPG",
        original: "iphone/other basketball/basketball_6686.JPG",
        category: "Other Basketball"
    },
    {
        id: 1737,
        name: "Other Basketball Wallpaper 44",
        thumbnail: "iphone/other basketball/basketball_6679.JPG",
        original: "iphone/other basketball/basketball_6679.JPG",
        category: "Other Basketball"
    },
    {
        id: 1738,
        name: "Other Basketball Wallpaper 43",
        thumbnail: "iphone/other basketball/basketball_6137.JPG",
        original: "iphone/other basketball/basketball_6137.JPG",
        category: "Other Basketball"
    },
    {
        id: 1739,
        name: "Other Basketball Wallpaper 42",
        thumbnail: "iphone/other basketball/basketball_6269.JPG",
        original: "iphone/other basketball/basketball_6269.JPG",
        category: "Other Basketball"
    },
    {
        id: 1740,
        name: "Other Basketball Wallpaper 41",
        thumbnail: "iphone/other basketball/basketball_6133.JPG",
        original: "iphone/other basketball/basketball_6133.JPG",
        category: "Other Basketball"
    },
    {
        id: 1741,
        name: "Other Basketball Wallpaper 40",
        thumbnail: "iphone/other basketball/basketball_6126.JPG",
        original: "iphone/other basketball/basketball_6126.JPG",
        category: "Other Basketball"
    },
    {
        id: 1742,
        name: "Other Basketball Wallpaper 39",
        thumbnail: "iphone/other basketball/basketball_6132.JPG",
        original: "iphone/other basketball/basketball_6132.JPG",
        category: "Other Basketball"
    },
    {
        id: 1743,
        name: "Other Basketball Wallpaper 38",
        thumbnail: "iphone/other basketball/basketball_5956.JPG",
        original: "iphone/other basketball/basketball_5956.JPG",
        category: "Other Basketball"
    },
    {
        id: 1744,
        name: "Other Basketball Wallpaper 37",
        thumbnail: "iphone/other basketball/basketball_6118.JPG",
        original: "iphone/other basketball/basketball_6118.JPG",
        category: "Other Basketball"
    },
    {
        id: 1745,
        name: "Other Basketball Wallpaper 36",
        thumbnail: "iphone/other basketball/basketball_6130.JPG",
        original: "iphone/other basketball/basketball_6130.JPG",
        category: "Other Basketball"
    },
    {
        id: 1746,
        name: "Other Basketball Wallpaper 35",
        thumbnail: "iphone/other basketball/basketball_6131.JPG",
        original: "iphone/other basketball/basketball_6131.JPG",
        category: "Other Basketball"
    },
    {
        id: 1747,
        name: "Other Basketball Wallpaper 34",
        thumbnail: "iphone/other basketball/basketball_6125.JPG",
        original: "iphone/other basketball/basketball_6125.JPG",
        category: "Other Basketball"
    },
    {
        id: 1748,
        name: "Other Basketball Wallpaper 33",
        thumbnail: "iphone/other basketball/basketball_6119.JPG",
        original: "iphone/other basketball/basketball_6119.JPG",
        category: "Other Basketball"
    },
    {
        id: 1749,
        name: "Other Basketball Wallpaper 32",
        thumbnail: "iphone/other basketball/basketball_5955.JPG",
        original: "iphone/other basketball/basketball_5955.JPG",
        category: "Other Basketball"
    },
    {
        id: 1750,
        name: "Other Basketball Wallpaper 31",
        thumbnail: "iphone/other basketball/basketball_6142.JPG",
        original: "iphone/other basketball/basketball_6142.JPG",
        category: "Other Basketball"
    },
    {
        id: 1751,
        name: "Other Basketball Wallpaper 30",
        thumbnail: "iphone/other basketball/basketball_6181.JPG",
        original: "iphone/other basketball/basketball_6181.JPG",
        category: "Other Basketball"
    },
    {
        id: 1752,
        name: "Other Basketball Wallpaper 29",
        thumbnail: "iphone/other basketball/basketball_6195.JPG",
        original: "iphone/other basketball/basketball_6195.JPG",
        category: "Other Basketball"
    },
    {
        id: 1753,
        name: "Other Basketball Wallpaper 28",
        thumbnail: "iphone/other basketball/basketball_6194.JPG",
        original: "iphone/other basketball/basketball_6194.JPG",
        category: "Other Basketball"
    },
    {
        id: 1754,
        name: "Other Basketball Wallpaper 27",
        thumbnail: "iphone/other basketball/basketball_6180.JPG",
        original: "iphone/other basketball/basketball_6180.JPG",
        category: "Other Basketball"
    },
    {
        id: 1755,
        name: "Other Basketball Wallpaper 26",
        thumbnail: "iphone/other basketball/basketball_6157.JPG",
        original: "iphone/other basketball/basketball_6157.JPG",
        category: "Other Basketball"
    },
    {
        id: 1756,
        name: "Other Basketball Wallpaper 25",
        thumbnail: "iphone/other basketball/basketball_6143.JPG",
        original: "iphone/other basketball/basketball_6143.JPG",
        category: "Other Basketball"
    },
    {
        id: 1757,
        name: "Other Basketball Wallpaper 24",
        thumbnail: "iphone/other basketball/basketball_6155.JPG",
        original: "iphone/other basketball/basketball_6155.JPG",
        category: "Other Basketball"
    },
    {
        id: 1758,
        name: "Other Basketball Wallpaper 23",
        thumbnail: "iphone/other basketball/basketball_6141.JPG",
        original: "iphone/other basketball/basketball_6141.JPG",
        category: "Other Basketball"
    },
    {
        id: 1759,
        name: "Other Basketball Wallpaper 22",
        thumbnail: "iphone/other basketball/basketball_6196.JPG",
        original: "iphone/other basketball/basketball_6196.JPG",
        category: "Other Basketball"
    },
    {
        id: 1760,
        name: "Other Basketball Wallpaper 21",
        thumbnail: "iphone/other basketball/basketball_6182.JPG",
        original: "iphone/other basketball/basketball_6182.JPG",
        category: "Other Basketball"
    },
    {
        id: 1761,
        name: "Other Basketball Wallpaper 20",
        thumbnail: "iphone/other basketball/basketball_6183.JPG",
        original: "iphone/other basketball/basketball_6183.JPG",
        category: "Other Basketball"
    },
    {
        id: 1762,
        name: "Other Basketball Wallpaper 19",
        thumbnail: "iphone/other basketball/basketball_6197.JPG",
        original: "iphone/other basketball/basketball_6197.JPG",
        category: "Other Basketball"
    },
    {
        id: 1763,
        name: "Other Basketball Wallpaper 18",
        thumbnail: "iphone/other basketball/basketball_6140.JPG",
        original: "iphone/other basketball/basketball_6140.JPG",
        category: "Other Basketball"
    },
    {
        id: 1764,
        name: "Other Basketball Wallpaper 17",
        thumbnail: "iphone/other basketball/basketball_6154.JPG",
        original: "iphone/other basketball/basketball_6154.JPG",
        category: "Other Basketball"
    },
    {
        id: 1765,
        name: "Other Basketball Wallpaper 16",
        thumbnail: "iphone/other basketball/basketball_6178.JPG",
        original: "iphone/other basketball/basketball_6178.JPG",
        category: "Other Basketball"
    },
    {
        id: 1766,
        name: "Other Basketball Wallpaper 15",
        thumbnail: "iphone/other basketball/basketball_6150.JPG",
        original: "iphone/other basketball/basketball_6150.JPG",
        category: "Other Basketball"
    },
    {
        id: 1767,
        name: "Other Basketball Wallpaper 14",
        thumbnail: "iphone/other basketball/basketball_6144.JPG",
        original: "iphone/other basketball/basketball_6144.JPG",
        category: "Other Basketball"
    },
    {
        id: 1768,
        name: "Other Basketball Wallpaper 13",
        thumbnail: "iphone/other basketball/basketball_6193.JPG",
        original: "iphone/other basketball/basketball_6193.JPG",
        category: "Other Basketball"
    },
    {
        id: 1769,
        name: "Other Basketball Wallpaper 12",
        thumbnail: "iphone/other basketball/basketball_6187.JPG",
        original: "iphone/other basketball/basketball_6187.JPG",
        category: "Other Basketball"
    },
    {
        id: 1770,
        name: "Other Basketball Wallpaper 11",
        thumbnail: "iphone/other basketball/basketball_6186.JPG",
        original: "iphone/other basketball/basketball_6186.JPG",
        category: "Other Basketball"
    },
    {
        id: 1771,
        name: "Other Basketball Wallpaper 10",
        thumbnail: "iphone/other basketball/basketball_6151.JPG",
        original: "iphone/other basketball/basketball_6151.JPG",
        category: "Other Basketball"
    },
    {
        id: 1772,
        name: "Other Basketball Wallpaper 9",
        thumbnail: "iphone/other basketball/basketball_6179.JPG",
        original: "iphone/other basketball/basketball_6179.JPG",
        category: "Other Basketball"
    },
    {
        id: 1773,
        name: "Other Basketball Wallpaper 8",
        thumbnail: "iphone/other basketball/basketball_6147.JPG",
        original: "iphone/other basketball/basketball_6147.JPG",
        category: "Other Basketball"
    },
    {
        id: 1774,
        name: "Other Basketball Wallpaper 7",
        thumbnail: "iphone/other basketball/basketball_6153.JPG",
        original: "iphone/other basketball/basketball_6153.JPG",
        category: "Other Basketball"
    },
    {
        id: 1775,
        name: "Other Basketball Wallpaper 6",
        thumbnail: "iphone/other basketball/basketball_6184.JPG",
        original: "iphone/other basketball/basketball_6184.JPG",
        category: "Other Basketball"
    },
    {
        id: 1776,
        name: "Other Basketball Wallpaper 5",
        thumbnail: "iphone/other basketball/basketball_6190.JPG",
        original: "iphone/other basketball/basketball_6190.JPG",
        category: "Other Basketball"
    },
    {
        id: 1777,
        name: "Other Basketball Wallpaper 4",
        thumbnail: "iphone/other basketball/basketball_6191.JPG",
        original: "iphone/other basketball/basketball_6191.JPG",
        category: "Other Basketball"
    },
    {
        id: 1778,
        name: "Other Basketball Wallpaper 3",
        thumbnail: "iphone/other basketball/basketball_6185.JPG",
        original: "iphone/other basketball/basketball_6185.JPG",
        category: "Other Basketball"
    },
    {
        id: 1779,
        name: "Other Basketball Wallpaper 2",
        thumbnail: "iphone/other basketball/basketball_6152.JPG",
        original: "iphone/other basketball/basketball_6152.JPG",
        category: "Other Basketball"
    },
    {
        id: 1780,
        name: "Other Basketball Wallpaper 1",
        thumbnail: "iphone/other basketball/basketball_6146.JPG",
        original: "iphone/other basketball/basketball_6146.JPG",
        category: "Other Basketball"
    },

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
    // Skip displayWallpapers on blog page
    if (!window.isBlogPage && wallpapersContainer) {
        displayWallpapers(wallpapers);
    }
    setupEventListeners();
});

// Display wallpapers in the grid
function displayWallpapers(wallpaperList) {
    // Check if wallpapersContainer exists before manipulating it
    if (!wallpapersContainer) {
        return;
    }
    
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