import Carousel from "react-bootstrap/Carousel";
import CardMedia from "@mui/material/CardMedia";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      {/* 1 복도 */}
      <Carousel.Item>
        <CardMedia
          style={{
            width: "100%",
          }}
          component="img"
          image="/img/성원언어심리센터_0.jpeg"
          alt="therapist1"
        />


        <Carousel.Caption>
          <h3>복도</h3>
          <h6>성원언어심리센터 위례점</h6>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 2 대기실 */}
      <Carousel.Item>
        <CardMedia
          style={{
            width: "100%",
    
          }}
          component="img"
          image="/img/성원언어심리센터_1.jpeg"
          alt="therapist1"
        />
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        /> */}

        <Carousel.Caption>
          <h3>대기실</h3>
          <h6>성원언어심리센터 위례점</h6>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 3 치료실 */}
      <Carousel.Item>
        <CardMedia
          style={{
            width: "100%",
          }}
          component="img"
          image="/img/성원언어심리센터_2.jpeg"
          alt="therapist1"
        />

        <Carousel.Caption>
          <h3>언어치료실 4</h3>
          <h6>성원언어심리센터 위례점</h6>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 4 */}
      <Carousel.Item>
        <CardMedia
          style={{
            width: "100%",
          }}
          component="img"
          image="/img/성원언어심리센터_3.jpeg"
          alt="therapist1"
        />

        <Carousel.Caption>
          <h3>언어치료실 5</h3>
          <h6>성원언어심리센터 위례점</h6>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 5 */}
     
    </Carousel>
  );
}

export default CarouselFadeExample;
