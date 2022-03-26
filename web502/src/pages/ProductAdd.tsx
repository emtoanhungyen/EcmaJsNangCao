import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import React from 'react'

type ProductAddProps = {
    name: string,
    onAdd: (product: InputForm) => void
};
type InputForm = {
    name: string,
    price: number,
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: {errors}} = useForm<InputForm>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputForm> = data => {
        console.log(data);
        props.onAdd(data);
        navigate("/admin/products")
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {props.name}
        <input type="text" placeholder="Tên sản phẩm" {...register('name')} />
        <input type="number" placeholder="Giá sản phẩm" {...register('price')} />
        <button>Add</button>
    </form>
  )
}

export default ProductAdd