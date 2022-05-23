import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Rowpost from './components/rowpost/Rowpost';
import {originals,action} from './components/constants/Urls'
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Rowpost title="Netflix Originals" url={originals} isLarge />
      <Rowpost title="Action" url={action} />
      <Rowpost title="Comedy" url={action} />
      <Rowpost title="Drama" url={action} />
    </div>
  );
}

export default App;
