import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/Content';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Header />
        <Content />
        <Footer />
      </React.Fragment>
    </div>
  );
}

export default App;
