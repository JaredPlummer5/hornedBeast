import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css'
//import HornedBeast from "./HornedBeast";
import { useState } from "react";
//Import the Modal and Button components from the react-bootstrap library, and the useState hook from React.
function SelectedBeast(props) {
    const [show, setShow] = useState(true);
    //Define the JSX for the modal, passing in the clickedBeastVariable and updateFunction as props from the Main.jd file.


    //Define the handleClose function, which sets the show state variable to false 
    //and calls the updateFunction to close the modal in the App component.
    const handleClose = () => {
        setShow(false);
        //Conditionally render the modal based on the value of the show state variable.
        props.updateFunction(false);
    };

    return (
        //Return the JSX for the modal, displaying the title, image, and description of the clicked beast. 
        //When the Close button is clicked, call the handleClose function to close the modal.
        <>
            <Modal show={show} onHide={handleClose}>
                {/* renders a modal component with a show property bound to 
            the show state variable and an onHide property bound to the handleClose function. */}
                <Modal.Header closeButton>
                    {/* renders a header component for the modal with a close button. */}
                    <Modal.Title className="d-flex justify-content-center">{props.clickedBeastVariable.title}</Modal.Title>
                    {/* renders the title of the modal with the title property of the show state variable. */}

                </Modal.Header>
                <Modal.Body className="d-flex justify-content-center flex-wrap" >
                    {/* renders the body of the modal. */}
                    <img className="mw-100" height={'200px'} src={props.clickedBeastVariable.image_url} alt={props.clickedBeastVariable.title} />
                    {/* renders an image element with the image_url property of the 
                    props.clickedBeastVariable object passed as a prop to the component. */}
                    <p>{props.clickedBeastVariable.description}</p>
                    {/* renders a paragraph element with the description property of the 
                    props.clickedBeastVariable object passed as a prop to the component. */}
                </Modal.Body>
                <Modal.Footer>
                    {/* renders the footer of the modal. */}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* renders a button element with the variant property set to "secondary" and an onClick property bound to the `handleClose */}
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SelectedBeast;
