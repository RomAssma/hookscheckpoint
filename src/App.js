import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import { Routes,Link,Route} from 'react-router-dom';
import Description from './Description';
 
const App = () => {
  return (
    <div className="App">
      <MovieList/>
      <h1> <Link to="/Description">Description</Link></h1>
      <Routes>
          <Route path='/Description'  element= { <Description/>}/>
    
        </Routes>
    </div>
  );
}

export default App;
