import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import NoMatch from './Tabs_content/nomatch';
import Pageone from './Tabs_content/Pageone';
import Pagetwo from './Tabs_content/Pagestwo';
import CombineElement from './layouts/CombineElement';
import Tables from './Componets/widgets/Tables';
import Statistics from './Componets/widgets/Statistics';
import Steps from './Componets/widgets/Froms/Steps';
import Filemaneger from './Componets/widgets/Filemaneger';
import Testing from './Pages/Testing';
import "/node_modules/fontawesome-4.7/css/font-awesome.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<CombineElement><Home/></CombineElement>}/>
        <Route path="/pageone" element={<CombineElement><Pageone /></CombineElement>} />
        <Route path="/pagetwo" element={<CombineElement><Pagetwo/></CombineElement>} />
        <Route path="/table" element={<CombineElement><Tables/></CombineElement>} />
        <Route path="/Statistics" element={<CombineElement><Statistics/></CombineElement>} />
        <Route path="/Steps" element={<CombineElement><Steps/></CombineElement>} />
        <Route path="/filemaneger" element={<CombineElement><Filemaneger/></CombineElement>} />
        <Route path="/testing" element={<CombineElement><Testing/></CombineElement>} />
        <Route path='*' element={<CombineElement><NoMatch /></CombineElement>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
