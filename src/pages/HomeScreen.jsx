import React from 'react';

import Nav from '../components/Nav/Nav';
import Banner from '../components/Banner/Banner';
import Row from '../components/Row/Row';

import { ROWS } from '../utils/constants';
import './HomeScreen.css';

const HomeScreen = () => {
  const largeRow = "NETFLIX ORIGINALS";
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      {
        ROWS.map((row, i) => <Row title={row.title} fetchURL={row.fetchURL} isLargeRow={largeRow === row.title} />)
      }
    </div>
  )
}

export default HomeScreen