import React from 'react';
import { Row, Col } from 'reactstrap';

const ProjectCard = ({project}) => {
  let {name, image_url, description} = project
  return (
    <div>
      <Row>
        <Col xs="3">
          <img style={{width: "70px"}} src={image_url} className="img-responsive" alt="img"/>
        </Col>
        <Col>
          <h5 className="text-left">{name}</h5>
          <p className="text-left">{description}</p>
        </Col>
      </Row>
      <hr/>
    </div>
  )
}

export default ProjectCard;