import React from 'react'
import './CardContents.css'

function CardContents(props) {
  return (
    <div className='cardContents__container' style={{ "background-color": props.background }}>
      {console.log(props)}
      <div className='cardcontents__icons'>
        {props.Icon && <props.Icon fontSize="large" />}
      </div>
      {props.imageSrc ? <img src={props.imageSrc} /> : null}
      <span className='cardContainer__name'>{props.name}</span>
      <span className='cardContainer__amount'>{props.amount}</span>
      <span className='cardContainer__quantity'>{props.quantity}</span>
    </div>
  )
}

export default CardContents
