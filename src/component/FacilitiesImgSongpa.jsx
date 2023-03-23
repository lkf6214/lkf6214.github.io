import Carousel from "react-bootstrap/Carousel";
import CardMedia from "@mui/material/CardMedia";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      {/* 1 대기실 */}
      <Carousel.Item>
        <CardMedia
          style={{
            width: "100%",
          }}
          component="img"
          image="/img/성원언어임상연구소_0.jpeg"
          alt="therapist1"
        />
        {/* <img
          className="d-block w-100"
          // src="holder.js/800x400?text=First slide&bg=373940"
          src={`${process.env.PUBLIC_URL}/public_img/성원언어임상연구소_0.jpeg`}
          // src="img/성원언어임상연구소_0.jpeg"
          // width={"45%"}
          alt="대기실"
        /> */}

        <Carousel.Caption>
          <h3>대기실</h3>
          <p>성원언어임상연구소 송파점</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 2 복도 */}
      <Carousel.Item>
        <CardMedia
          style={{
            width: "100%",
          }}
          component="img"
          image="/img/성원언어임상연구소_1.jpeg"
          alt="therapist1"
        />
        {/* <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        /> */}

        <Carousel.Caption>
          <h3>대기실</h3>
          <p>성원언어임상연구소 송파점</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 3 복도 */}
      <Carousel.Item>
        <CardMedia
          style={{
            width: "100%",
          }}
          component="img"
          image="/img/성원언어임상연구소_2.jpeg"
          alt="therapist1"
        />

        <Carousel.Caption>
          <h3>치료실 복도</h3>
          <p>성원언어임상연구소 송파점</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 4 */}
      <Carousel.Item>
        <CardMedia
          style={{
            width: "100%",
          }}
          component="img"
          image="/img/성원언어임상연구소_3.jpeg"
          alt="therapist1"
        />

        <Carousel.Caption>
          <h3>상담실</h3>
          <p>성원언어임상연구소 송파점</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 5 */}
      <Carousel.Item>
        <CardMedia
          style={{
            width: "100%",
          }}
          component="img"
          image="/img/성원언어임상연구소_4.jpeg"
          alt="therapist1"
        />

        <Carousel.Caption>
          <h3>언어치료실 1</h3>
          <p>성원언어임상연구소 송파점</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
