import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./index.css";
import { useNavigate } from "react-router-dom";

const BasicCarousel = () => {
    const navigate = useNavigate();
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
                <div className="content otr">
                    <h1>Completed your Government Job Application Form within Two Minutes</h1>
                    <p>
                        To achieve your goals, set specific targets, create a plane with actionable steps,and stay
                        commited through perseverance and adaptability. Consistence effort and a positive mindset will
                        propel you towards success.
                    </p>
                    <button onClick={() => navigate("/auth")}>Get Started</button>
                </div>
                <img src="/landingPage/carousel_img_1.svg" alt="OTR" />
            </div>
            <div>
                <div className="content refer-earn">
                    <span>Refer and Earn</span>
                    <h1>Refer to Your Friends and get one Government Exam Registration for Free</h1>
                    <p>
                        By Sharing Our Website to Your family to become our family guys to bring the dreams comes true
                        with easy benefits by our services and get the first application for free.
                    </p>
                    <button onClick={() => navigate("/auth")}>Get Started</button>
                </div>
                <img src="/landingPage/carousel_img_2.svg" alt="Refer and Earn" />
            </div>
            <div>
                <div className="content admit-card">
                    <span>Admit Card Delivery</span>
                    <h1>Get Your ADMIT CARD delivered within a DAY</h1>
                    <p>
                        To achieve your goals, set specific targets, create a plan with actionable steps, and stay
                        committed through perseverance and adaptability. Consistent effort and a positive mindset will
                        propel you towards success.
                    </p>
                    <button onClick={() => navigate("/auth")}>Get Started</button>
                </div>
                <img src="/landingPage/carousel_img_3.svg" alt="admit card delivery" />
            </div>
        </Carousel>
    );
};

export default BasicCarousel;
