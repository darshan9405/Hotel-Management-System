import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const ConsumerForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone No</Form.Label>
        <Form.Control type="text" placeholder="Phone No" />
      </Form.Group>
    </Form>
  );
};
export default ConsumerForm;
