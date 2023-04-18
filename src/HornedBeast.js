import './App.css';
// The HornedBeast function returns a div that passes the title, description, and the image url from the Main.js file
// Props is a prameter that gets passed to represent the HornedBeast tag
function HornedBeast(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>

            <img src={props.image} width="800px" height = "600px" alt = {props.description}/>

            

        </div>
    );
};


export default HornedBeast;