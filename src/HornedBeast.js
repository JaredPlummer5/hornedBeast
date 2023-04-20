import './App.css';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap'
import selectedBeast from './selectedBeast'

// The HornedBeast function returns a div that passes the title, description, and the image url from the Main.js file
// Props is a prameter that gets passed to represent the HornedBeast tag


function HornedBeast(props) {
    const [clicks, setClicks] = useState(0);

    function state() {
        setClicks(clicks + 1);
        console.log(clicks);
    }
   

    return (
        <Card onClick={selectedBeast} id={props.id} style={{ width: '18rem' }}>

            <h2>{props.title}</h2>
            <p>{props.description}</p>

            <img  src={props.image} class="mw-100" height={'200px'} alt={props.description} />
            <Button onClick={state}>Like</Button>
            <p>&#9829;{clicks}</p>

        </Card>

    );
};


export default HornedBeast;