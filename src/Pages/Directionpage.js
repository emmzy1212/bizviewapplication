import React from 'react';
import './Directionpage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faBus, faWalking, faBicycle, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Directionpage = () => {
  return (
    <div style={{ width: '100%', height: '70vh', padding: '8px' }}>
      <iframe
        width="100%"
        height="370vh"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=100vh&amp;hl=en&amp;q=45,city%20mall,onikan,Beside%20TBS%20,Lagos%20state+(Mr%20Biggs)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        title="Map of City Mall, Onikan, Lagos"
      ></iframe>

      <a
        href="https://www.google.com/maps/dir/?api=1&destination=45+City+Mall+Onikan+Lagos+State"
        target="_blank"
        rel="noopener noreferrer"
        className="direction-link"
      >
        <div className="ride">
          <p className="get-directions">Get directions</p>
          <div className="walk">
            <FontAwesomeIcon icon={faCar} />
            <FontAwesomeIcon icon={faBus} />
            <FontAwesomeIcon icon={faWalking} />
            <FontAwesomeIcon icon={faBicycle} />
          </div>
          <hr />
          <h6 className="start-from">
            Start from{' '}
            <span className="swap-points">Swap start/end points</span>
          </h6>
          <div className="start-location">
            <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
          </div>
          <h1 className="location-title">
            <FontAwesomeIcon icon={faLocationDot} className="icon-green" /> Mr Biggs
          </h1>
          <h2 className="location-address">
            45, city mall, Onikan, Beside TBS, Lagos state
          </h2>
          <button className="but">Get direction</button>
        </div>
      </a>
    </div>
  );
};

export default Directionpage;
