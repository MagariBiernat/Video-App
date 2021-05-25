import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { Youtube } from "../utils/interfaces"

interface IProps {
  showModal: boolean
  movieUrl: string
  toggleModal: () => void
  type: string
}
const ModalMovie: React.FC<IProps> = ({
  showModal,
  movieUrl,
  type,
  toggleModal,
}) => {
  //movieUrl === movieId
  const movie =
    type === Youtube
      ? `https://www.youtube.com/embed/${movieUrl}`
      : `https://player.vimeo.com/video/${movieUrl}`
  console.log(movieUrl, showModal)
  return (
    <Modal isOpen={showModal} toggle={toggleModal} className={"modal-movie"}>
      <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
      <ModalBody className="modal-movie-body">
        <iframe
          allowFullScreen
          className="modal-movie-body-iframe"
          src={movie}
        ></iframe>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default React.memo(ModalMovie)
