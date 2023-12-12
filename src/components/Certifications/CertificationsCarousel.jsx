import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './certificationsCarousel.css';

import certificate1 from '/src/assets/img/certifications/1 - Certificat inregistrare.png'
import certificate2 from '/src/assets/img/certifications/2 - Licenta 2.png'
import certificate3 from '/src/assets/img/certifications/3 - Licenta 1.png'
import certificate4 from '/src/assets/img/certifications/4 - 2017 - 2.png'
import certificate5 from '/src/assets/img/certifications/5 - 2017.png'
import certificate6 from '/src/assets/img/certifications/6 - 2014.png'
import certificate7 from '/src/assets/img/certifications/7 - Certificat Camera de Comert.png'
import certificate8 from '/src/assets/img/certifications/8 - 2013.png'
import certificate9 from '/src/assets/img/certifications/9 - 2012.png'
import certificate10 from '/src/assets/img/certifications/10 - 2008.png'
import certificate11 from '/src/assets/img/certifications/11 - 2007.png'
import Medal1 from '/src/assets/img/certifications/Medalie AITA.png'
import Medal2 from '/src/assets/img/certifications/Medalie IRU.png'



const certificationsData = [
  {
    id: 1,
    src:certificate1,
  },
  {
    id: 2,
    src:certificate2,
  },
  {
    id: 3,
    src:certificate3,
  },
  {
    id: 4,
    src:certificate4,
  },
  {
    id: 5,
    src:certificate5,
  },
  {
    id: 6,
    src:certificate6,
  },
  {
    id: 7,
    src:certificate7,
  },
  {
    id: 8,
    src:certificate8,
  },
  {
    id: 9,
    src:certificate9,
  },{
    id: 10,
    src:certificate10,
  },
  {
    id: 11,
    src:certificate11,
  },
  {
    id: 12,
    src:Medal1,
  },
  {
    id: 13,
    src:Medal2,
  },

];

const CertificationsCarousel = ({ carouselRef, handleNext, handlePrev }) => {
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
    <div className="certifications-carousel-container">
      <Slider ref={carouselRef} {...settings}>
        {certificationsData.map((certification) => (
          <div className='certificationWrapper' key={certification.id}>
            <article className='certification' >
                <img src={certification.src}/>
            </article>
           </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificationsCarousel;