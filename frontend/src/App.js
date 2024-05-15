import './App.css';
// import Home from './components/Home';
import Body from './components/Body';
import {ToastContainer} from "react-toastify"


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Body/>
    </div>
  );
}

export default App;
