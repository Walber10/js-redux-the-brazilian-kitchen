import React from 'react'
import { WrapperCards } from './cards.styles'
import './card.css';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <WrapperCards>
    <div className='cards_container'>
        <div className="card card_left">
      <Link to={'recipe'}>
      <button>New Recipe</button>
      </Link>
        </div>
        <div className="card card_right">
          <button>Add items</button>
          </div>
    </div>
    </WrapperCards>

  )
}

export default Cards