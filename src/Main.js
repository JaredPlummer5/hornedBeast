import './App.css';
import BeastData from "./data.json"
import HornedBeast from './HornedBeast';

// This function sets the attributes for the props object on the Main.js file 


function Main() {

    return (

        <div class="d-flex justify-content-center flex-wrap">
            
            {/* This declares the atributes for the each HornedBeast tag*/}

            {BeastData.map(Beast => {
                return (
                    // let Beast.state = 0;
                   
     
                        <HornedBeast 
                            clicks={0}
                            key={Beast._id}
                            id={Beast._id}
                            title={Beast.title}
                            description={Beast.description}
                            image={Beast.image_url}
                        />
                    
                );
            })}
            {/* <HornedBeast title = 'reindeer' description = 'This is a reindeer' image = 'https://facts.net/wp-content/uploads/2021/10/Portrait-of-a-reindeer-1536x1025.jpg'/>
    <HornedBeast title = 'unicorn' description = 'This is a unicorn' image = 'https://cdn.lifefamilyfun.com/wp-content/uploads/How-To-Draw-a-Unicorn.jpg'/> */}
        </div>
    );
}

export default Main;
