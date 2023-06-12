import React, { useState, useEffect } from 'react';
import './addContact.css';

const AddContact = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleAddContact = () => {
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter a valid name and number');
      return;
    }

    if (editIndex === -1) {
      const newContact = {
        id: Date.now(),
        name,
        number,
      };

      setContacts((prevContacts) => [...prevContacts, newContact]);
    } else {
      setContacts((prevContacts) =>
        prevContacts.map((contact, index) =>
          index === editIndex ? { ...contact, name, number } : contact
        )
      );
      setEditIndex(-1);
    }

    setName('');
    setNumber('');
  };

  const handleEditContact = (index) => {
    const contactToEdit = contacts[index];
    setName(contactToEdit.name);
    setNumber(contactToEdit.number);
    setEditIndex(index);
  };

  const handleDeleteContact = (index) => {
    setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
  };

  return (
    <div className="add-contact-container">
      <h2>Add Contact</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="number">Number:</label>
          <input type="text" id="number" value={number} onChange={handleNumberChange} />
        </div>
        <button className="add-button" onClick={handleAddContact}>
          {editIndex === -1 ? 'Add Contact' : 'Save Contact'}
        </button>
      </form>

      <h3>Contact List</h3>
      <ul>
        {contacts.map((contact, index) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.number}
            <button className="edit-button" onClick={() => handleEditContact(index)}>
              Edit
            </button>
            <button className="delete-button" onClick={() => handleDeleteContact(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddContact;
