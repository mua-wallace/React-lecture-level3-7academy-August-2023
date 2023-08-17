import logo from './logo.svg';
import './App.css';
import FetchComponent from './components/FetchComponent';
import AxiosComponent from './components/AxiosComponent';

function App() {
  return (
    <div className="App">
     <h1>Welcome to API consumption with fetch and axios</h1>
     <AxiosComponent />
    </div>
  );
}

export default App;
