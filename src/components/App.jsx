import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // if (this.state.name.trim() === '' || this.state.number.trim() === '') {
    //   alert('Please enter both name and number.');
    //   return;
    // }
    const { name, number, contacts } = this.state;

      if (
        contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase()
        )
      ) {
        alert(
          `Contact with name ${name} already exists. Please choose a different name.`
        );
        return;
      }


    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
      name: '',
      number: '',
    }));
  };

  render() {
    const { name, contacts, number, filter } = this.state;

const filteredContacts = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>

        {/* <ContactList contacts={contacts} /> */}
      </div>
    );
  }
}

// const ContactList = ({ contacts }) => (
//   <ul>
//     {contacts.map((contact) => (
//       <li key={contact.id}>{contact.name}: {contact.number}</li>
//     ))}
//   </ul>
// );
