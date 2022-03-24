import { useEffect, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import { add, list, update } from './api/products'
import Home from './pages/Home'
import AdminLayout from './pages/layouts/AdminLayout'
import Websitelayout from './pages/layouts/Websitelayout'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import ProductList from './pages/ProductList'
import { IProduct } from './types/products'
function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    const getProducts = async () => {
        const { data } = await list();
        setProducts(data);
    };
    getProducts();
  }, [])

  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  };
  const onHandleUpdate = async (product: IProduct) => {
    const { data } = await update(product);
    setProducts(product.map(item => item.id == data.id ? data: item))
  }

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
          <Route path="/" element={ < Websitelayout />}>
            <Route index element={ < Home />}/>
            <Route path="/product" element={ <h1>Hiển thị Products</h1> }/>
            <Route path="/about" element={ <h1>Hiển thị About</h1> }/>
          </Route>

          <Route path="admin" element={ <AdminLayout />}>
            <Route path="products">
                <Route index element={ <ProductList products={products} /> } />
                <Route path="add" element={ <ProductAdd name="Toan" onAdd={onHandleAdd} />} />
                <Route path=":id/edit" element={ <ProductEdit onUpdate={onHandleUpdate} /> } />
            </Route>
          </Route>

        </Routes>
      </main>
    </div>
  )
}

export default App
