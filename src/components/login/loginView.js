import React from "react";
import css from "./loginView.module.css";
import logo from "../../assets/queueify_logo3.svg";
import background from "../../assets/unsplash-background2.jpg";
import { Alert, Modal, Jumbotron, Button, Row, Col } from "react-bootstrap";

const LoginView = ({
  loginhost,
  loginguest,
  loading,
  handleShowGuesLogin,
  handleShowHostLogin,
  showGuestLogin,
  showHostLogin,
  error,
}) => {
  return (
    <div className={css.loginPage}>
      <Jumbotron
        fluid
        style={{
          backgroundSize: "cover",
          backgroundImage: "url(" + background + ")",
          margin: 0,
          minHeight: "100vh",
        }}
      >
        <Row>
          <Col>
            <img
              alt=""
              src={logo}
              width="300"
              height="100"
              className={`${css.loginLogo} "mb-0"`}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={css.headerLogin}>
              <h1>Welcome!</h1>
              <p>Login</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 4, offset: 4 }}>
            {error && <Alert variant="danger">{error}</Alert>}
          </Col>
        </Row>
        <Row>
          <Col>
            <p>
              <Button
                className={css.loginButton}
                disabled={loading}
                variant="success"
                onClick={handleShowGuesLogin}
              >
                Login as Guest
              </Button>
            </p>
            <p>
              <Button
                className={css.loginButton}
                disabled={loading}
                variant="success"
                onClick={handleShowHostLogin}
              >
                Login as Host
              </Button>
            </p>
          </Col>
        </Row>
      </Jumbotron>

      <Modal
        dialogClassName={css.modal}
        show={showGuestLogin}
        onHide={handleShowGuesLogin}
        animation={false}
        keyboard
      >
        <Modal.Header closeButton>
          <Modal.Title>Login as Guest </Modal.Title>
        </Modal.Header>
        <Modal.Body>Please select a sign-in method below</Modal.Body>
        <Modal.Footer>
          <Button
            className="mr-auto"
            variant="secondary"
            onClick={handleShowGuesLogin}
          >
            Close
          </Button>
          <Button
            className="mr-auto"
            variant="primary"
            disabled={loading}
            onClick={(e) => {
              //TODO: Fix Warning: findDOMNode is deprecated
              handleShowGuesLogin();
              loginguest(e, "google");
            }}
          >
            <i className="fab fa-google" /> Google
          </Button>
          <Button
            className="mr-auto"
            variant="primary"
            disabled={loading}
            onClick={(e) => {
              //TODO: Fix Warning: findDOMNode is deprecated
              handleShowGuesLogin();
              loginguest(e, "facebook");
            }}
          >
            <i className="fab fa-facebook-square" /> Facebook
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        size="sm"
        show={showHostLogin}
        onHide={handleShowHostLogin}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login as Host</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You will need a Spotify account to host a queueify session. If you
          dont have one plese visit their website. Please sign in below
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="mr-auto"
            variant="secondary"
            onClick={handleShowHostLogin}
          >
            Close
          </Button>
          <Button
            className="mr-auto"
            variant="outline-success"
            onClick={(e) => {
              //TODO: Fix Warning: findDOMNode is deprecated
              e.preventDefault();
              handleShowHostLogin();
              loginhost(); // TODO: Implement this
            }}
          >
            <i className="fab fa-spotify"></i> Spotify
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LoginView;
