var friendsArray = [
    // we put quotes around the keys because they are JSON objects 
    [
        {
        "name": "Sam",
        "photo": "https://worldwideinterweb.com/wp-content/uploads/2017/10/baby-face-funniest.jpg",
        "scores": [
        "5",
        "1",
        "4",
        "4",
        "5",
        "1",
        "2",
        "5",
        "4",
        "1"
        ]
        },
        {
        "name": "Kevin",
        "photo": "https://i.ytimg.com/vi/ln7lCbexP5s/hqdefault.jpg",
        "scores": [
        "4",
        "2",
        "5",
        "1",
        "3",
        "2",
        "2",
        "1",
        "3",
        "2"
        ]
        },
        {
        "name": "Alen",
        "photo": "https://i.ytimg.com/vi/a37vtRhGUV0/hqdefault.jpg",
        "scores": [
        "5",
        "2",
        "2",
        "2",
        "4",
        "1",
        "3",
        "2",
        "5",
        "5"
        ]
        },
        {
        "name": "Monica",
        "photo": "https://i.pinimg.com/236x/62/eb/be/62ebbe31dcfc0ae9b7547d101e43765f--funny-pics-of-people-funny-people-at-walmart.jpg",
        "scores": [
        "3",
        "3",
        "4",
        "2",
        "2",
        "1",
        "3",
        "2",
        "2",
        "3"
        ]
        },
        {
        "name": "Louis",
        "photo": "https://i.kym-cdn.com/entries/icons/original/000/018/385/Rs_634x1024-130605092844-634.DespMe2.mh.060513.jpg",
        "scores": [
        "4",
        "3",
        "4",
        "1",
        "5",
        "2",
        "5",
        "3",
        "1",
        "4"
        ]
        },
        {
        "name": "Jordan",
        "photo": "https://www.mdislander.com/wp-content/uploads/sites/5/2016/12/shrek-for-cutout-1200x795.png",
        "scores": [
        "4",
        "4",
        "2",
        "3",
        "2",
        "2",
        "3",
        "2",
        "4",
        "5"
        ]
        },
        {
        "name": "Tony",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmMm7I9wuLeamOPAib8KpsXSGwowfTt3PXKupH2mGFMNgAZANmWw",
        "scores": [
        "2",
        "5",
        "2",
        "2",
        "1",
        "1",
        "3",
        "5",
        "3",
        "3"
        ]
        },
        {
        "name": "Filip",
        "photo": "https://i.ytimg.com/vi/SiVr9DM_EG0/maxresdefault.jpg",
        "scores": [
        "2",
        "5",
        "2",
        "2",
        "1",
        "1",
        "3",
        "5",
        "3",
        "3"
        ]
        },
        {
        "name": "Tom",
        "photo": "http://www.boomerang.asia/dynamic/video/00000001/1191/d5d5fd7ee30a8da14dfd2c8dcf31f8f5.jpg",
        "scores": [
        "2",
        "5",
        "2",
        "2",
        "1",
        "1",
        "3",
        "5",
        "3",
        "3"
        ]
        },
        {
        "name": "Mary",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdzoqHldjijxwqVpU3jMj9_CDeF2AN-zsHaJ6a3gW3RcfK5rC",
        "scores": [
        "1",
        "5",
        "2",
        "1",
        "1",
        "1",
        "5",
        "5",
        "3",
        "1"
        ]
        },
        {
        "name": "Ben",
        "photo": "https://uploads.guim.co.uk/2017/10/06/First-Dog-on-the-Moon,_L.png",
        "scores": [
        "3",
        "3",
        "3",
        "3",
        "3",
        "3",
        "3",
        "3",
        "3",
        "3"
        ]
        },
        {
        "name": "John",
        "photo": "https://t3.ftcdn.net/jpg/00/92/33/46/240_F_92334648_vmyHzWdqXE1JuOu0zh4toOrn0CzmYqtJ.jpg",
        "scores": [
        "4",
        "4",
        "5",
        "2",
        "3",
        "4",
        "5",
        "2",
        "2",
        "2"
        ]
        },
        {
        "name": "Amy",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRoNA-iUmG0_YTaIVFXhixK2Mi3zyMw0F7UIkBbqDLDDSoiSpd",
        "scores": [
        "2",
        "1",
        "1",
        "5",
        "3",
        "3",
        "3",
        "5",
        "1",
        "2"
        ]
        },
        {
        "name": "Henry",
        "photo": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/richie-rich-1525458654.jpg?crop=1xw:1xh;center,top&resize=480:*",
        "scores": [
        "2",
        "1",
        "1",
        "5",
        "1",
        "1",
        "2",
        "5",
        "1",
        "2"
        ]
        },
        {
        "name": "Joe",
        "photo": "yhttps://pbs.twimg.com/profile_images/622851271473688580/qUxRkNnI.png",
        "scores": [
        "5",
        "5",
        "5",
        "5",
        "1",
        "1",
        "2",
        "5",
        "1",
        "2"
        ]
        },
        {
        "name": "Lusy",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEg6Qhf-Ccur-0AyDqudAfuADDhs5Atr2tHN1drQvwM2lVgkuY",
        "scores": [
        "5",
        "2",
        "2",
        "1",
        "1",
        "3",
        "4",
        "1",
        "5",
        "3"
        ]
        },
        {
        "name": "Tom",
        "photo": "https://i.cartoonnetwork.com/prismo/props/chars/steven_steven_180x180.png",
        "scores": [
        "5",
        "3",
        "4",
        "4",
        "2",
        "4",
        "4",
        "3",
        "4",
        "5"
        ]
        },
        {
        "name": "Katy",
        "photo": "https://proxy.topixcdn.com/ipicimg/GT0TL1R9K470SST8-cp384x564x2510x1627-fill810x415x",
        "scores": [
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2",
        "2"
        ]
        },
        {
        "name": "Bob",
        "photo": "https://metvcdn.metv.com/8uqTR-1519150207-embed-cartoons%206%20cartoon%20dogs%20snoopy.jpg",
        "scores": [
        "2",
        "2",
        "3",
        "3",
        "4",
        "3",
        "3",
        "3",
        "3",
        "1"
        ]
        },
        {
        "name": "John",
        "photo": "https://img.clipartxtras.com/6db43861f449ed9fba7e3e521bba09f7_tweety-bird-old-cartoon-character-cartoons-pinterest-tweety-famous-cartoon-characters-clipart_236-299.jpeg",
        "scores": [
        "2",
        "2",
        "3",
        "3",
        "4",
        "3",
        "3",
        "3",
        "3",
        "1"
        ]
        },
        {
        "name": "Ed",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfjBqfLY7ImyWGaOPrOWMMqqhpcxttdDhE6NKKclJ0iUIBxPwD",
        "scores": [
        "2",
        "2",
        "3",
        "3",
        "4",
        "3",
        "3",
        "3",
        "3",
        "1"
        ]
        },
        {
        "name": "Melani",
        "photo": "https://www.museumoftherockies.org/images/made/uploads/Exhibits/Coming_Warner_Bros/Warner-Brothers_Bugs_web_wc_800_400.jpg",
        "scores": [
        "1",
        "1",
        "1",
        "5",
        "1",
        "2",
        "2",
        "4",
        "1",
        "2"
        ]
        },
        {
        "name": "Zara",
        "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_YnUmDtiD0n0LBOoM28bXL9AXdeVMFQ_IR6hKDZXGKUb9C7Sug",
        "scores": [
        "2",
        "2",
        "3",
        "3",
        "3",
        "3",
        "1",
        "5",
        "1",
        "1"
        ]
        }
        ]
    ]
module.exports = friendsArray; 