import './App.css';
import Header from './Header';
import SwipeButtons from './SwipeButtons';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* tinder cards */}
      <TinderCards />
      {/* swipe buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
