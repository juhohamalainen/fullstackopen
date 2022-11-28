const Course = ({ course }) => {
    return (
      <div>
        <Header header={course.name} />
        <Content parts={course.parts} />
      </div>
    )
}
  
const Header = ({ header }) => {
    return (
        <h1>{header}</h1>
    )
}

const Content = ({ parts }) => {
const total = parts.reduce((s, p) => {
    return s + p.exercises
}, 0)
return (
    <div>
    <ul>
        {parts.map(part =>
        <li key={part.id}>
            <Part name={part.name} exercises={part.exercises} />
        </li>
        )}
    </ul>
    <p>total of {total} exercises</p>
    </div>

)
}

const Part = ({ id, name, exercises }) => {
return (
    <div>
    <p>{id} {name} {exercises} </p>
    </div>
)
}

export default Course