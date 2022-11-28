const App = () => {
  const course = 'Half Stack application development'
  const parts = [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
]

  return (
    <div>
      <Header kurssi={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}
const Part = (props) => {
  return(
    <div>
      <p>{props.osa} {props.harjoitus}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part osa={props.parts[0].name} harjoitus={props.parts[0].exercises}/>
      <Part osa={props.parts[1].name} harjoitus={props.parts[1].exercises}/>
      <Part osa={props.parts[2].name} harjoitus={props.parts[2].exercises}/>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

export default App
