import React, {Component} from 'react';
import BirthDate from './BirthDate';

class Contact extends Component {
  render() {
    let result = null;
    const contact = this.props.value;

    switch (contact.type) {
      case 'birth-date':
        result = <BirthDate year={contact.year} month={contact.month} day={contact.day}/>;
        break;
      default:
        result = contact.text;
        break;
    }
    return (
      <span className={"Contacts--item__"+contact.type}>
        {result}
      </span>
    )
  }
}

export default Contact;
