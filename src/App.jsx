import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <div className="App">
      <Header></Header>
      <Blog ></Blog>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App; 
