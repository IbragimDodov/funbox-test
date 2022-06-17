import React from 'react';
import Card from './Card';
// import data from '../../public/assets/data.json'

function Cards() {
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    fetch('./assets/data.json')
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <main className="cards">
      <div className="cards__wrapper">
        {cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </main>
  );
}

export default Cards;
