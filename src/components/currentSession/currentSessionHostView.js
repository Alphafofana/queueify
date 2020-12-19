import React from "react";
import css from "./currentSessionGuestView.module.css";
import {
  Col,
  Container,
  Button,
  Table,
  Row,
  Overlay,
  Tooltip,
} from "react-bootstrap";

const CurrentSessionHostView = ({
  user,
  error,
  showPin,
  setShowPin,
  target,
  playlist,
  vote,
  sessionID,
  sessionName,
  playlistId,
}) => {
  return (
    <Container fluid className={css.currentSession}>
      <Container className={css.sessionInfo}>
        <Row sm={2} xs={1}>
          <Col className={css.sessionDetails}>
            <p>Session Name: {sessionName}</p>
            <Button
              className={css.spotifyButton}
              variant="outline-success"
              ref={target}
              onClick={setShowPin}
            >
              Show Pin
            </Button>
            <Overlay target={target.current} show={showPin} placement="right">
              {(props) => (
                <Tooltip id="overlay-example" {...props}>
                  *session pin TODO*
                </Tooltip>
              )}
            </Overlay>
          </Col>
          <Col>
            <Button
              className={css.spotifyButton}
              variant="success"
              href={"https://open.spotify.com/playlist/" + playlistId}
              target="_blank"
            >
              Open playlist with Spotify
            </Button>
          </Col>
        </Row>
      </Container>
      <Row>
        <Table striped bordered hover variant="dark" className={css.queue}>
          <thead>
            <tr>
              <th>#</th>
              <th>ARTIST</th>
              <th>TITLE</th>
              <th>VOTES</th>
              <th>REMOVE</th>
            </tr>
          </thead>
          <tbody>
            {playlist &&
              playlist.map((song, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{song.artist.join(", ")}</td>
                  <td>{song.title}</td>
                  <td>
                    {song.votes}
                    <Button
                      variant="outline-light"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        vote(song.id).catch((error) => {
                          console.error("Could not vote:"); //TODO: check errortype
                          //handleShowError();
                        });
                      }}
                    >
                      ↑
                    </Button>
                  </td>
                  <td>
                    todo
                    <Button variant="outline-light" size="sm">
                      x
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default CurrentSessionHostView;
