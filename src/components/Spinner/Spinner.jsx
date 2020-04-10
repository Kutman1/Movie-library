import React from 'react';
import './Spinner.sass';
const Spinner = () => {
    return (
        <div className='spinner'>
          <div className="loading">
              <span>Loading...</span>
              <div className="circle color1"></div>
              <div className="circle color2"></div>
              <div className="circle color3"></div>
              <div className="circle color4"></div>
          </div>
        </div>
    );
};

export default Spinner;