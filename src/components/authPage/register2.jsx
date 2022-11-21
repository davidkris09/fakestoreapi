import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { authRegister } from '../../features/auth/auth'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, useLocation } from 'react-router-dom'

const Register2 = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [inputFields, setInputFields] = useState({
        firstname: location.state.data.firstname,
        lastname: location.state.data.lastname,
        email: location.state.data.email,
        phone: location.state.data.phone,
        username: '',
        password: '',
        confirmPassword: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputFields({...inputFields, [name]: value });
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        inputFields.username === '' ?
            alert('Username is required') : inputFields.password === '' ?
                alert('Password is required') : inputFields.confirmPassword === '' ?
                    alert('Confirm Password is required') : inputFields.confirmPassword !== inputFields.password ?
                        alert('Confirm Password invalid') : await dispatch(authRegister(inputFields)).unwrap()
        navigate('/login')
    }

    return (
        <div className='divRegister'>
            <div className='registerLeft'></div>
            <div className='registerRight'>
                <h1>Register</h1>
                <div id='form2'>
                    <div>
                        <input className='inputRegister' type='text' name='username' style={{width: "420px"}} placeholder='Username' value={inputFields.username} onChange={(e) => handleChange(e)} required/>
                        <span className='required'>*</span>
                    </div>
                    <br/>
                    <div>
                        <input className='inputRegister' type='password' name='password' style={{width: "420px"}} placeholder='Password' value={inputFields.password} onChange={(e) => handleChange(e)} required/>
                        <span className='required'>*</span>
                    </div>
                    <br/>
                    <div>
                        <input className='inputRegister' type='password' name='confirmPassword' style={{width: "420px"}} placeholder='Confirm Password' value={inputFields.confirmPassword} onChange={(e) => handleChange(e)} required/>
                        <span className='required'>*</span>
                    </div>
                    <div className='divBtnRegister'>
                        <ul>
                            <li><button className='btnPrevious' onClick={() => navigate(-1)}><span><FontAwesomeIcon className='arrowLeft' icon={faArrowLeft}/></span>&nbsp; Previous</button></li>
                            <li><button className='btnRegister' onClick={(e) => handleRegister(e)}>Register</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register2