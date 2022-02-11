import './App.css';
import Info from './components/Info.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
