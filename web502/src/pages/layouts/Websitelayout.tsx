import React from 'react'
import { Outlet } from 'react-router-dom'

const Websitelayout = () => {
  return (
    <div>
        <header>Websitelayout</header>
        <main>
            <Outlet />
        </main>
        <footer>
            Footer
        </footer>
    </div>

  )
}

export default Websitelayout