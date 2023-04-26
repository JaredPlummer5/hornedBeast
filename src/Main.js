import './App.css';
import BeastData from "./data.json"
import HornedBeast from './HornedBeast';
import { FormSelect } from 'react-bootstrap';
import { useState } from 'react';

// This function sets the attributes for the props object on the Main.js file 


function Main(props) {
    const [shownOption, setShownOption] = useState("");
    // shownOption and setShownOption are variables set to useState so then I could rerender the HornedBeast component
    let filteredBeast;
    // This variable is conditionally set to the filtered BeastData array 
    // or the normal BeastData array 
    if (shownOption !== "") {

        filteredBeast = BeastData.filter(element => {

            console.log(element.horns, parseInt(shownOption))
            if (element.horns === parseInt(shownOption)) {

                return true;
            }
            else {
                return false;
            }

        });

    } else {
        filteredBeast = BeastData;

    }



    return (
        // Defining the Main component that renders a container with d-flex justify-content-center flex-wrap class, 
        // which centers the container and wraps the items within the container in a flexbox layout. 
        // This component maps over the BeastData array and renders a HornedBeast component for each item in the array.
        // This declares the atributes for the each HornedBeast tag
        <div className="d-flex justify-content-center flex-wrap">
            {/* The onChange event calls the setShownOption function and set the shownOption the value of the option tag
so that the shownOption variable is set equal to the option tag's value property */}
            <FormSelect onChange={(e) => setShownOption(e.target.value)} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option value="">Select a Number</option>
                <option value="1">1 </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="100">100</option>
            </FormSelect>

            {filteredBeast.map(Beast => {

                return (
                    //Map through the array of beasts in the data file and 
                    //create a HornedBeast component for each one, 
                    //passing in the necessary props including SelectedBeastFunction, updateFunction, and clickedBeastVariable.

                    <HornedBeast

                        clicks={0}
                        // A state variable that tracks the number of times the user has clicked on the "Like" button for this beast.
                        key={Beast._id}
                        // A unique identifier for each beast that is used by React to keep track of which elements have changed, been added, or been removed.
                        id={Beast._id}
                        //The ID of the beast from the BeastData array.
                        title={Beast.title}
                        //The title of the beast from the BeastData array.
                        description={Beast.description}
                        // The description of the beast from the BeastData array.
                        image={Beast.image_url}
                        //The image URL of the beast from the BeastData array.
                        updateFunction={props.updateFunction}
                        //A function that sets the displaySelectedBeast state in the App component when the user clicks on the image of a beast.
                        SelectedBeastFunction={props.SelectedBeastFunction}
                        // SelectedBeastFunction: A function that sets the clickedBeast state in the App component when the user clicks on the image of a beast.
                        clickedBeastVariable={Beast}
                    //The Beast object from the BeastData array that corresponds to this HornedBeast component. 
                    //This is used to populate the selectedBeast state in the 
                    //App component when the user clicks on the image of a beast.
                    />

                );
            })}

        </div>
    );
}

export default Main;

