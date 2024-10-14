import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Projects() {
  return (
    <div className="page-container">
      <div className="page-title">projects.&nbsp;</div>
      <div className="page-content">
        <div className="page-child">
          <Carousel>
            <div className="box">
              <div className="bg"></div>
              <div className="details">
                <h1>FinConnect</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac
                  mattis orci pellentesque eget.
                </p>
              </div>
              <div className="illustration">
                <div className="inner"></div>
              </div>
            </div>
            <div className="box">
              <div className="bg"></div>
              <div className="details">
                <h1>AInterview</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac
                  mattis orci pellentesque eget.
                </p>
                <button>Check Now</button>
              </div>

              <div className="illustration">
                <div className="inner"></div>
              </div>
            </div>
            <div className="box">
              <div className="bg"></div>
              <div className="details">
                <h1>Songdle</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac
                  mattis orci pellentesque eget.
                </p>
                <button>Check Now</button>
              </div>

              <div className="illustration">
                <div className="inner"></div>
              </div>
            </div>
            <div className="box">
              <div className="bg"></div>
              <div className="details">
                <h1>Introvert in IKEA</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lacinia dui lectus. Donec scelerisque ipsum diam, ac
                  mattis orci pellentesque eget.
                </p>
                <button>Check Now</button>
              </div>

              <div className="illustration">
                <div className="inner"></div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
