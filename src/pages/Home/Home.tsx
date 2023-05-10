import Slider from "../../components/Slider/Slider";
import heroSliderData from '../../utils/data-slider';

function Home() {
  return (
    <div>
      <Slider data={heroSliderData} />
    </div>
  );
}

export default Home;
