import React from 'react'
import { IProduct } from '../types/products'
import { Link } from 'react-router-dom'

type Props = {
    products: IProduct[];
    onRemove: (id: number) => void 
};

const ProductList = (props: Props) => {
  return (
    <div>
        <div>ProductList</div>

        <table>
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th> <Link to="add">Add</Link></th>
            </thead>
            <tbody>
                {props.products.map( (item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <Link to={`/admin/products/${item.id}/edit`}>Edit</Link>
                      <button>Remove</button>
                    </td>
                  </tr>
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList