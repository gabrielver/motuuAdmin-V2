import React from 'react'
import'../create.scss'
import {motion} from 'framer-motion'

function UserCreate() {
  return (
   
    <motion.div initial={{width: 0 }} animate={{ width: "100%" }} exit={{x: window.innerWidth}} transition={{ duration: 0.5}} >
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
                <input id="birthdate" name='birthdate' placeholder="../../...." type="text" className='form_control'/>
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
    </motion.div> 
  )
}

export default UserCreate