import { useState } from 'react'
import { Hire } from "./pages/Hire/index"
import { Service } from "./pages/Service/index"
import { Confirmation } from "./pages/Confirmation/index"
import { EditProfile } from './pages/EditProfile'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Hire />
      <Service></Service>
      <Confirmation></Confirmation>
    */ }
      <EditProfile />
    </>
  )
}

export default App
