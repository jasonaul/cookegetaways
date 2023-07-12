import React, { useState } from "react";
import './Gallery.css'
import Lightbox from "react-18-image-lightbox";
// import "react-18-image-lightbox/style.csss";
import 'react-18-image-lightbox/style.css';

import one from '../images/gallery/one.jpg';
import two from '../images/gallery/two.jpg';
import three from '../images/gallery/three.jpg';
import four from '../images/gallery/four.jpg';
import five from '../images/gallery/five.jpg';
import six from '../images/gallery/six.jpg';
import seven from '../images/gallery/seven.jpg';
import eight from '../images/gallery/eight.jpg';
import nine from '../images/gallery/nine.jpg';
import ten from '../images/gallery/ten.jpg';
import eleven from '../images/gallery/eleven.jpg';
import twelve from '../images/gallery/twelve.jpg';
import thirteen from '../images/gallery/thirteen.jpg';
import fourteen from '../images/gallery/fourteen.jpg';
import fifteen from '../images/gallery/fifteen.jpg';
import sixteen from '../images/gallery/sixteen.jpg';
import seventeen from '../images/gallery/seventeen.jpg';
import eighteen from '../images/gallery/eighteen.jpg';
import nineteen from '../images/gallery/nineteen.jpg';
import twenty from '../images/gallery/twenty.jpg';
import twentyone from '../images/gallery/twentyone.jpg';
import twentytwo from '../images/gallery/twentytwo.jpg';
import twentythree from '../images/gallery/twentythree.jpg';
import twentyfour from '../images/gallery/twentyfour.jpg';

import twentysix from '../images/gallery/twentysix.jpg';





const images = [
  one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour, twentysix
];

function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="Gallery">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          onClick={() => { setIsOpen(true); setPhotoIndex(index); }}
          alt=""
          className="ImageThumbnail"
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </div></>
  );
}

export default Gallery;
