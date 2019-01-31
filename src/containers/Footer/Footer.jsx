import React from 'react';
import './Footer.scss';

import Socials from '../../components/Socials/Socials'

export default (props) => {
  return (
    <footer className='footer__container'>
      <div className='footer__content'>
        <Socials />
        <p className='footer__links'>
          <a href='https://www.idealo.de/preisvergleich/AGB.html'>Impressum</a>
          <a href='https://www.idealo.de/preisvergleich/Datenschutz.html'>Hinweise zum Datenschutz</a>
        </p>
      </div>
    </footer>
  );
}
