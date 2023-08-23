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
    },
    {
        id: 2,
        text: "Svobodník",
    },
    {
        id: 3,
        text: "Desátník",
    },
    {
        id: 4,
        text: "Četař",
    },
]



export default allPictures
export {links, ranks}



