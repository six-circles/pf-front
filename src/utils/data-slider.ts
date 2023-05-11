import img1 from '../assets/images/slider/imagen01.jpg';
import img2 from '../assets/images/slider/imagen02.jpg';
import img3 from '../assets/images/slider/imagen03.jpg';
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
    title_1: "Slider 1: Mi titulo 1",
    title_2: "Slider 2: Mi titulo 2",
    title_3: "Slider 3: Mi titulo 3",
    description: "Esto es una descripción número 1 de lo que es el slider 1 en esta posición.",
    img: img1,
    imgbg: imgbg1,
    class: 'left'
  },
  {
    title_1: "Slider 2: Mi titulo 1",
    title_2: "Slider 2: Mi titulo 2",
    title_3: "Slider 2: Mi titulo 3",
    description: "Esto es una descripción número 2 de lo que es el slider 2 en esta posición.",
    img: img2,
    imgbg: imgbg2,
    class: 'center'
  },
  {
    title_1: "Slider 3: Mi titulo 1",
    title_2: "Slider 3: Mi titulo 2",
    title_3: "Slider 3: Mi titulo 3",
    description: "Esto es una descripción número 3 de lo que es el slider 3 en esta posición.",
    img: img3,
    imgbg: imgbg2,
    class: 'center'
  },
]

export default heroSliderData;