import './App.css';
import Info from './components/Info.js';
import Experience from './components/Experience.js';
import Education from './components/Education.js';

function App() {
  return (
    <div className="App">
      <Info test={"testing"} />
      <Experience test={"123"} />
      <Education test={"test"} />
    </div>
  );
}

export default App;
