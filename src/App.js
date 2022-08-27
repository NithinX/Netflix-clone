import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Rowpost from './components/rowpost/Rowpost';
import {originals,trending,action,comedy,documentaries,romance,horror} from './components/constants/Urls'
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner url={trending}/>
      <Rowpost title="Netflix Originals" url={originals} isLarge />
      <Rowpost title="Action" url={action} />
      <Rowpost title="Horror" url={horror} />
      <Rowpost title="Documentaries" url={documentaries} />
      <Rowpost title="Comedy" url={comedy} />
      {/* <Rowpost title="Romance" url={romance} /> */}
    </div>
  );
}

export default App;
