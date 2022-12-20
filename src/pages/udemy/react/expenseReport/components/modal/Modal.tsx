import styled from "styled-components";

interface ModalProps {
  title: string;
  message: string;
  onConfirm: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
}

const Modal = ({ title, message, onConfirm }: ModalProps) => {
  return (
    <Backdrop className="closable" onClick={onConfirm}>
      <Container>
        <header>
          <h2>{title}</h2>
        </header>
        <div className="content">
          <p>{message}</p>
        </div>
        <footer className="actions">
          <button className="closable" onClick={onConfirm}>
            Okay
          </button>
        </footer>
      </Container>
    </Backdrop>
  );
};

export default Modal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Container = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  left: 10%;
  overflow: hidden;
  position: fixed;
  top: 30vh;
  width: 80%;
  z-index: 100;

  header {
    background: #4f005f;
    padding: 1rem;
    text-align: left;
  }

  header h2 {
    margin: 0;
    color: white;
  }

  .content {
    padding: 1rem;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
  }

  button {
    font: inherit;
    border: 1px solid #4f005f;
    background: #4f005f;
    color: white;
    padding: 0.25rem 1rem;
    cursor: pointer;
  }

  button:hover,
  button:active {
    background: #741188;
    border-color: #741188;
  }

  button:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 40rem;
  }
`;
