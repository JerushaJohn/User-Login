import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import Home from './component/Home';
import Register from './component/Register';
import Login from './component/Login';

function App() {
  return (<Router>
    <div className="App">
      <Link to='/home'>Home</Link>
      <Link to='/register'>Register</Link>
      <Link to='/login'>Login</Link>
      
      <div>
        <Route exact path='/home'  component={Home}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login} />
      
        
      </div>

      {/* <Home/>
      <Register/>
      <Login/>
      <TogglePassword/> */}
    </div>
    </Router>
  );
}

export default App;
