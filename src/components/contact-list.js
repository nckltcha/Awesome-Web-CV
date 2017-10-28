import React, {Component} from 'react';
import Contact from './contact';

class ContactList extends Component {
  renderContact(contact, index) {
    return (
      <li key={index} className={"Contacts--item"}>
        <Contact value={contact}/>
      </li>
    );
  }

  render() {
    const contacts = this.props.contacts || [];

    return (
      <ul className="Contacts">
        {contacts.map(this.renderContact)}
      </ul>
    );
  }
}

export default ContactList;
