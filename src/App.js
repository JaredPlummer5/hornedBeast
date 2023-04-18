import './App.css';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
// These lines are importing the other javaScript files
// The app function returns a div of the Header, Main, and Footer functions
function App() {
    return (
        <div className='App'>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
