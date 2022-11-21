import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Images} from '../images/images'
import { useDispatch } from 'react-redux'
import { fetchCategoryID } from '../../features/product/filter'

export const CategoriesList = () => {
    const [categoryLists, setCategoryLists] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/categories`)
          .then(res => {
            setCategoryLists(res.data);
          })
    }, [])

    return (
        <div className='catergoriesLists'>
            <ul>
                { categoryLists.map((list,id) => {
                    if(list === 'electronics'){
                        return (
                        <li key={id} onClick={() => dispatch(fetchCategoryID(list))}>
                            <img src={Images.electronic} alt=''/>
                            <div className='container'>
                            <h4>Electronics</h4>
                            </div>
                        </li>
                        )
                    }
                    else if(list === 'jewelery'){
                        return (
                        <li key={id} onClick={() => dispatch(fetchCategoryID(list))}>
                            <img src={Images.ring} alt=''/>
                            <div className='container' style={{ margin: '18px'}}>
                            <h4>Jewellery</h4>
                            </div>
                        </li>
                        )
                    }
                    else if(list === "men's clothing"){
                        return (
                        <li key={id} onClick={() => dispatch(fetchCategoryID(list))}>
                            <img src={Images.mens} alt=''/>
                            <div className='container'>
                            <h4>Men's Clothing</h4>
                            </div>
                        </li>
                        )
                    }
                    else {
                        return (
                        <li key={id} onClick={() => dispatch(fetchCategoryID(list))}>
                            <img src={Images.womens} alt=''/>
                            <div className='container'>
                            <h4>Women's Clothing</h4>
                            </div>
                        </li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}
