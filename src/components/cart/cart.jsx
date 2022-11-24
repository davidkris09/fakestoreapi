import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../homePage/header';
import { Checkout } from '../cart/checkout';
import { plusproduct,removeproduct } from '../../features/counter/counterSlice';
import { removecart } from '../../features/product/cart';
import { Button, Item, Label } from 'semantic-ui-react'

const Cart = () => {
  const cart = useSelector(state => state.cart.cart)
  console.log(cart)
  const dispatch = useDispatch()

  const handleCheckbox = (e) => {
    if(e.target.checked){
      dispatch(plusproduct())
    } else{
      dispatch(removeproduct())
    }
  }

  const handleRemove = (params) => {
    console.log(params.select.id)
    dispatch(removecart(params.select.id))
  }

  return (
    <>
        <Header/>
        <div className='containerCart'>
          { 
            cart.map((product) => { 
              return product.length !== 0 ?
                <>
                  <Item.Group divided className='itemgroup' key={product.select.id}>
                    <Item className='itemCart'>
                      <input id={`checkbox${product.select.id}`} type='checkbox' className='checkbox' onChange={(e) => handleCheckbox(e)}/>
                      <Item.Image size='tiny' src={product.select.image} />

                      <Item.Content>
                        <Item.Header>{product.select.title}</Item.Header>
                        <Item.Meta>
                          <span className='cinema'>$ {product.select.price}</span>
                        </Item.Meta>
                        <Item.Extra>
                          <Button negative floated='right' onClick={() => handleRemove(product)}>
                            Remove
                          </Button>
                          <Label>{product.count}</Label> quantity
                        </Item.Extra>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </>
              : <h1>There is no cart</h1>
            })
          }
        </div>
        <Checkout/>
    </>
  )
}

export default Cart;