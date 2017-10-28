import React from 'react';

const Score = (props) => {

    let stars = () => {
      let result = "";
      for (let i = 0; i < 4; i++) {
        if (props.value > i) {
          result += '\uf005'
        } else {
          result += '\uf006'
        }

      }
      return result;
    };

    return (
      <span className="Score"> {stars()} </span>
    );
  }
;


const CardItems = (props) => {

  return (
    <div>
      {props.items.sort((a, b) => {
        if (a.level > b.level) {
          return -1;
        } else if (a.level < b.level) {
          return 1;
        } else {
          return 0;
        }
      }).map((item, index) =>
        <div key={index} className="Card__item">
          <div className="Card__item--left">
            {item.text}
          </div>
          <div className="Card__item--right">
            <Score value={item.level}/>
          </div>
        </div>
      )}
    </div>
  )
};

export default CardItems;
