import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Contacts from './components/Contacts'
import ContactForm from './components/ContactForm'
import axios from 'axios'

const App = () => {
  const [contacts, setContacts] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [initialContacts, setInitialContacts] = useState([])
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/contacts')
    .then(response => {
      setInitialContacts(response.data)
    })
  },[])

  useEffect(() => {
    if (inputValue === '') {
      setContacts(initialContacts)
    } else {
      const search = initialContacts.filter(contact => contact.name.includes(inputValue))
      search.length ? setContacts(search) : setContacts([])
      console.log(initialContacts)
    }
    
  },[inputValue, initialContacts])

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
      setContacts(contacts.concat(contactObject))
      setNewName('')
      setNewNumber('')
    
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
        />
        ))}
      </div> : null}
    </>
  )

}

export default App