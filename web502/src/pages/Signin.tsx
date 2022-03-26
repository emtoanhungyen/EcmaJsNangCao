import React from 'react'

const Signin = () => {
  return (
    <div>
        <div>Đăng Nhập</div>
        <form action="">
            <div>
                <label>Email</label>
                <input type="email" placeholder="Email..."/>
            </div>  
            <div>
                <label>Password</label>
                <input type="password" placeholder="Password..."/>
            </div>  
            <button>Đăng Nhập</button>
        </form>
    </div>
  )
}

export default Signin