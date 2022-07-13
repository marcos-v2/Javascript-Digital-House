import React from 'react';
import '../App.css';
import ContentWrapper from './ContentWrapper';
import TopBar from './TopBar';
import Footer  from './Footer';
// console.log(TopBar);
function App() {
  return (
    <div className="App">
      <ContentWrapper/>
      <Footer/>
    </div>
  );
}

export default App;
