import React from 'react'

function Card() {
  return (
    <div className="card__wrapper">
      <div className="card">
        <div className="descr">
          <span className='main__prev'>Сказочное заморское яство</span>
          <h1 className='main__title'>
            Нямушка
          </h1>
          <h2 className='main__subtitle'>с фуа-гра</h2>
          <span className='main__prev'>
            10 порций <br/>
            мышь в подарок
          </span>
        </div>
        {/* <img className='card__img' src='../assets/img/Object.png' alt="cat" /> */}
        <div className='card__label'>
          0,5
          <span>кг</span>
        </div>
      </div>

      <span className='card-buy'>
        Чего сидишь? Порадуй котэ, <a href="#">купи.</a> 
      </span>
    </div>
  )
}

export default Card