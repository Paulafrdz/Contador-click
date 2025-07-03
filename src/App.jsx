import { useState } from 'react'
import './App.css'
import CardContador from './components/CardContador/CardContador'


function App() {
  const [count, setCount] = useState(0)

 const handleIncrement = () => {
  setCount(count + 1);
 }

  return (
    <>
      <CardContador onClickSumar={handleIncrement} />
      <p>Total de clics: {count}{ (count >= 10)&& (<span>🚀</span>)}</p>

    </>
  )
}

export default App
