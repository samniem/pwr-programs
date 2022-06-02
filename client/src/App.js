import './App.css';
import React from "react"

function App() {

  //const [data, setData] = React.useState(null)
  const [exercises, setExercises] = React.useState(null)
  /*
  React.useEffect(() => {
    fetch("/api").then((res) => res.json()).then((data) => setData(data.message))
  })*/

  React.useEffect(() => {
    fetch("/api/exercises")
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA", data)
      setExercises(data)
    })
  })

  return <div>
    <p><ul>{!exercises ? "Loading exercises..." : exercises.map(e => <li>{e.name}</li>)}</ul></p>
  </div>
}

export default App;
