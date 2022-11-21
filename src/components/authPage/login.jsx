import React, {useState,useEffect, useCallback} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { authLogin, getAllAccount } from '../../features/auth/auth'

const Login = () => {
    const id = useSelector((state) => state.auth.isAll.all)
    const login = useSelector((state) => state.auth.isLogin.token)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userID, setUserID] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    const loginHandle = async (e) => {
        e.preventDefault()
        const userValid = id.find(v => v.username === username)
        if(userValid){
            await dispatch(authLogin({username,password})).unwrap()
            localStorage.setItem('username', username)
            id.forEach(v => {
                if(v.username === username){
                    localStorage.setItem('userid', v.id)
                }
            })
            navigate('/')
            console.log('success')
        } else{
            alert("Username doesn't exist")
        }
    }

    const getDataAccount = useCallback(() => {
        dispatch(getAllAccount())
    }, [dispatch]) 

    useEffect(() => {
        getDataAccount()
    }, [getDataAccount, login, userID])

    return (
        <div className='divLogin'>
            <div className='loginLeft'></div>
            <div className='loginRight'>
                <h1>Log in</h1>
                <form>
                    <div>
                        <input className='inputLogin' value={username} type='text' style={{width: "420px"}} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
                    </div>
                    <br/>
                    <div>
                        <input className='inputLogin' value={password} type='password' style={{width: "420px"}} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
                    </div>
                    <button className='btnLogin' onClick={(event) => loginHandle(event)}>LOG IN</button>
                </form>
                <br/>
                <ul>
                    <li>
                        <Link to='/forgot' className='btnForgotPass'>Forgot Password ?</Link>
                    </li>
                    <li>
                        <Link to='/register' className='register'>Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Login;