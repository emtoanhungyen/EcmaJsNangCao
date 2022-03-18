import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AdminLayout from './pages/layouts/AdminLayout'
import Websitelayout from './pages/layouts/Websitelayout'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // document.title = `Count : ${count}`
    const getProducts = async () => {
      const respone = await fetch('http://localhost:8000/api/products');
      const data = await respone.json();
      console.log(data);
    }
  }, []);


  return (
    <div className="App">
      <div>
        {count} <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product Page</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Page</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Websitelayout />}>
            <Route index element={ <Home />}/>
            <Route path="/product" element={ <h1>Hiển thị Products</h1> }/>
            <Route path="/about" element={ <h1>Hiển thị About</h1> }/>
          </Route>

          <Route path="admin" element={ < AdminLayout />}>

          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
