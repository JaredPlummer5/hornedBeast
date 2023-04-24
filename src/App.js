import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
//import SelectedBeast from "./selectedBeast";
import { useState } from "react";

// App is a functional component that renders the entire application.
function App() {
   
    const [clickedBeast, setClickedBeast] = useState(null);
    //Defined state variables to keep track of how many likes each beast 
    
  
    return (
        //Render the Header, Main, and Footer components, 
        //passing in the setClickedBeast and setDisplaySelectedBeast 
        //functions as props to update the state variables.
        <div className="App">
            <Header />
            <Main SelectedBeastFunction={setClickedBeast} clickedBeastVariable={clickedBeast} />
            <Footer />
        </div>
    );
}

export default App;

