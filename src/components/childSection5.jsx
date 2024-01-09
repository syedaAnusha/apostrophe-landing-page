import Card from "./Card";
import "./childSection5.css";
import Carousel from "react-elastic-carousel";

export default function ChildSection5() {
  return (
    <div className="Carousel-style">
      <Carousel showArrows={false} itemsToShow={1}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  );
}
