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
                
            </tbody>
        </table>
    </div>
  )
}

export default ProductList