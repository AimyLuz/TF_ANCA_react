export { db } from './services/firebase/firebaseConfig'

/*const products = [
    {
        id: '1',
        name: 'GUITARRA ACÚSTICA CORT STANDARD AF510',
        price: 162112,
        category: 'guitarras_acusticas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_839258-MLA43784419538_102020-O.webp',
        carruselDos: 'https://www.heavenimagenes.com/heavencommerce/43ff3c3d-fe3a-4118-ad1c-e1be4cd5df9b/images/v2/CORT/17164_medium.jpg',
        carruselTres: 'https://http2.mlstatic.com/D_NQ_NP_727358-MLA43784374579_102020-O.webp',
        stock: 10,
        description: 'GUITARRA ACÚSTICA CORT STANDARD AF510 BLACK SATIN MERBAU'
    },
    {
        id: '2',
        name: 'GUITARRA ACUSTICA FENDER CD 60S',
        price: 193000,
        category: 'guitarras_acusticas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_952968-MLU70065711541_062023-O.webp',
        carruselDos:'https://http2.mlstatic.com/D_NQ_NP_935067-MLU70065711543_062023-O.webp',
        carruselTres: 'https://http2.mlstatic.com/D_NQ_NP_862450-MLU70065711545_062023-O.webp',
        stock: 10,
        description: 'GUITARRA ACUSTICA FENDER CD 60S ALL MAHOGANY DREADNOUGHT CUO'
    },
    {
        id: '3',
        name: 'GUITARRA ELECTROACÚSTICA CORT STANDARD AF510E',
        price: 215000,
        category: 'guitarras_acusticas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_604519-MLA42168032048_062020-O.webp',
        carruselDos:'https://http2.mlstatic.com/D_NQ_NP_746978-MLA42168032108_062020-O.webp',
        carruselTres: 'https://www.cortguitars.com/_DATA/item/1585617913/thumb-AF510ENEWDETAIL1_420x420.jpg',
        stock: 10,
        description: 'GUITARRA ELECTROACÚSTICA CORT STANDARD AF510E OPEN PORE'
    },
    
    {
        id: '4',
        name: 'GUITARRA ELÉCTRICA IBANEZ RG GIO GRX40',
        price: 246000,
        category: 'guitarras_electricas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_631183-MLA46348581682_062021-O.webp',
        carruselDos:'https://http2.mlstatic.com/D_NQ_NP_858168-MLA46348581605_062021-O.webp',
        carruselTres: 'https://http2.mlstatic.com/D_NQ_NP_833175-MLA46348361995_062021-O.webp',
        stock: 10,
        description: 'GUITARRA ELÉCTRICA IBANEZ RG GIO GRX40 DE ÁLAMO METALLIC LIGHT GREEN CON DIAPASÓN DE JATOBA'
    },
    {
        id: '5',
        name: 'EPIPHONE ORIGINAL COLLECTION EXPLORER DESIGNER',
        price: 937875,
        category: 'guitarras_electricas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_997723-MLA48678524788_122021-O.webp',
        carruselDos:'https://http2.mlstatic.com/D_NQ_NP_762880-MLA48678624108_122021-O.webp',
        carruselTres: 'https://http2.mlstatic.com/D_NQ_NP_912763-MLA48678553630_122021-O.webp',
        stock: 10,
        description: 'EPIPHONE ORIGINAL COLLECTION EXPLORER DESIGNER - DIESTRO - EBONY - CAOBA - LAUREL INDIO - BRILLANTE'
    },
    {
        id: '6',
        name: 'MAPEX PRODIGY 5 CUERPOS',
        price: 486940,
        category: 'baterias_acusticas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_789233-MLA71474826422_092023-O.webp',
        carruselDos:'https://http2.mlstatic.com/D_NQ_NP_757041-MLA54773617691_032023-O.webp',
        carruselTres: 'https://http2.mlstatic.com/D_NQ_NP_933375-MLA32721144628_102019-O.webp',
        stock: 10,
        description: 'BATERIA ACUSTICA MAPEX PRODIGY 5 CUERPOS FIERROS BANQUETA'
    },
    {
        id: '7',
        name: 'BATERIA ACUSTICA LEGEND SENIOR 6 CUERPOS CON FIERROS PRM',
        price: 500815,
        category: 'baterias_acusticas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_790155-MLA54773617769_032023-O.webp',
        carruselDos:'https://http2.mlstatic.com/D_NQ_NP_757041-MLA54773617691_032023-O.webp',
        carruselTres: 'https://http2.mlstatic.com/D_NQ_NP_933375-MLA32721144628_102019-O.webp',
        stock: 10,
        description: 'Bateria Acustica Legend Senior 6 Cuerpos Con Fierros PRM'
    },
    {
        id: '8',
        name: 'CARLSBRO BATERIA ELECTRONICA CSD130 MESH',
        price: 464000,
        category: 'baterias_electronicas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_922254-MLA49973745120_052022-O.webp',
        carruselDos:'https://http2.mlstatic.com/D_NQ_NP_966589-MLA49973745118_052022-O.webp',
        carruselTres: 'https://http2.mlstatic.com/D_NQ_NP_961601-MLA49973745119_052022-O.webp',
        stock: 10,
        description: 'Carlsbro Bateria Electronica Csd130 Mesh + Accesorios'
    },

    {
        id: '9',
        name: 'TECLADO CASIO CT-S500 61',
        price: 447051,
        category: 'teclados',
        img: 'https://http2.mlstatic.com/D_NQ_NP_732504-MLU70427566265_072023-O.webp',
        carruselDos:'https://http2.mlstatic.com/D_NQ_NP_734531-MLU70403057138_072023-O.webp',
        carruselTres: 'https://http2.mlstatic.com/D_NQ_NP_985012-MLU70403057140_072023-O.webp',
        stock: 10,
        description: 'TECLADO CASIO CT-S500 61 NOTAS BLUETOOTH COLOR NEGRO'
    },
    {
        id: '10',
        name: 'PIANO ELECTRICO DIGITAL ROLAND F701CB',
        price: 199800,
        category: 'pianos',
        img: 'https://http2.mlstatic.com/D_NQ_NP_836289-MLA54648235154_032023-O.webp',
        carruselDos:'https://http2.mlstatic.com/D_NQ_NP_727083-MLA54648235162_032023-O.webp',
        carruselTres: 'https://http2.mlstatic.com/D_NQ_NP_695625-MLA54648235168_032023-O.webp',
        stock: 10,
        description: 'PIANO ELECTRICO DIGITAL ROLAND F701CB CON MUEBLE PRM'
    },
    {
        id: '11',
        name: 'SAXO TENOR OCEAN OTS190',
        price: 500000,
        category: 'saxofones',
        img: 'https://http2.mlstatic.com/D_NQ_NP_861639-MLA44972441016_022021-O.webp',
        carruselDos:'https://http2.mlstatic.com/D_NQ_NP_902287-MLA44972441013_022021-O.webp',
        carruselTres: 'https://solomusica.com.ar/sm2020/8611-large_default/saxo-tenor-ocean-ots190.jpg',
        stock: 10,
        description: 'SAXO TENOR OCEAN OTS190'
    },
    {
        id: '12',
        name: 'KNIGHT JBTR-700L TROMPETA',
        price: 185000,
        category: 'trompetas',
        img: 'https://www.heavenimagenes.com/heavencommerce/0c3d234c-03b5-48ac-85a1-10e80752be67/images/v2/KNIGHT/1704281041514552_01_medium.jpg',
        carruselDos:'https://www.heavenimagenes.com/heavencommerce/0c3d234c-03b5-48ac-85a1-10e80752be67/images/v2/KNIGHT/1704281041514552_02_medium.jpg',
        carruselTres: 'https://www.marrodan.com.ar/wp-content/uploads/2020/09/JBTR-700-L..jpg',
        stock: 10,
        description: 'Trompeta, C , C/Estuche Foam'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => { 
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            const product = products.find(prod => prod.id === productId);
            if (product) {
                resolve(product);
            } else {
                reject (new Error ('Producto no encontrado'))
            }
            
        }, 500)
    })
};

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === productCategory))
        }, 500)
    })
};*/