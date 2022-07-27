import React from 'react'
import'../create.scss'

function UserCreate() {
  return (
    <div className='user_create'>
        <h2>CREATE USER</h2>
        <div className="card">
          <h3>Create New User</h3>
          <form action="">
            <div className="row">
              <label htmlFor="username" className='form_label'>Username</label>
              <div className='inputs'>
                <input id="username" name='username' placeholder='Enter Username ...' type="text" className='form_control'/>
              </div>
            </div>
            <div className="row">
              <label htmlFor="firstname" className='form_label'>Firstname</label>
              <div className='inputs'>
                <input id="firstname" name='firstname' placeholder='Enter User firstname ...' type="text" className='form_control'/>
              </div>
            </div>
            <div className="row">
              <label htmlFor="lastname" className='form_label'>Lastname</label>
              <div className='inputs'>
                <input id="lastname" name='lastname' placeholder='Enter User lastname ...' type="text" className='form_control'/>
              </div>
            </div>
            <div className="row">
              <label htmlFor="birthdate" className='form_label'>Birthdate</label>
              <div className='inputs'>
                <input id="birthdate" name='birthdate' value="14/03/1992" type="text" className='form_control'/>
              </div>
            </div>
            <div className="row">
              <label htmlFor="email" className='form_label'>User Email</label>
              <div className='inputs'>
                <input id="email" name='email' placeholder='Enter User email ...' type="text" className='form_control'/>
              </div>
            </div>
            <div className="row">
              <label htmlFor="profilpic" className='form_label'>Profil picture</label>
              <div className='inputs'>
                <input id="profilpic" name='profilpic'  type="file" className='form_control'/>
              </div>
            </div>
          </form>
          <button type='submit'>Create New User</button>
        </div>
    </div>
  )
}

export default UserCreate