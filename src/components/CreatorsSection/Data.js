import BoonImg from '../../images/Boon.jpg'
import NonImg from '../../images/Non.jpeg'
import BirdImg from '../../images/Bird.jpg'

export const BoonInfo= {
    id:'Boon',
    topLine: 'Boondirek Kanjanapongporn',
    headLine: 'Nickname: Boon',
    description: 'Role: Project Lead, Frontend, and Websocket Creator',
    description1: 'Year: 2 (63011117)',
    description2: 'KMITL x Software Engineer',
    newline: true,
    buttonLabel: 'Resume',
    to:{pathname:'https://drive.google.com/file/d/1aPkH7nHDqHc1hQXBhg16hgFt52Vz2DXe/view?usp=sharing'},
    target: "_blank",
    imgStart: false,
    img: BoonImg,
    alt: "Boondirek Kanjanapongporn",
}

export const NonInfo= {
    id:'Non',
    topLine: 'Krittawat Sutthi',
    headLine: 'Nickname: Non',
    description: 'Role: Login/Signup, Send email, and Delete user creator',
    description1: 'Year: 2 (63011178)',
    description2: 'KMITL x Software Engineer',
    newline: true,
    buttonLabel: 'Achievements',
    to:'/achievements',
    target: "",
    imgStart: true,
    img: NonImg,
    alt: "",
}

export const BirdInfo= {
    id:'Bird',
    topLine: 'Somboon Siriwit',
    headLine: 'Nickname: Bird',
    description: 'Role: Password Encryptor, Database connector, and Update user creator',
    description1: 'Year: 2 (63011314)',
    description2: 'KMITL x Software Engineer',
    newline: true,
    buttonLabel: 'Achievements',
    to:'/achievements',
    target: "",
    imgStart: false,
    img: BirdImg,
    alt: "",
}