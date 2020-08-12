import React from 'react';
import './App.css';
import Greet from './Greet';
import ProductList from './components/ProductList';
import { Container } from 'reactstrap';

function App() {
  return (
    <Container>
      <div className="App">
        <Greet name="x"/>
        <ProductList />
      </div>
    </Container>
  );
}

export default App;
