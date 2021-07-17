import { getByTitle } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import cliff from './download.jpeg';

const title = 'Negativity';
const text = `What optimists call objectivity when they don't like the message`;

const Poster = ({ image, title, text }) => {
  return (
    <div className='body'>
      <div className='image'>
        <img src={image} alt='cliff' />
      </div>
      <div className='title'>{title}</div>
      <div className='text'>{text}</div>
    </div>
  );
};

ReactDOM.render(
  <Poster image={cliff} title={title} text={text} />,
  document.querySelector('#root')
);
