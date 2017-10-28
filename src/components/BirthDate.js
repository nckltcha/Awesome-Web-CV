import React from 'react';
import {FormattedDate} from 'react-intl';

const BirthDate = (props) => {
  const date = new Date(
    Date.UTC(props.year, props.month, props.day, 0, 0, 0));
  return (
    <FormattedDate
      value={date}
      year={'numeric'}
      month={'long'}
      day={'numeric'}/>
  );
};

export default BirthDate;