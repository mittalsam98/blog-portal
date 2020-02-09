import React from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import { BlogContextConsumer } from "../../../context/blogContext";
export interface Props { }


/**
 * Change Comment List View Design
 *  TODO:
 */
const BlogCommentListComponent: React.FC<Props> = () => {
  return (
    <Accordion className="pt-5">
      <BlogContextConsumer>
        {(context) => context?.comment.map((value, index) => {
          return (
            <Card key={value.id}>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={value.id}>
                  {value.comment}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={value.id}>
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
          )
        })}
      </BlogContextConsumer>
    </Accordion>
  );
}


export default BlogCommentListComponent;
