import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/products'
import { IProduct } from '../types/products'

type Props = {}
type FormEdit = { 
    name: string,
    price: number
}
type ProductEditProps = {
    onUpdate: (product: IProduct) => void
}
const ProductEdit = (props: ProductEditProps) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<FormEdit>();  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
      const getProduct = async () => {
          const { data } = await read(id);
          reset(data);
      }
      getProduct()
  }, [])

  const onSubmit: SubmitHandler<FormEdit> = data => {
      console.log(data)
      props.onUpdate(data);
      navigate("/admin/products")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        Name: <input type="text" {...register('name', {required: true})}/>
        Price: <input type="number" {...register('price')}/>
        <button>Update</button>
    </form>
  )
}

export default ProductEdit