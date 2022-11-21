import React from 'react'
import {Header} from './header'
import {Banner} from './banner'
import {ProductList} from './productList'
import {Footer} from './footer'
// import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement } from '../features/counter/counterSlice'

const Home = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <hr className='hr1'/>
        <ProductList/>
        <hr className='hr2'/>
        <Footer/>
    </>
  )
}

export default Home;