import './App.css';
import Minimalism from './pages/Minimalism.js';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Minimalism />
    </div>
  );
}

export default App;