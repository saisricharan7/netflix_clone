import React from 'react';
import './watch.css';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

export const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackOutlinedIcon/>
            Home
        </div>
        <video
        className="video"
        autoPlay
        progress
        controls
        src='https://youtu.be/u3V5KDHRQvk'
      />
    </div>
  )
}
