import './App.css';
import Header from './components/Header';
import Mentors from './components/Mentors';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App background">
      <Navbar/>
      <Header/>
      <Mentors/>
    </div>
  );
}

export default App;
