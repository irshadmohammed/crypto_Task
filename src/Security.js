import React from 'react';
import CallToActionIcon from '@mui/icons-material/CallToAction';
import './Security.css';
import { Switch } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';

function Security() {
  return (
    <div className='security__wrapper'>
      <div className='security__square'>
        <CallToActionIcon fontSize='large' style={{ fill: "orangered" }} />
        <div className='security__info'>
          <h5>Identity</h5>
          <h4>Disable</h4>
        </div>
        <Switch />
      </div>

      <div className='security__square'>
        <ChatIcon fontSize='large' style={{ fill: "aqua"}} />
        <div className='security__info'>
          <h5>Phone</h5>
          <h4>Disable</h4>
        </div>
        <Switch />
      </div>
    </div>
  )
}

export default Security
