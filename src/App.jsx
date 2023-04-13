import { useState } from 'react'
import { Userview, CakeView, IcecreamView } from './features/'
import './App.css'

function App() {
  const [name, setName] = useState("")



  return (
    <div className="App">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <Userview />
      <CakeView />
      <IcecreamView />
    </div>
  )
}

export default App
