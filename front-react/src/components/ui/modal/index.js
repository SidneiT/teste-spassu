import BModal from 'react-bootstrap/Modal';

import { useModalContext } from '../../../context/modal';

export const Modal = () => {
  const { title, show, closeModal, content } = useModalContext()

  return (
    <BModal show={show} onHide={closeModal} size="lg">
      <BModal.Header closeButton>
        <BModal.Title>{title}</BModal.Title>
      </BModal.Header>
      <BModal.Body>{content}</BModal.Body>
    </BModal>
  );
}
