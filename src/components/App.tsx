import '../styles/App.scss';
import './Header';
import Header from './Header';
import Main from './Main';
import Preview from './Preview';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Preview />
        <Main />
      </div>
      <footer>
        <small>©{new Date().getFullYear()} Dominik Künkele. All Rights Reserved.
        </small>
      </footer>
      <script src="scripts/index.js"></script>
    </div>
  );
}

export default App;
