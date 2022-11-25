import './App.css';
import React, {Component, lazy, Suspense} from 'react';
import {Routes, Route} from 'react-router-dom'
import { withCookies } from 'react-cookie';
import Spinner from 'react-bootstrap/Spinner';

const Home = lazy(() => import('./components/homePage/home'))
const ForgotPassword = lazy(() => import('./components/authPage/forgotPassword'))
const Register = lazy(() => import('./components/authPage/register'))
const Register2 = lazy(() => import('./components/authPage/register2'))
const Login = lazy(() => import('./components/authPage/login'))
const Profile = lazy(() => import('./components/profile/profile'))
const SingleProduct = lazy(() => import('./components/homePage/singleProduct'))
const Cart = lazy(() => import('./components/cart/cart'))

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Suspense fallback={<Spinner animation="grow" />}>
          <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/profile' element={<Profile />}/>
              <Route path='/product' element={<SingleProduct />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/forgot' element={<ForgotPassword />}/>
            <Route path='/register' element={<Register />} />
              <Route path='/register/2' element={<Register2 />} />
          </Routes>
        </Suspense>
      </div>
    )
  }
}

export default withCookies(App);