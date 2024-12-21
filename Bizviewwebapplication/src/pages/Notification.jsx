import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Notification = () => {
  // Separate states for checkboxes
  const [dailyUpdate, setDailyUpdate] = useState(false);
  const [newEvent, setNewEvent] = useState(false);
  const [newMember, setNewMember] = useState(false);

  // Separate states for each toggle switch
  const [isMobileToggled, setIsMobileToggled] = useState(false);
  const [isDesktopToggled, setIsDesktopToggled] = useState(false);
  const [isEmailToggled, setIsEmailToggled] = useState(false);

  const handleCheckboxClick = (setter) => {
    setter(prevState => !prevState);
  };

  // Handler for each toggle switch
  const handleMobileToggleClick = () => {
    setIsMobileToggled(prevState => !prevState);
  };

  const handleDesktopToggleClick = () => {
    setIsDesktopToggled(prevState => !prevState);
  };

  const handleEmailToggleClick = () => {
    setIsEmailToggled(prevState => !prevState);
  };

  return (
    <div 
      style={{
        border: '1px solid black', 
        borderRadius: '10px', 
        width: '80%', 
        margin: '20px auto',
        padding: "25px 25px 250px", // Increased padding at the bottom
        marginTop: '1rem',
        maxWidth: '1200px', // Maximum width for larger screens
      }}
    >
      <h3 style={{fontFamily: 'sans-serif', textAlign: 'center'}}> <b> Notification Settings </b> </h3>
      <p style={{color: 'black'}}>Notify me when... 
        <span style={{color: 'green', float: 'right'}}>Allow Notification ?</span>
      </p>

      {/* Daily Productivity Update */}
      <p style={{color: 'black', cursor: 'pointer'}} onClick={() => handleCheckboxClick(setDailyUpdate)}>
        <FontAwesomeIcon 
          icon={dailyUpdate ? faCheckSquare : faSquare} 
          style={{color: dailyUpdate ? 'green' : 'gray', fontSize: '30px'}} 
        /> 
        <span style={{ marginLeft:'5px'}}>Daily Productivity Update</span>
      </p>

      {/* New Event Created */}
      <p style={{color: 'black', cursor: 'pointer'}} onClick={() => handleCheckboxClick(setNewEvent)}>
        <FontAwesomeIcon 
          icon={newEvent ? faCheckSquare : faSquare} 
          style={{color: newEvent ? 'green' : 'gray', fontSize: '30px'}} 
        /> 
        <span style={{ marginLeft:'5px'}}>New Event Created</span>
      </p>

      {/* New Team Member Added */}
      <p style={{color: 'black', cursor: 'pointer'}} onClick={() => handleCheckboxClick(setNewMember)}>
        <FontAwesomeIcon 
          icon={newMember ? faCheckSquare : faSquare} 
          style={{color: newMember ? 'green' : 'gray', fontSize: '30px'}} 
        /> 
        <span style={{ marginLeft:'5px'}}>When a new team Member is added</span>
      </p>

      <div style={{marginTop:'30px'}}>
        <h4>Mobile Push Notification</h4>
        <p className='big'>
          Receive push notifications whenever there is a new offer 
          <span onClick={handleMobileToggleClick} style={{cursor: 'pointer'}}>
            <FontAwesomeIcon 
              icon={isMobileToggled ? faToggleOn : faToggleOff} 
              style={{color: 'green', float:'right', fontSize:'30px'}} 
            />
          </span>
        </p>

        <div style={{marginTop:'10px'}}>
          <h4>Desktop Push Notification</h4>
          <p className='big'>
            Receive push notifications whenever there is a trending business around you 
            <span onClick={handleDesktopToggleClick} style={{cursor: 'pointer'}}>
              <FontAwesomeIcon 
                icon={isDesktopToggled ? faToggleOn : faToggleOff} 
                style={{color: 'green', float:'right', fontSize:'30px'}} 
              />
            </span>
          </p>
        </div>

        <div style={{marginTop:'10px'}}>
          <h4>Email Notification</h4>
          <p className='big'>
            Receive email notifications for the latest business around you
            <span onClick={handleEmailToggleClick} style={{cursor: 'pointer'}}>
              <FontAwesomeIcon 
                icon={isEmailToggled ? faToggleOn : faToggleOff} 
                style={{color: 'green', float:'right', fontSize:'30px'}} 
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
