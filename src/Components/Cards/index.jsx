import React from 'react'
import { WrapperCards } from './cards.styles'
import '../Cards/card.css';

const Cards = () => {
  return (
    <WrapperCards>
    <div className='cards_container'>
        <div className="card card_left">
        <button>New Recipe</button>
        </div>

        <div className="card card_right">
          <button>Add items</button>
          </div>
    </div>
    </WrapperCards>

  )
}

export default Cards