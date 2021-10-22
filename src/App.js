import './App.css';
import Header from './components/Header';
import MyCard from './components/Card';
import Contact from './components/Contact';
import HCard  from './components/HCard';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cards">
      <MyCard /> 
      <MyCard /> 
      <MyCard /> 
      <MyCard /> 
      <MyCard />
      <MyCard />
      </div> 
      <HCard />
      <Contact />
    </div>
  );
}

export default App;
