const Contacts = ({ name, number, deleteContact }) => {
    return(
        <div>
          {name} {number} <button onClick={deleteContact}>Poista</button>
        </div>
    )
}
export default Contacts