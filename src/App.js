import './App.css';
import Header from './components/Header';
import MyCard from './components/Card';
import Contact from './components/Contact';

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
      <Contact />
    </div>
  );
}

export default App;
