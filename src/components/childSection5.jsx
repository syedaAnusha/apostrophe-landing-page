import Card from "./Card";
import Carousel from "react-elastic-carousel";

export default function ChildSection5() {
  return (
    <div>
      <Carousel showArrows={false}>
        <Card />
        <Card />
      </Carousel>
    </div>
  );
}
