import './App.css';
import Header from './Components/Header';
import TinderCards from './Components/TinderCards';
import SwipeButtons from './Components/SwipeButtons';

function App() {
  return (
    <div className="app">
      <Header />
      {/* configuring BE */}
      <TinderCards />
      {/* <SwipeButtons /> */}
    </div>
  );
}

export default App;
