import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export default function ImageGallery() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        setMeals(response.data.meals);
      } catch (error) {
        console.log('Error fetching meals:', error);
      }
    };

    fetchMeals();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
    pauseOnHover: true, 
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="GalleryContainer">
      <Slider {...settings}>
        {meals.map(meal => (
          <div key={meal.idMeal}>
            <Link to={`/meals/${meal.idMeal}`}>
              <img className='galleyimg' src={meal.strMealThumb} alt={meal.strMeal} />
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}
