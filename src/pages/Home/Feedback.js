import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineStar } from "react-icons/ai";

const Feedback = () => {
  return (
    <div className="mb-4">
      <h1>Feedback</h1>
      <p className="text-center mb-5 mt-3">
        What other students turned professionals have to say about us
        <br />
        after learning with us and reaching their goals.
      </p>
      <div className="d-flex justify-content-evenly">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>John</Card.Title>
            <Card.Text>
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "orange" }} />
            </Card.Text>
            <Card.Text>
              A wonderful course with great instructor. This website features
              also helped me a lot
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Mark</Card.Title>
            <Card.Text>
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "gray" }} />
              <AiOutlineStar style={{ color: "gray" }} />
            </Card.Text>
            <Card.Text>
              Overall good. This website some features was not much helpful for
              me
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Linkon</Card.Title>
            <Card.Text>
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "orange" }} />
              <AiOutlineStar style={{ color: "gray" }} />
            </Card.Text>
            <Card.Text>
              Overall investment worked well. For learning it also helped me a
              lot
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Feedback;
