import React from "react";
import { Button, Image, Modal } from 'semantic-ui-react'

const ModalModalApod = (props) => (
  <Modal trigger={<Button>VIEW IN HD</Button>} closeIcon>
    <Modal.Content image>
      <Image size='fullscreen' src={props.apod.hdurl} />
    </Modal.Content>
  </Modal>
)

export default ModalModalApod