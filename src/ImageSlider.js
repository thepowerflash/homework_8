import React, { Component } from "react";
import './ImageSlider.css';

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'http://wallpapers-image.ru/1920x1080/city/wallpapers/wallpapers-city-14.jpg',
        'https://img3.akspic.ru/crops/3/7/0/1/7/171073/171073-nyujork-gorod-oblako-zdanie-neboskreb-1920x1080.jpg', 
        'https://img2.akspic.ru/crops/6/8/1/8/6/168186/168186-manhetten-bronksvill-voda-zdanie-neboskreb-1920x1080.jpg',
        'https://99px.ru/sstorage/53/2018/09/tmb_238040_139780.jpg',
        'https://img3.akspic.ru/previews/7/2/2/6/86227/86227-liniya_gorizonta-dnevnoe_vremya-gorod-nyu_jork-neboskreb-550x310.jpg',
        'https://img2.akspic.ru/previews/3/1/3/8/4/148313/148313-nizhnij_manhetten-arhitektura-zdanie-metropoliya-orientir-550x310.jpg',
        'https://img2.akspic.ru/previews/3/3/6/2/6/162633/162633-nyu_jork-ssha-nyujork-neboskreb-dnevnoe_vremya-550x310.jpg',
      ],
      currentIndex: 0,
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % prevState.images.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + prevState.images.length) %
        prevState.images.length,
    }));
  };

  render() {
    const { images, currentIndex } = this.state;

    return (
        <div className="image-slider">
      <div className="slider">
      <button onClick={this.prevSlide}>Back</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        
        <button onClick={this.nextSlide}>Next</button>
      </div>
      </div>
    );
  }
}

export default ImageSlider;