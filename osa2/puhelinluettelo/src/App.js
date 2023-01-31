import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
import contactDB from './services/contactDB'
import axios from 'axios'

const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [initialContacts, setInitialContacts] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    contactDB
    .getAll()
    .then(response => {
      setInitialContacts(response);
    });
  }, []);

  useEffect(() => {
    if (inputValue === '') {
      setContacts(initialContacts)
    } else {
      const search = initialContacts.filter(contact => contact.name.includes(inputValue))
      search.length ? setContacts(search) : setContacts([])
      console.log(initialContacts)
    }
    
  },[inputValue, initialContacts])

  const handleDeleteContact = (name, id) => {
    return () => {
      if (window.confirm(`Are you sure you want to delete ${name} from the phonebook?`)) {
        contactDB
          .deleteContact(id)
          .then(() => {
            setContacts(contacts.filter(n => n.id !== id));
            alert(`${name} removed successfully`);
            setNewName("");
            setNewNumber("");
          })
          .catch(error => {
            setContacts(contacts.filter(n => n.name !== name));
            alert(`Contact ${name} has already been removed from the phonebook`);
          });
        setTimeout(() => {
          
        }, 3000);
      }
    };
  };

  const handleFilterChange = (event) => {
    setInputValue(event.target.value)
  }

  const addContact = (event) => {
    event.preventDefault()
    const contactObject = {
      name: newName,
      number: newNumber,
      id: contacts.length + 1,
    }
    if (contacts.some((p) =>
    p.name === contactObject.name)) {
      alert(`${contactObject.name} is already on phonebook`)
      return;
    }
    if (contacts.some((p) =>
    p.number === contactObject.number)) {
      alert(`${contactObject.number} is already on phonebook`)
      return;
    }
    axios
    .post('http://localhost:3001/contacts', contactObject)
    .then(response => {
      setContacts(contacts.concat(response.data))     
      setNewName('')
      setNewNumber('')
    })
      
  
    
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    event.preventDefault()
    setNewNumber(event.target.value)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <Filter 
      handleFilterChange={handleFilterChange}
      />

      <ContactForm 
      addContact={addContact}
      newName={newName}
      newNumber={newNumber}
      handleNameChange={handleNameChange}
      handleNumberChange={handleNumberChange}
      />
      
      <h2>Numbers</h2>
      {contacts.length ?
      <div>
        {contacts.map((contact) => (
        <Contacts
        key={contact.id}
        name={contact.name}
        number={contact.number}
        deleteContact={handleDeleteContact(contact.name, contact.id)}
        />
        ))}
      </div> : null}
    </>
  )

}

export default App