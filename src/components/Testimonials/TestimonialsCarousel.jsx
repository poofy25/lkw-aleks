import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialsCarousel.css';

import img1 from '/src/assets/img/testimonials1.png'
import img2 from '/src/assets/img/testimonials2.png'
import img3 from '/src/assets/img/testimonials3.png'
import img4 from '/src/assets/img/testimonials4.png'


import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const testimonialsData = [
  {
    id: 1,
    src:img1,
    name: 'Radu Popescu',
    title:'Client Mulțumit',
    service:'Transport Mărfuri Generale',
    quote: 'Am apelat la LKW-ALEKS Spedition pentru transportul nostru de mărfuri generale, iar serviciul lor a fost excepțional. Livrări prompte, manipulare atentă a produselor noastre și o echipă profesionistă îi fac partenerul nostru preferat în logistica.',
  },
  {
    id: 2,
    src:img2,
    name: 'Alexei Romanov',
    title:'Client Mulțumit',
    service:'Transport Agabaritic',
    quote: 'LKW-ALEKS Spedition a avut un rol important în gestionarea nevoilor noastre de transport agabaritic. De la încărcarea precisă la livrările la timp, angajamentul lor față de eficiență și fiabilitate îi diferențiază în industria logistică.',
  },
  ,
  {
    id: 4,
    src:img4,
    name: 'Olga Cojocaru',
    title:'Client Mulțumit',
    service:'Servicii Logistică',
    quote: "Parteneriatul cu LKW-ALEKS Spedition pentru servicii logistice cuprinzătoare a optimizat întregul nostru lanț de aprovizionare. Soluțiile lor de la depozitare la distribuție au optimizat operațiunile noastre și au îmbunătățit eficiența generală.",
  },
  {
    id: 3,
    src:img3,
    name: 'Mark Aripov',
    title:'Client Mulțumit',
    service:'Transport Refrigerat',
    quote: 'Menținerea integrității produselor noastre sensibile la temperatură este crucială. Serviciul lor de transport refrigerat a livrat constant promisiunea de a păstra calitatea produselor noastre pe tot parcursul călătoriei.',
  }
];

const TestimonialsCarousel = ({ carouselRef, handleNext, handlePrev , langJson }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    ]
  };


  const testimonialsData = [
    {
      id: 1,
      src:img1,
      name: 'Radu Popescu',
      title:langJson.article['1'].status,
      service:langJson.article['1'].service,
      quote:langJson.article['1'].text,
    },
    {
      id: 2,
      src:img2,
      name: 'Alexei Romanov',
      title:langJson.article['2'].status,
      service:langJson.article['2'].service,
      quote:langJson.article['2'].text,
    },
    ,
    {
      id: 4,
      src:img4,
      name: 'Olga Cojocaru',
      title:langJson.article['3'].status,
      service:langJson.article['3'].service,
      quote:langJson.article['3'].text,
    },
    {
      id: 3,
      src:img3,
      name: 'Mark Aripov',
      title:langJson.article['4'].status,
      service:langJson.article['4'].service,
      quote:langJson.article['4'].text,
    }
  ];

 

  return (
    <div className="testimonials-carousel-container">
      <Slider ref={carouselRef} {...settings}>
        {testimonialsData.map((testimonial) => (
          <div className='testimonialWrapper' key={testimonial.id}>
            <article className='testimonial' >
                <div>
                <LazyLoadImage effect="blur" alt="Testimonial Picture" src={testimonial.src}></LazyLoadImage>

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