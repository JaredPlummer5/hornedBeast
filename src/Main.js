import './App.css';
import HornedBeast from './HornedBeast';

function Main() {
  return (
    <div>
    <main>This is the main</main>
    <HornedBeast title = 'reindeer' description = 'This is a reindeer' image = 'https://facts.net/wp-content/uploads/2021/10/Portrait-of-a-reindeer-1536x1025.jpg'/>
    <HornedBeast title = 'unicorn' description = 'This is a unicorn' image = 'https://cdn.lifefamilyfun.com/wp-content/uploads/How-To-Draw-a-Unicorn.jpg'/>
    </div>
  );
}

export default Main;
