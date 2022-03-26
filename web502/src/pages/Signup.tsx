import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
type SignupProps = {
    username: string,
    email: string,
    password: string,
    onAdd: (user: InputForm ) =>  void
}
type InputForm = {
    username: string,
    email: string,
    password: string
}
const Signup = (props: SignupProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<InputForm>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<InputForm>  = data => {
        console.log(data);
        props.onAdd(data);
        navigate("/signin");
    }
  return (
    <div>
        <div>Đăng Ký</div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username</label>
                <input type="text" placeholder="Tên tài khoản..." {...register('username', {required: true})}/>
            </div>  
            <div>
                <label>Email</label>
                <input type="email" placeholder="Email..." {...register('email', {required: true})}/>
            </div>  
            <div>
                <label>Password</label>
                <input type="password" placeholder="Password..." {...register('password', {required: true})}/>
            </div>  
            <button>Đăng Ký</button>
        </form>
    </div>
  )
}

export default Signup