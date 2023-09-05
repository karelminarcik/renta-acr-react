import image1 from "./images/army1.jpg"
import image2 from "./images/army2.jpg"
import image3 from "./images/army3.jpg"


const allPictures = [
    {
        id: 1,
        image: image1,
        
    },
    {
        id: 2,
        image: image2,
        
    },
    {
        id: 3,
        image: image3,
        
    },
]

const links = [
    {
        id: 1,
        url: "/",
        text: "Domů",
    },
    {
        id: 2,
        url: "/kontakty",
        text: "Kontakty",
    },
    {
        id: 3,
        url: "/zakon412",
        text: "Zákon o vojácích z povolání",
    },
    {
        id: 4,
        url: "/armybazar",
        text: "Armybazar",
    },
]

const ranks = [
    {
        id: 1,
        text: "Vojín",
        plat: 17300,
    },
    {
        id: 2,
        text: "Svobodník",
        plat: 30310,
    },
    {
        id: 3,
        text: "Desátník",
        plar: 31890
    },
    {
        id: 4,
        text: "Četař",
        plat: 33630
    },{
        id: 5,
        text: "Rotný",
        plat: 38810
    },{
        id: 6,
        text: "Rotmistr",
        plat: 41410
    },{
        id: 7,
        text: "Nadrotmistr",
        plat: 44030
    },{
        id: 8,
        text: "Praporčík",
        plat: 46910
    },{
        id: 9,
        text: "Nadpraporčík",
        plat: 50050
    },{
        id: 10,
        text: "Štábní praporčík",
        plat: 64490
    },{
        id: 11,
        text: "Poručík",
        plat: 44290
    },{
        id: 12,
        text: "Nadporučík",
        plat: 50050
    },{
        id: 13,
        text: "Kapitán",
        plat: 57280
    },{
        id: 14,
        text: "Major",
        plat: 64490
    },{
        id: 15,
        text: "Podplukovník",
        plat: 71710
    },{
        id: 16,
        text: "Plukovník",
        plat: 86150
    },{
        id: 17,
        text: "Brigádní generál",
        plat: 100580
    },{
        id: 18,
        text: "Generálmajor",
        plat: 114990
    },{
        id: 19,
        text: "Generál poručík",
        plat: 129430
    },{
        id: 20,
        text: "Armádní generál",
        plat: 143850
    },
]

const ages = [
    {
        age: 15,
        percentage: 0.05
    },
    {
        age: 16,
        percentage: 0.112
    },
    {
        age: 17,
        percentage: 0.174
    },
    {
        age: 18,
        percentage: 0.236
    },
    {
        age: 19,
        percentage: 0.298
    },
    {
        age: 20,
        percentage: 0.36
    },
]



export default allPictures
export {links, ranks, ages}



