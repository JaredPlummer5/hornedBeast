import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import SelectedBeast from "./selectedBeast";
import { useState } from "react";

// App is a functional component that renders the entire application.
function App() {
    const [displaySelectedBeast, setDisplaySelectedBeast] = useState(false);
    //Defined state variables to control whether the modal is displayed and which beast was clicked.
    const [clickedBeast, setClickedBeast] = useState(null);
    //Defined state variables to keep track of how many likes each beast 
    
    let selectedBeastHtml = <SelectedBeast clickedBeastVariable={clickedBeast} updateFunction={setDisplaySelectedBeast} />;
    //Defined the variable for the SelectedBeast component, passing in the clickedBeastVariable and updateFunction as props.
    if (displaySelectedBeast === false) {

        selectedBeastHtml = <div></div>;
    }
    //Conditionally render the SelectedBeast component based on the displaySelectedBeast state variable.

    return (
        //Render the Header, Main, and Footer components, 
        //passing in the setClickedBeast and setDisplaySelectedBeast 
        //functions as props to update the state variables.
        <div className="App">
            <Header />
            {selectedBeastHtml}

            <Main SelectedBeastFunction={setClickedBeast} clickedBeastVariable={clickedBeast} updateFunction={setDisplaySelectedBeast} />
            <Footer />
        </div>
    );
}

export default App;

