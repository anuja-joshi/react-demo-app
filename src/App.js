import React from 'react';
import './App.css';
// import Greet from './Greet';
// import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ProjectContainer from './components/ProjectContainer';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <ProjectContainer />
    </div>
  );
}

export default App;

// <Greet name="x"/>
// <div className="col-md-6 offset-md-3">
//   <ProductList />
// </div>