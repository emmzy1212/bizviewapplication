import React from 'react'
import white from '../components/images/mandele.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  return (
    <div className='space'>
      <h3 style={{color:'#0db8b8', textAlign:'center'}}>My profile</h3>
      <div className='ten'>
       <img src={white} alt='profile'  className='img'/>
       <p className='popo'>Taofeeq Jubril <br/> <span className='new'>Lagos Nigeria</span></p>
        <button className='mama'> Edit  <FontAwesomeIcon icon={faPen} style={{color:'black'}}  /></button>
      </div>
      <div className='dot'>
         <h3 style={{color:'#0db8b8'}}>Personal Information</h3>
         <p>First Name <span className='spa'>Last Name</span></p>
         <p style={{color:'#0db8b8', marginTop:'-2px'}}>Taofeeq <span style={{marginLeft:'141px'}}>Jubril</span></p>
         <div>
         <p className='huh'>Email address <span className='yat'>Phone</span></p>
         <p style={{color:'#0db8b8', marginTop:'-2px', fontSize:'13px'}}>Balogubrabiu1@gmail.com <span style={{marginLeft:'44px'}}>09030959063</span></p>
         <button className='gun'> Edit  <FontAwesomeIcon icon={faPen} style={{color:'black'}} /></button>
         </div>
      </div>
      <div className='third'>
        <h4 style={{color:'#0db8b8'}}>Contact Address</h4>
        <h3 style={{color:'#0db8b8', marginTop:'10px'}}>Home address information</h3>
         <p className='sas'> <FontAwesomeIcon icon={faLocationDot} color='black'/> 1st floor the city mall beside TBS Onikan <span style={{float:'right',marginRight:'12px'}}><button className='take'> Edit  <FontAwesomeIcon icon={faPen} style={{color:'black'}} /></button></span></p>
      </div>
    </div>
  )
}

export default Profile
