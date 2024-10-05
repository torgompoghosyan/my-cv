import './App.css';
import Footer from './components/Footer';
import LeftBlock from './components/LeftBlock';
import RightBlock from './components/RightBlock';

function App() {
  return (
    <div className="App">
      <div className='App-block'>
        <LeftBlock />
        <RightBlock />
      </div>

      <Footer />
    </div>
  );
}

export default App;
