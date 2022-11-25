import React, {useEffect} from 'react'
import {Header} from './header'
import {Footer} from './footer'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from '../../features/counter/counterSlice'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { addcart, addsameproduct } from '../../features/product/cart'

const SingleProduct = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const select = useSelector((state) => state.singleProduct.product)
  const cart = useSelector(state => state.cart.cart)
  const token = localStorage.getItem('token')

  const handleCart = (e) => {
    e.preventDefault()
    let exist = cart.find(v => v.select.id === select.id)
    if(exist && cart.length !== 0){
      dispatch(addsameproduct({select, count}))
    } else{
      dispatch(addcart({select, count}))
    }
  }

  useEffect(() => {
    dispatch(reset())
  },[dispatch, select, cart])

  return (
    <>
      <Header/>
      <div className='containerProduct'>
        <div className='containerProductLeft'>
          <img className='productImage' src={select?.image} alt=''/>
        </div>
        <div className='containerProductRight'>
          <h1>{select?.title}</h1>
          <div className='ratingProduct'>
            <FontAwesomeIcon className='star' icon={faStar}/> {select?.rating?.rate}
          </div>
          <div className='soldProduct'>
            {`Sold ` + select?.rating?.count}
          </div>
          <div className='containerDescription'>
            <p>{select?.description}</p>
          </div>
          <div className='containerPrice'>
            <h1>{`$ ${select?.price}`}</h1>
          </div>
          {
            token ? 
              <>
                <div className='containerCount'>
                  <button onClick={() => count === 0 ? 0 : dispatch(decrement())} className='minus'>-</button>
                  <span><label>{count}</label></span>
                  <button onClick={() => dispatch(increment())}  className='plus'>+</button>
                </div>
                <br/>
                <div className='containerAddToCart'>
                  <button className='addtoCart' onClick={(e) => count === 0 ? null : handleCart(e)}><FontAwesomeIcon icon={faCartPlus} className='btnCart'/>
                    <label>Add to Cart</label>
                  </button>
                </div>
              </> :
            ''
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default SingleProduct;