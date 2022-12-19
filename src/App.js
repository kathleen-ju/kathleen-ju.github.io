import './App.css';
import Typewriter from 'typewriter-effect';

var Test = () => {
  return <Typewriter
  options={{
    strings: ['Hello World!'],
    autoStart: true,
    loop: true,
  }}
  />;;
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test/>
        <p>I'm Kathleen Jumamoy, software developer based in Alberta, Canada</p>
      </header>
    </div>
  );
}

export default App;
