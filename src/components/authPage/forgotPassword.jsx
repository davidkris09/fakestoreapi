import React from 'react'

const ForgotPassword = () => {
  return (
    <div className='divForgot'>
        <div className='forgotLeft'></div>
        <div className='forgotRight'>
          <h1>Forgot Password</h1>
          <form>
              <div>
                  <input className='number' type='text' placeholder='Your Contact Number'/>
              </div>
              <button className='btnConfirm'>Confirm</button>
          </form>
        </div>
    </div>
  )
}

export default ForgotPassword;