const Hello = (props) => {
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const nimi = 'Pekka'
  const ika = 10

  return(
    <div>
      <p>Greetings</p>
      <Hello name="Juho" age={ika + 19} />
      <Hello name={nimi} age={ika} />
    </div>
  )
}

export default App