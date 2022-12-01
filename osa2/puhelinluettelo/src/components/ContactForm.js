const ContactForm = ({ addContact, newName, newNumber, handleNameChange, handleNumberChange }) => {
  return (
    <div>
      <form onSubmit={addContact}>
        <div>
          add name:
          <input 
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>
          add number:
          <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}
export default ContactForm