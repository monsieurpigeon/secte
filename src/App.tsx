import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [clap, setClap] = useState(Math.floor(Math.random()* 10000))

  return (
    <div className="App">
      <div>
          <img src="/vite.svg" className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Venez à ma rencontre</h1>
      <div className="card">
        <p>
          Devenons les bâtisseurs d'un monde nouveau.
        </p>
        <button onClick={() => setClap((count) => count + 1)}>
            {clap} {`Clap${clap > 1 ? "s" : ""}`}
        </button>

      </div>
      <p className="read-the-docs">
        Retrouvez ici les dates de mes prochains déplacements.
      </p>
    </div>
  )
}

export default App
