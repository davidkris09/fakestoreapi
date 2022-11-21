import React, {useState,useEffect,useCallback} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch ,useSelector } from 'react-redux'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { singleProduct } from '../../features/product/singleProduct'

export const ProductList = () => {
    const [listsProduct, setListProduct] = useState([])
    const filter = useSelector((state) => state.filter.value)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const truncateText = (txt) => {
        return txt.length > 25 ? txt.slice(0,25) + ' \u2026' : txt
    }

    const getListProduct = useCallback(() => {
        if(filter.length === 0){
            axios.get('https://fakestoreapi.com/products')
            .then(res =>{
                setListProduct(res.data)
            })
        } else{
            setListProduct(filter)
        }
    }, [filter])

    const getProduct = (id) => {
        dispatch(singleProduct(id))
        navigate('/product', {state: id})
    }

    useEffect(() => {
        getListProduct()
    }, [getListProduct])

    return (
        <div className='contentProduct'>
            <div className='listProducts'>
                {
                    listsProduct.map((product) => {
                        return(
                            <div key={product.id} className='separatedProducts' onClick={() => getProduct(product.id)}>
                                <div className='containerImage'>
                                    <img src={product.image} alt=''/>
                                </div>
                                <div className='containerTitle'>
                                    <h4 title={product.title}>{truncateText(product.title)}</h4>
                                </div>
                                <div className='containerFooter'>
                                    <div className='sold'>
                                        {`Sold ` + product.rating.count}
                                    </div>
                                    <div className='rating'>
                                        <FontAwesomeIcon className='star' icon={faStar}/> {product.rating.rate}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
