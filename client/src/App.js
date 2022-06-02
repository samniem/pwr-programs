import './App.css';
import React from "react"
import res from 'express/lib/response';

function App() {

  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    fetch("/api").then((res) => res.json()).then((data) => setData(data.message))
  })

  return <div>

  </div>
}

export default App;
