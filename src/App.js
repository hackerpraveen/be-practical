import './App.css';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.min.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './route';
import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div >
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </div>
  );
}

export default App;
