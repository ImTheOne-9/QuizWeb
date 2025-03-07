import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <div className="web-container">
      <Header />
      <div>
        <Link to="/users">User</Link>
        <Link to="/admins">Amin</Link>
      </div>
    </div>

  );
}

export default App;
