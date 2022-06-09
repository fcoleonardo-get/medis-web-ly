import { Button , Modal} from 'react-bootstrap';


export default function CancelarTriagem({show, setShow}) {
   
  
    return (
      <>
        <Modal 
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show} 
            onHide={()=>setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Atenção</Modal.Title>
          </Modal.Header>
          <Modal.Body>Tem certeza que deseja cancelar a triagem?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>setShow(false)}>
              Não
            </Button>
            <Button variant="primary" onClick={()=>setShow(false)}>
              Sim
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }