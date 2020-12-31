import './App.css';
import Addtodo from './components/Addtodo'
import { Provider } from 'react-redux';
import store from './Store/store'
function App() {
  return (
    <Provider store ={store}>
    <div className="App">
    <Addtodo/>
    </div>
    </Provider>
  );
}

export default App;
