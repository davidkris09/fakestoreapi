import React, {useState} from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [inputFields, setInputFields] = useState({
        firstname: '',
        lastname: '',
        email: '',
        city: '',
        street: '',
        number: '',
        zipcode: '',
        phone: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputFields({...inputFields, [name]: value });
    }

    const handleNext = (e) => {
        e.preventDefault();
        inputFields.firstname === '' ?
            alert('First Name is required') : inputFields.lastname === '' ?
                alert('Last Name is required') : inputFields.email === '' ?
                    alert('Email is required') : inputFields.phone === '' ?
                        alert('Phone Number is required') : navigate('/register/2', {state: {data: inputFields}})
    }

    return (
        <div className='divRegister'>
            <div className='registerLeft'></div>
            <div className='registerRight'>
                <h1>Register</h1>
                <div id='form1'>
                    <div>
                        <input id='firstname' className='inputRegister' type='text' name='firstname' style={{width: "420px"}} placeholder='First Name' value={inputFields.firstname} onChange={(e) => handleChange(e)} required/>
                        <span className='required'>*</span>
                    </div>
                    <br/>
                    <div>
                        <input id='lastname' className='inputRegister' type='text' name='lastname' style={{width: "420px"}} placeholder='Last Name' value={inputFields.lastname} onChange={(e) => handleChange(e)} required/>
                        <span className='required'>*</span>
                    </div>
                    <br/>
                    <div>
                        <input id='email' className='inputRegister' type='text' name='email' placeholder='Email' style={{width: "420px"}} value={inputFields.email} onChange={(e) => handleChange(e)} required/>
                        <span className='required'>*</span>
                    </div>
                    <br/>
                    <div>    
                        <input id='phone' className='inputRegister' type='text' name='phone' style={{width: "420px"}} placeholder='Contact Number' value={inputFields.phone} onChange={(e) => handleChange(e)} required/>
                        <span className='required'>*</span>
                    </div>
                    <br/>
                    <div>
                        <input id='city' className='inputCity' type='text' name='city' style={{width: "200px"}} placeholder='City' value={inputFields.city} onChange={(e) => handleChange(e)} required/> &nbsp;
                        <input id='street' className='inputStreet' type='text' name='street' style={{width: "200px"}} placeholder='Street' value={inputFields.street} onChange={(e) => handleChange(e)} required/>
                    </div>
                    <br/>
                    <div>
                        <input id='number' className='inputNumber' type='number' name='number' style={{width: "200px"}} placeholder='Number' value={inputFields.number} onChange={(e) => handleChange(e)} required/> &nbsp;
                        <input id='zipcode' className='inputZipcode' type='number' name='zipcode' style={{width: "200px"}} placeholder='Zip Code' value={inputFields.zipcode} onChange={(e) => handleChange(e)} required/>
                    </div>
                    <div className='divBtnNext'>
                        <button className='btnNext' onClick={(e) => handleNext(e)}>Next &nbsp;<span><FontAwesomeIcon className='arrowNext' icon={faArrowRight}/></span></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;