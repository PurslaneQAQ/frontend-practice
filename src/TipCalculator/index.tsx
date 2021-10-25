import React from 'react';
import Container from './components/container';
import 'antd/dist/antd.css';
import './index.scss';
import Logo from './images/logo.svg';
import rootStyle from './_export.modules.scss';
import Footer from '../components/footer';

function TipCalculator() {
  return (
    <>
      <div id="TipCalculator">
        <style>{`body {background-color: ${rootStyle.BGPrimary}; color: ${rootStyle.TextPrimary}}`}</style>
        <img alt="logo" className="App-logo" src={Logo} />
        <Container />
      </div>
      <Footer />
    </>
  );
}

export default TipCalculator;
