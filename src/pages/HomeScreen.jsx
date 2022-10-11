import React from 'react';

import Nav from '../components/Nav/Nav';
import Banner from '../components/Banner/Banner';
import Row from '../components/Row/Row';

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row />
    </div>
  )
}

export default HomeScreen