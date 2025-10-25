import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import carousel1 from '../../assets/carousel1.png';
import carousel2 from '../../assets/carousel2.png'; 
import carousel3 from '../../assets/carousel3.png'; 

const slides = [
  { src: carousel1,},
  { src: carousel2,},
  { src: carousel3,}
];

export default function CarouselHome() {
  return (
    <Carousel>
      {slides.map((s, i) => (
        <Carousel.Item key={i}>
          <div
            style={{
              width: "100%",
              height: "400px",
              backgroundColor: "#f9cfe0", 
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              overflow: "hidden"
            }}
          >
            <img
              src={s.src}
              alt={s.title}
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                objectFit: "contain",
                display: "block"
              }}
            />
          </div>

          <Carousel.Caption>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
