import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo/logo.svg';

function Header() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light" style={styles.navbar}>
      <Link className="navbar-brand" to="/" style={styles.brand}>
        <img src={logo} alt="logo" style={styles.logo} />
        Interventions
      </Link>
    </div>
  );
}

const styles = {
  navbar: {
    borderBottomRightRadius: '15px',
    borderBottomLeftRadius: '15px',
    marginBottom: '2rem'
  },
  logo: {
    height: '40px',
    marginRight: '0.5rem'
  },
  brand: {
    fontSize: '1.5em',
    fontWeight: 'bold'
  }
};

export default Header;
