import React, {useState, useEffect, useRef} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faker } from '@faker-js/faker';
import { Button, Menu, Input } from 'semantic-ui-react'

export const Header = () => {
  const [popup, setPopup] = useState('hide')
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('username')
  const navigate = useNavigate()
  const location = useLocation()
  const ref = useRef(null)

  const handleLogout = () => {
    localStorage.clear();
    if(location.pathname === '/'){
      window.location.reload(false);
    } else{
      navigate('/')
    }
  }

  const moveToLogin = (e) => {
    e.stopPropagation()
    navigate('/login')
  }

  useEffect(() => {
    const bodyClick = (e) => {
      if(!ref.current.contains(e.target)){
        setPopup('hide')
      } else{
        setPopup('show')
      }
    }
    document.addEventListener('click', bodyClick, true)
    return () => {
      document.removeEventListener('click', bodyClick, true)
    }
  }, [])

  return (
    <header className='pasific-header' id='pasific-header'>
      <div className='pasific-title'>
        <a href='/' >PASIFIC</a>
        <div className='icon'>
          <Button circular color='facebook' icon='facebook'/>
          <Button circular color='instagram' icon='instagram'/>
          <Button circular color='youtube' icon='youtube'/>
          <Button circular color='twitter' icon='twitter'/>
        </div>
      </div>
      <div id='accountDropDown' className={`accountDropDown ${popup}`}>
        <Button.Group vertical>
          <Button onClick={() => navigate('/profile')}>Profile</Button>
          <Button>Settings</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </Button.Group>
      </div>
      <div>
        <Menu.Item>
          <Input className='icon search' icon='search' placeholder='Search...' />
        </Menu.Item>
      </div>
      <nav>
        <ul>
          {
            token !== null ? 
              <>
                <li>
                  <FontAwesomeIcon icon={faCartShopping} className='cart' onClick={() => navigate('/cart')}/>
                </li>
                <li ref={ref} className='navRight accountHasLogin'><label>{user}</label><img className='avatar' alt="avatar" src={faker.image.avatar()}/></li>
              </> : 
              <li onClick={(e) => moveToLogin(e)} className='navRight btnLoginHeader'>Login</li>
            }
          {/* <li><FontAwesomeIcon icon={faCartShopping}/></li> */}
        </ul>
      </nav>
    </header>
  )
}
