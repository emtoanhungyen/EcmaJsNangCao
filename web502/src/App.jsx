import { useState } from 'react'
import ShowInfo from './component/showInfo';

function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(false);
  const [products, setProducts] = useState([
    {id: 1, name: "San pham A"},
    {id: 2, name: "San pham B"},
    {id: 3, name: "San pham C"},
  ])
  return (
    <div className="App">
      Count: {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />
      <button onClick={() => setStatus(!status)}>On</button>
      <hr />
      {status ? products.map((item, index) => <div key={index}>{item.name}</div>) : ""}
      <hr />
      <ShowInfo name="Toan" />
      <ShowInfo name="Hieu" />
      <ShowInfo name="Pho" />
    </div>
  )
}

export default App
