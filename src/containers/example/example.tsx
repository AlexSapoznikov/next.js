import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './example.scss';
import { GET } from 'utils/fetch';
import Test from 'containers/test/test';
import config from 'config';
import { getUser } from '../../store/actions/user.actions';

function Example (props: any) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    getUser({ id: 1 });
  };

  return (
    <>
      <Test greeting="hi" />

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal {config.get('a')} {config.get('env')}
      </Button>

      <img alt="" src="/favicon.ico" />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Fetched data:
          {JSON.stringify(props.data)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

Example.getInitialProps = () => GET('https://api.github.com/repos/zeit/next.js');

export default Example;
