import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'semantic-ui-react'

export const Checkout = () => {
    const total = useSelector(state => state.counter.total)

    return (
        <div className='footerCheckout'>
            <div className='totalProduct'>
                <h3>Total Product : &nbsp; &nbsp; &nbsp; {total}</h3>
            </div>
            <div className='btnCheckout'>
                <Button basic color='purple' content='Checkout'/>
            </div>
        </div>
    )
}
