import React from 'react'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <>
    <div>ini Home</div>
    <NavLink to={"/login"}>login</NavLink>
    <NavLink to={"/register"}>register</NavLink>
    </>
  )
}

export default Home