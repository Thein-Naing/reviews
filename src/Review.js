import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {
  const [index, setIndex] = useState(0);
  // console.log(people)
  const {name, job, image, text} = people[index]

  const checkNumber = (n) => { // to arrange for person limit
    if (n > people.length -1) {
      return 0;
    }
    if (n < 0 ) {
      return people.length -1;
  }
  return n;
}

  const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
};

  const randomPerson = () => {
   let randomNumber = Math.floor (Math.random() * people.length);
   if ( randomNumber === index ) {
    randomNumber = index + 1
   }
   setIndex(randomNumber(checkNumber));
  }
  return (
    <article className="review">
      <div className="image-container">
      <img src={image} alt="{name}" className="person-img"></img>
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
        </div>
        <button className='random-btn'
        onClick={randomPerson}>
          surprise me
        </button>
    </article>

  )
};

export default Review;
