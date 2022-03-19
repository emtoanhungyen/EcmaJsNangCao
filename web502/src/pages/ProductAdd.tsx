import { useForm, SubmitHandler } from 'react-hook-form'
import React from 'react'

type ProductAddProps = {
    name: String,
    onAdd: (product: InputForm) => void
};
type InputForm = {
    name: String,
    price: number,
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: {errors}} = useForm<InputForm>();

    const onSubmit: SubmitHandler<InputForm> = data => {
        props.onAdd(data);
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