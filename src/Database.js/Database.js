export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLigth: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777'
};

export const productFamily = [
    {
        id:1,
        familyName:"Conservas",
        imageF:require('../images/familyProducts/conservas.png')
    },
    {
        id:2,
        familyName:"Alimentos Frescos",
        imageF:require('../images/familyProducts/frescos.png')
    },
    {
        id:3,
        familyName:"Bebidas y Licores",
        imageF:require('../images/familyProducts/bebidaslicores.png')
    },
    {
        id:4,
        familyName:"Electros",
        imageF:require('../images/familyProducts/electros.png')
    },
    {
        id:5,
        familyName:"Aseo y Belleza",
        imageF:require('../images/familyProducts/aseobelleza.png')
    },
    {
        id:6,
        familyName:"Químicos del Hogar",
        imageF:require('../images/familyProducts/quimicos.png')
    },
    {
        id:7,
        familyName:"Confituras",
        imageF:require('../images/familyProducts/conservas.png')
    },
    {
        id:8,
        familyName:"Pastas",
        imageF:require('../images/familyProducts/conservas.png')
    },
    {
        id:9,
        familyName:"Ferreteria",
        imageF:require('../images/familyProducts/conservas.png')
    },
];

export const Items = [
    {
        id:1,
        idF:4,
        category:'accessory',
        productName:'My Super Bass Bluetooth Wireless Headphone',
        productPrice:1999.45,
        description:'Bluetooth: It has Bluetooth v5.0 whith a range of 10m and is compatible',
        isOff: false,
        saldo: 10,
        isAvailable: true,
        productImage:require('../images/accesories/A1.png'),
    },
    {
        id:2,
        idF:4,
        category:'accessory',
        productName:'boAt Rockerz 450 Bluetooth Headphone',
        productPrice:1499,
        description:'boAt Rockerz 450 M is an on-ear wirreless headset that has been ergonomica',
        isOff: false,
        saldo: 10,
        isAvailable: true,
        productImage:require('../images/accesories/A2.png'),
    },
    {
        id:3,
        idF:4,
        category:'accessory',
        productName:'boAt Airdopes 441',
        productPrice:1999,
        description:'Bluetooth: It has Bluetooth v5.0 whith a range of 10m and is compatible',
        isOff: false,
        saldo: 10,
        isAvailable: false,
        productImage:require('../images/accesories/A3.png'),
    },
    {
        id:4,
        idF:4,
        category:'accessory',
        productName:'My Super Bass Bluetooth Wireless Headphone',
        productPrice:1999,
        description:'Bluetooth: It has Bluetooth v5.0 whith a range of 10m and is compatible',
        isOff: false,
        saldo: 10,
        isAvailable: false,
        productImage:require('../images/accesories/A4.png'),
    },
    {
        id:5,
        idF:4,
        category:'accessory',
        productName:'Super Bass Bluetooth Wireless Headphone',
        productPrice:2000,
        description:'Bluetooth: It has Bluetooth v5.0 whith a range of 10m and is compatible',
        isOff: false,
        saldo: 10,
        isAvailable: true,
        productImage:require('../images/accesories/A5.png'),
    },
    {
        id:7,
        idF:1,
        category:'product',
        productName:'Orange fruit',
        productPrice:502.05,
        description:'Is a healt fruit color yellow',
        isOff: false,
        saldo: 10,
        isAvailable: true,
        productImage:require('../images/products/P1.png'),
    },    {
        id:8,
        idF:1,
        category:'product',
        productName:'Piña fruit',
        productPrice:258,
        description:'Is a healt fruit color yellow',
        isOff: false,
        isAvailable: true,
        saldo: 10,
        productImage:require('../images/products/P2.png'),
    },
    {
        id:9,
        idF:1,
        category:'product',
        productName:'Uva fruit',
        productPrice:233,
        description:'Is a healt fruit',
        isOff: false,
        isAvailable: false,
        saldo: 10,
        productImage:require('../images/products/P3.png'),
    },
    {
        id:10,
        idF:1,
        category:'product',
        productName:'Fresa fruit',
        productPrice:222,
        description:'Is a healt fruit',
        isOff: false,
        isAvailable: false,
        saldo: 10,
        productImage:require('../images/products/P4.png'),
    },
    {
        id:11,
        idF:1,
        category:'product',
        productName:'Apple fruit',
        productPrice:300,
        description:'Is a healt fruit',
        isOff: false,
        isAvailable: true,
        saldo: 10,
        productImage:require('../images/products/P5.png'),
    }
]