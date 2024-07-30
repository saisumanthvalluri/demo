import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./index.css";

const BasicCarousel = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            stopOnHover={true}
            showIndicators={true}
            showArrows={false}
            dynamicHeight={true}
            className="carousel">
            <div>
                <span>Hello</span>
                <img src="/landingPage/carousel_img_1.svg" alt="Dummy 1" />
            </div>
            <div>
                <img src="/landingPage/carousel_img_2.svg" alt="Dummy 1" />
            </div>
            <div>
                <img src="/landingPage/carousel_img_3.svg" alt="Dummy 1" />
            </div>
        </Carousel>
    );
};

export default BasicCarousel;

// Don't forget to include the css in your page style={{ width: "100%", height: "88vh" }}

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
