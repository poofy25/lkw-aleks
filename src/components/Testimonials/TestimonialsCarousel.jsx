import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialsCarousel.css';

const testimonialsData = [
  {
    id: 1,
    src:'',
    name: 'John Doe',
    title:'Client Mulțumit',
    service:'Transport de Marfa',
    quote: 'Cargo transport is best porro quisquam Many desktop publishing packages and webpage editors now use Lorem Ipsum.',
  },
  {
    id: 2,
    src:'',
    name: 'John Doe',
    title:'Client Mulțumit',
    service:'Transport de Marfa',
    quote: 'Cargo transport is best porro quisquam Many desktop publishing packages and webpage editors now use Lorem Ipsum.',
  },
  {
    id: 3,
    src:'',
    name: 'John Doe',
    title:'Client Mulțumit',
    service:'Transport de Marfa',
    quote: 'Cargo transport is best porro quisquam Many desktop publishing packages and webpage editors now use Lorem Ipsum.',
  },
  {
    id: 4,
    src:'',
    name: 'John Doe',
    title:'Client Mulțumit',
    service:'Transport de Marfa',
    quote: 'Cargo transport is best porro quisquam Many desktop publishing packages and webpage editors now use Lorem Ipsum.',
  },
  {
    id: 5,
    src:'',
    name: 'John Doe',
    title:'Client Mulțumit',
    service:'Transport de Marfa',
    quote: 'Cargo transport is best porro quisquam Many desktop publishing packages and webpage editors now use Lorem Ipsum.',
  },
  {
    id: 6,
    src:'',
    name: 'John Doe',
    title:'Client Mulțumit',
    service:'Transport de Marfa',
    quote: 'Cargo transport is best porro quisquam Many desktop publishing packages and webpage editors now use Lorem Ipsum.',
  },
  {
    id: 7,
    src:'',
    name: 'John Doe',
    title:'Client Mulțumit',
    service:'Transport de Marfa',
    quote: 'Cargo transport is best porro quisquam Many desktop publishing packages and webpage editors now use Lorem Ipsum.',
  },
];

const TestimonialsCarousel = ({ carouselRef, handleNext, handlePrev }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 2500,
    pauseOnHover: true
  };

 

  return (
    <div className="testimonials-carousel-container">
      <Slider ref={carouselRef} {...settings}>
        {testimonialsData.map((testimonial) => (
          <div className='testimonialWrapper' key={testimonial.id}>
            <article className='testimonial' >
                <div>
                    <img/>
                    <span>
                        <p>{testimonial.title}</p>
                        <h4>{testimonial.name}</h4>
                    </span>
                </div>
                <span>★★★★★</span>
                <h3>{testimonial.service}</h3>
                <p>
                {testimonial.quote}
                </p>
            </article>
           </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;