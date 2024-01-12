import { useState } from 'react';
import './App.css'
import Test from './components/Test'

// Un componente tiene que ser independiente del resto
// Y tratar que la lógicas sean únicas, entre cada componente
function App() {
  // crea -> se ejecuta -> muere

  //const seCumple = true;

  // Hook
  const [num, setNum] = useState(0);

  return (
    <>
      {/*seCumple && <Test /> */}
      
      <button onClick={() => setNum(num + 1)}>Click</button>

      <Test>
        <>
        {num}  
        </>
      </Test>

      

    </>
  )
}

export default App
