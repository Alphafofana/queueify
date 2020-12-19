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
  pin,
  showPin,
  setShowPin,
  target,
  playlist,
  vote,
  deleteSong,
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
                  {pin}
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
                  <td className={css.votes}>
                    <p className={css.vote}>{song.votes}</p>
                    {!song.voters || !song.voters.includes(user.uid) ? (
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
                        Vote 👍
                      </Button>
                    ) : (
                      <Button variant="outline-light" size="sm" disabled>
                        You voted 👏
                      </Button>
                    )}
                  </td>
                  <td>
                    <Button
                      variant="outline-light"
                      size="sm"
                      onClick={(e) => {
                        e.preventDefault();
                        return deleteSong(song.id).catch((error) =>
                          console.log(error)
                        );
                      }}
                    >
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
