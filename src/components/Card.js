import React from 'react';
import CardLogo from './CardLogo';
import CardItems from './CardItems';

const Card = (props) => {

  return (
    <div className="Card">
      <CardLogo title={props.title} type={props.type}/>
      <CardItems items={props.items}/>
    </div>
  )
};

export default Card;