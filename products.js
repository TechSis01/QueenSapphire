const products = [
    {
        id:0,
        title:"Earring",
        price:70,
        Description:'18karate diamond Earrings',
        imagesrc:'data:image/jpeg;base64,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',
    },
    {
        id:1,
        title:"Earring",
        price:100,
        Description:'18karate diamond Earrings',
        imagesrc:'./Images/earring10.png',
    },
    {
        id:2,
        title:"Earring",
        price:70,
        Description:'18karate diamond Earrings',
        imagesrc:'./images/model1.png',
    },
    {
        id:3,
        title:"Earring",
        price:130,
        Description:'18karate diamond Earrings',
        imagesrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRc5QSHCvbYjP6skPGvubo85AVQU2YGu0Lw&usqp=CAU',
    },
    {
        id:4,
        title:"Earring",
        price:190,
        Description:'18karate diamond Earrings',
        imagesrc:'./Images/earring7.png',
    },
    {
        id:5,
        title:"Necklace",
        price:12000,
        Description:'18karate diamond Necklace',
        imagesrc:'./Images/bridalnecklace.png',
    },
    {
        id:6,
        title:"Necklace",
        price:1000,
        Description:'18karate diamond Necklace',
        imagesrc:'./Images/chanelNecklace.png',
    },
    {
        id:7,
        title:"Necklace",
        price:100,
        Description:'18karate diamond Necklace',
        imagesrc:'./Images/necklace1.png',
    },
    {
        id:8,
        title:"Necklace",
        price:110,
        Description:'18karate diamond Necklace',
        imagesrc:'./Images/drina-necklace.png',
    },
    {
        id:9,
        title:"Necklace",
        price:170,
        Description:'18karate diamond Necklace',
        imagesrc:'./Images/necklace1.png',
    },
    {
        id:10,
        title:"Ring",
        price:300,
        Description:'18karate diamond Ring',
        imagesrc:'./Images/ring2.png',
    },
    {
        id:11,
        title:"Ring",
        price:100,
        Description:'18karate diamond Ring',
        imagesrc:'./Images/ring5.png',
    },
    {
        id:12,
        title:"Ring",
        price:190,
        Description:'18karate diamond Ring',
        imagesrc:'./Images/ring4.png',
    },
    {
        id:13,
        title:"Ring",
        price:150,
        Description:'18karate diamond Ring',
        imagesrc:'./Images/ring6.png',
    },
    {
        id:14,
        title:"Ring",
        price:150,
        Description:'18karate diamond Ring',
        imagesrc:'./Images/ring6.png',
    }
]