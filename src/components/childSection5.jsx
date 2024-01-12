import Card from "./Card";
import "./childSection5.css";
import ThirstieFull from "../assets/images/ThirstieFull.png";
import kimpton from "../assets/images/Kimpton.png";
import Carousel from "react-elastic-carousel";

export default function ChildSection5() {
  return (
    <div className="Carousel-style">
      <Carousel showArrows={false} itemsToShow={1}>
        <Card
          Title="Onboarding New Customers at Record Speeds"
          Description='"Apostrophe Assembly allows us to launch new web storefronts for
            our clients in minutes, with our robust and hyper-compliant API
            technology pre-built. This has improved our customer onboarding
            speed by 10x, as we can now get new brands live faster than ever
            before. Apostrophe has transformed our sales process and our
            customer&apos;s speed to market. "'
          PersonName="Devaraj Southworth"
          Designation="CEO & Co-Founder, Thirstie"
          Link="Read Thirstie's Case Study"
          Image={ThirstieFull}
        />
        <Card
          Title="Dozens of Restaurants, One Dashboard"
          Description="Each Kimpton Hotel is paired with one or more unique restaurants, which has differentiated branding and customer experience. Apostrophe Assembly helps Kimpton manage dozens of restaurant websites with simple in-context page editing."
          PersonName=""
          Designation="Kimpton Hotels & Restaurants"
          Link="Read How Kimpton Uses Assembly"
        />
        <Card
          Title="Onboarding New Customers at Record Speeds"
          Description="Apostrophe Assembly allows us to launch new web storefronts for
            our clients in minutes, with our robust and hyper-compliant API
            technology pre-built. This has improved our customer onboarding
            speed by 10x, as we can now get new brands live faster than ever
            before. Apostrophe has transformed our sales process and our
            customer's speed to market."
          PersonName="Devaraj Southworth"
          Designation="CEO & Co-Founder, Thirstie"
          Link="Read Thirstie's Case Study"
        />
        <Card
          Title="Onboarding New Customers at Record Speeds"
          Description="Apostrophe Assembly allows us to launch new web storefronts for
            our clients in minutes, with our robust and hyper-compliant API
            technology pre-built. This has improved our customer onboarding
            speed by 10x, as we can now get new brands live faster than ever
            before. Apostrophe has transformed our sales process and our
            customer's speed to market."
          PersonName="Devaraj Southworth"
          Designation="CEO & Co-Founder, Thirstie"
          Link="Read Thirstie's Case Study"
        />
      </Carousel>
    </div>
  );
}
