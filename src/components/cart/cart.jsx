import React, {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Header } from '../homePage/header';
import { Checkout } from '../cart/checkout';
import { plusproduct,removeproduct } from '../../features/counter/counterSlice';
import { Button, Item, Label, Checkbox } from 'semantic-ui-react'

const Cart = () => {
  const cart = useSelector(state => state.cart.cart)
  const dispatch = useDispatch()
  const ref = useRef(null)

  const handleCheckbox = () => {
    if(ref.current.checked) {
      console.log('plus')
      dispatch(plusproduct())
    } else{
      console.log('minus')
      dispatch(removeproduct())
    }
  }

  return (
    <>
        <Header/>
        <div className='containerCart'>
          { 
            cart.map(product => { 
              return product.length !== 0 ?
                <>
                  <Item.Group divided className='itemgroup' key={product.select.id}>
                    <Item className='itemCart'>
                      <Checkbox ref={ref} onChange={handleCheckbox}/>
                      <Item.Image size='tiny' src={product.select.image} />

                      <Item.Content>
                        <Item.Header>{product.select.title}</Item.Header>
                        <Item.Meta>
                          <span className='cinema'>$ {product.select.price}</span>
                        </Item.Meta>
                        <Item.Extra>
                          <Button negative floated='right'>
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