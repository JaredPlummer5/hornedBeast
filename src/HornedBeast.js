import './App.css';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap'


// The HornedBeast function returns a div that passes the title, description, and the image url from the Main.js file
// Props is a prameter that gets passed to represent the HornedBeast tag


function HornedBeast(props) {
    const [clicks, setClicks] = useState(0);
    function state() {
        setClicks(clicks + 1);
    }
    //Defined a state variable to keep track of how many times the "Like" button has been clicked.

    //Return a Card component that displays the title, description, image, and Like button. 
    return (
        <Card className={"mx-4 my-4"} id={props.id} style={{ width: '18rem', height: '25rem' }}>

            <h2>{props.title}</h2>
            {/* This lines gets the title and description from that are being passed down as props from the Main.js file */}
            <p>{props.description}</p>

            <img
                //When the image is clicked, call the SelectedBeastFunction and updateFunction to set the clicked beast in the App state.
                onClick={() => {
                    props.updateFunction(true);
                    props.SelectedBeastFunction(props.clickedBeastVariable);
                }
                }
                // This lines gets the image and description from that are being passed down as props from the Main.js file 
                src={props.image} className="mw-100" height={'200px'}
                alt={props.description}
            />
            {/* This lines update the state of likes by calling the state function */}
            <Button onClick={state} type="button" class="btn btn-outline-primary">Like</Button>
            {/* This line displays a heart and the state of clicks for each beast */}
            <p>&#9829;{clicks}</p>


        </Card>

    );
};


export default HornedBeast;

