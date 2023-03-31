import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'
import SideCart from './Components/SideCart/SideCart'

function App() {
  const handleBookmark =(time)=>{
    console.log(time);
  }
  return (
    <div>
      <div className="App">
     <Header></Header>
    </div>
    <div className="main container ">
      <div className="home-container ">
        <Blog handleBookmark={handleBookmark}></Blog>
      </div>
      <div className="side-cart ">
        <SideCart></SideCart>
      </div>
    </div>
    </div>
  )
}

export default App; 
