import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
const ConsumerForm = (props) => {
  const userNameController = useRef();
  const userPhoneNoController = useRef();
  const [error, setError] = useState(false);
  const submitButtonHandler = () => {
    if (userNameController.current.value.length === 0) {
      setError(true);
      return;
    }
    props.tableHandlerFunction({
      table: props.tableNo,
      name: userNameController.current.value,
      status: "Booked",
      order: [],
    });
    props.setBackdrop();
  };
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        submitButtonHandler();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          ref={userNameController}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone No</Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone No"
          ref={userPhoneNoController}
        />
      </Form.Group>
      {error && (
        <div style={{ textAlign: "center", color: "red" }}>
          Please Enter Valid Data!
        </div>
      )}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default ConsumerForm;
