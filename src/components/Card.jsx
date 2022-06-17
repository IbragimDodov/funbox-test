import React from 'react';

function Card({ pretitle, title, subtitle, descr, image, weight, link, selectedDescr, available }) {
  const [selected, setSelected] = React.useState(false);
  const [selectedHover, setSelectedHover] = React.useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div className={`card ${available ? '' : 'card--unavailable'}`}>
      <div
        className={`card__wrapper ${selected ? 'card__wrapper--selected' : 'card__wrapper--hover'}`}
        onClick={handleSelect}>
        <div className="card__content">
          <div className="card__pretitle">{pretitle}</div>
          <h2 className="card__header">
            <span className="card__title"> {title} </span>
            <span className="card__subtitle"> {subtitle} </span>
          </h2>
          <p className="card__descr">
            {descr.map((item, index) => {
              return <span key={index}> {item} </span>;
            })}
          </p>
        </div>

        <img className="card__img" src={image} alt="cat" />

        <div className={`card__label ${selected ? '' : 'card__label--hover'}`}>
          {weight}
          <span>кг</span>
        </div>
      </div>

      <div className="card__buy">
        {available ? (
          selected ? (
            selectedDescr
          ) : (
            <span>
              Чего сидишь? Порадуй котэ,{' '}
              <a onClick={handleSelect} href={link}>
                купи.
              </a>
            </span>
          )
        ) : (
          <span>Печалька, {subtitle} закончился.</span>
        )}
      </div>
    </div>
  );
}

export default Card;
