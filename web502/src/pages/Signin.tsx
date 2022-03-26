import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type SigninProps = {
    email: string,
    password: string,
    onSignin: (user: InputForm) => void
}
type InputForm = {
    email: string,
    password: string
}
const Signin = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<InputForm>();
    const ondSubmit: SubmitHandler<InputForm> = data => {
        console.log(data);  
        
    }
  return (
    <div>
        <div>Đăng Nhập</div>
        <form onSubmit={handleSubmit(ondSubmit)}>
            <div>
                <label>Email</label>
                <input type="email" placeholder="Email..." {...register('email')}/>
            </div>  
            <div>
                <label>Password</label>
                <input type="password" placeholder="Password..." {...register('password')}/>
            </div>  
            <button>Đăng Nhập</button>
        </form>
    </div>
  )
}

export default Signin