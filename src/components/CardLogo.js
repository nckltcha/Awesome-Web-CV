import React from 'react';

const CardLogo = (props) => {
  return (
    <div className={"Card__logo Card__logo--" + props.type}>
      {props.title}
    </div>
  )
};

export default CardLogo;
