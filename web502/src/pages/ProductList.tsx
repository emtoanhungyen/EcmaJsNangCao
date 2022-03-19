import React from 'react'
import { IProduct } from '../types/products'

type PropductListProps = {
    products: IProduct[];
    onRemove: (id: number) => void 
}
const ProductList = (props: PropductListProps) => {
  return (
    <div>
        <div>ProductList</div>

        <table>
            <thead>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
            </thead>
            <tbody>
                {props.products.map( (item, index) => {
                  return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
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