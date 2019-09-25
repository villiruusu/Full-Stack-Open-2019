import React, { useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => (
      <button onClick={onClick}>
      {text}
      </button>
)

const Statistic = (props) => {
  return (
    <>
      <td> {props.text} </td>
      <td> {props.value} </td>
    </>
  )
}

const Statistics = ({ clicks }) => {
  const good = 1 * clicks.good;
  const neutral = 0 * clicks.neutral;
  const bad = -1 * clicks.bad;

  const altogether = good + neutral + bad
  const average = (altogether / clicks.allClicks).toFixed(1);

  const positive = (clicks.good / clicks.allClicks * 100).toFixed(1) + " %";

    if (clicks.allClicks === 0) {
        return (
          <div>
          No feedback given
          </div>
        )
    }

    return (
      <div>
        <table>
          <tbody>
            <tr>
              <Statistic text="Good" value={clicks.good} />
              </tr>
              <tr>
                <Statistic text="Neutral" value={clicks.neutral} />
              </tr>
              <tr>
                <Statistic text="Bad" value={clicks.bad} />
              </tr>
              <tr>
                <Statistic text="All" value={clicks.allClicks} />
              </tr>
              <tr>
                <Statistic text="Average" value={average} />
              </tr>
              <tr>
                <Statistic text="Positive" value={positive}/>
              </tr>
          </tbody>
        </table>
      </div>
    )
}



const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    allClicks: 0,
  })

    const goodClick = () => setClicks({ ...clicks , good: clicks.good + 1, allClicks: clicks.allClicks + 1});
    const neutralClick = () => setClicks({...clicks, neutral: clicks.neutral + 1, allClicks: clicks.allClicks + 1});
    const badClick = () => setClicks({...clicks, bad: clicks.bad +1, allClicks: clicks.allClicks + 1});


  return (
    <div>
    <h1>Give feedback</h1>

    <Button onClick={goodClick} text="good" />
    <Button onClick={neutralClick} text="neutral" />
    <Button onClick={badClick} text="bad" />

    <h2>Statistics</h2>

    <Statistics clicks={clicks} />

    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'));
