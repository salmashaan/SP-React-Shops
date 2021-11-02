import { Button, InputGroup, FormControl, Modal } from "react-bootstrap";
import { useState } from "react";
import shopStore from "../stores/shopStore";

function ShopModal() {
  const [show, setShow] = useState(false);
  const [shop, setShop] = useState({
    name: "",
    image: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event) =>
    setShop({ ...shop, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setShop({ ...shop, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    shopStore.createShop(shop);
    handleClose();
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        New
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text>Name</InputGroup.Text>
              <FormControl
                placeholder="Your shop's name"
                name="name"
                value={shop.name}
                type="text"
                onChange={handleChange}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text>Image</InputGroup.Text>
              <FormControl
                name="image"
                type="file"
                onChange={handleImage}
                placeholder="Image"
              />
            </InputGroup>
            <Button variant="outline-dark" type="submit">
              Add Shop
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ShopModal;
