import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

import './SearchBar.css';


const SearchBar = () => {
  return (
    <div className="top-banner">
      <h1> Discover Projects</h1>
      <p className="text-success"> 91908 public projects to discover</p>
      <Form className="col-md-6 offset-md-3">
        <FormGroup>
          <Input type="name" name="name" placeholder="Type something..." />
        </FormGroup>
      </Form>
    </div>
  )
}

export default SearchBar;