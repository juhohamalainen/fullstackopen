import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <div>
      <table style={{fontFamily: "arial, sans-serif", borderCollapse: "collapse", width: "100%"}}>
        <tr>
          <td style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px", width: "50%"}}>{props.text}</td>
          <td style={{border: "1px solid #dddddd", textAlign: "left", padding: "8px", width: "50%"}}>
            {props.good}
            {props.neutral}
            {props.bad}
            {props.total}
            {props.avg}
            {props.pos}
          </td>
        </tr>
      </table>
    </div>
  )
}

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        no feedback given
      </div>
    )
  }
  return(
    <div>
      <StatisticLine text='good' good={props.good} />
      <StatisticLine text='neutral' neutral={props.neutral} />
      <StatisticLine text='bad' bad={props.bad} />
      <StatisticLine text='total' total={props.total} />
      <StatisticLine text='average' avg={props.avg} />
      <StatisticLine text='positive' pos={props.pos} />
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = (good + neutral + bad)
  const avg = (good - bad) / (good + bad + neutral)
  const pos = (good / total * 100 + '%')
  const [allClicks, setAll] = useState([])

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(allClicks.concat('good'))
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat('neutral'))
  }
  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(allClicks.concat('bad'))
  }

  return(
    <div>
      <div>
        <h2>give feedback</h2>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
        <h2>statistics</h2>
        <Statistics allClicks={allClicks} good={good} neutral={neutral} bad={bad} total={total} avg={avg} pos={pos} />
       
      </div>
    </div>
  )
}

export default App