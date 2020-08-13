import React from 'react';
import { Row, Col, Container } from 'reactstrap';

import ProjectSection from './ProjectSection';
import projects from './../projects'

const ProjectContainer = () => {
  return (
    <Container>
      <Row>
        <Col><ProjectSection title='MOST LIKED' data={projects} context='like'/></Col>
        <Col><ProjectSection title='MOST ACTIVE' data={projects} context='active'/></Col>
      </Row>
    </Container>
  )
}

export default ProjectContainer;