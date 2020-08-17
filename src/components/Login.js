import React from 'react';
import { Form, FormGroup, Input, Container, 
  Col, Row, Card, CardBody, Label, Button } from 'reactstrap';

import PropTypes from 'prop-types'; // for prop validation

const Login = ({username, password, setUsername, setPassword, validateData}) => {
  const setUsernameWrapper = (e) => {
    setUsername(e.target.value)
  }

  const setPasswordWrapper = (e) => {
    setPassword(e.target.value)
  }


  return (
    <Container>
      <Row>
        <Col className="col-md-6 offset-md-3" style={{'paddingTop': '10%'}}>
          <Card>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" 
                    placeholder="enter email" value={username} onChange={setUsernameWrapper}/>
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" 
                    placeholder="enter password" value={password} onChange={setPasswordWrapper}/>
                </FormGroup>
                <Button color="primary" onClick={validateData}>Submit</Button>
              </Form>
            </CardBody>
          </Card >
        </Col>
      </Row>
    </Container>
  )
}

Login.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setUsername: PropTypes.func.isRequired,
  setPassword: PropTypes.func.isRequired,
  validateData: PropTypes.func.isRequired
}

export default Login;