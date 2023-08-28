import React, {Component} from "react";
import Slider from "react-slick";
import Movie from "../Movie";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class MovieSlider extends Component{
    render() {
        const {movies} = this.props

        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3
        };
        return (
          <div className="carrousel-item"> 
            <Slider {...settings}>
                {movies.map( (movie) => (
                    <Movie key={movie.id} movieId={movie.id} posterPath={movie.poster_path} nombreClase='imagen-recomendaciones'/>
                ))}
            </Slider>
          </div>
        );
      }
}