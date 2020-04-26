import React from 'react';
import './Homepage.styles.scss';
// compmonents
import Alert from '../../components/alert/Alert';
import Directory from '../../components/directory/Directory';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Homepage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="homepage">
        <Alert />
        <Directory />
        <Footer />
      </div>
    </div>
  )
}

export default Homepage;