import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '0700 123 123',
      id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFiltered] = useState(persons)

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    const search = persons.filter(person => person.name.includes(event.target.value))
    console.log(search)
    setFiltered(search)
  }

//jos persons.include event.target.value niin setshowall(!showAll)

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }
    if (persons.some((p) =>
    p.name === personObject.name)) {
      alert(`${personObject.name} is already on phonebook`)
      return;
    }
    if (persons.some((p) =>
    p.number === personObject.number)) {
      alert(`${personObject.number} is already on phonebook`)
      return;
    }
      setPersons(persons.concat(personObject))
      setFiltered(persons.concat(personObject))
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
    <div>
      <h2>Phonebook</h2>
      <input onChange={handleFilterChange}/>
      <div>
      </div>
      <form onSubmit={addPerson}>
        <div>
          name:
          <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          number:
          <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {filtered.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
      </ul>
    </div>
  )

}

export default App