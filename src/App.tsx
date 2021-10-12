import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { MainComponent } from './Components/MainComponet/MainComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainComponent/>
      <Footer/>
    </div>
  );
}

export default App;
