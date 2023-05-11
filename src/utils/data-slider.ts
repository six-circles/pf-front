import img1 from '../assets/images/slider/prod01.png';
import img2 from '../assets/images/slider/prod01.png';
import img3 from '../assets/images/slider/prod01.png';
import imgbg1 from '../assets/images/slider/bg_slide_1.png'
import imgbg2 from '../assets/images/slider/bg_slide_1.png'

interface Slide {
  title_1: String,
  title_2: String,
  title_3: String,
  description: String,
  img: String,
  imgbg: String,
  class: String
}

const heroSliderData: Slide[] = [
  {
    title_1: "Playstation 5",
    title_2: "Slider 2: Mi titulo 2",
    title_3: "Slider 3: Mi titulo 3",
    description: "S1: Juega tus juegos favoritos con una resolucion 4k a 60 FPS",
    img: img1,
    imgbg: imgbg1,
    class: 'left'
  },
  {
    title_1: "Playstation 5",
    title_2: "Slider 2: Mi titulo 2",
    title_3: "Slider 2: Mi titulo 3",
    description: "S2: Juega tus juegos favoritos con una resolucion 4k a 60 FPS",
    img: img2,
    imgbg: imgbg2,
    class: 'center'
  },
  {
    title_1: "Playstation 5",
    title_2: "Slider 3: Mi titulo 2",
    title_3: "Slider 3: Mi titulo 3",
    description: "S3: Juega tus juegos favoritos con una resolucion 4k a 60 FPS",
    img: img3,
    imgbg: imgbg2,
    class: 'center'
  },
]

export default heroSliderData;