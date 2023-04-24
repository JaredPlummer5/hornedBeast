import './App.css';
import BeastData from "./data.json"
import HornedBeast from './HornedBeast';

// This function sets the attributes for the props object on the Main.js file 


function Main() {

    return (
        // Defining the Main component that renders a container with d-flex justify-content-center flex-wrap class, 
        // which centers the container and wraps the items within the container in a flexbox layout. 
        // This component maps over the BeastData array and renders a HornedBeast component for each item in the array.
        <div class="d-flex justify-content-center flex-wrap">

            {/* This declares the atributes for the each HornedBeast tag*/}

            {BeastData.map(Beast => {
                return (
                    //Map through the array of beasts in the data file and 
                    //create a HornedBeast component for each one

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
                   
                    />

                );
            })}

        </div>
    );
}

export default Main;

