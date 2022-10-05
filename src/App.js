import './App.css';
import Navigation from './components/navbar'
import CardHome from './CardHome'
import 'bootstrap/dist/css/bootstrap.min.css';
import MilestoneProjects from './components/MilestoneProjects'

function App() {
  return (
    <div>
    <Navigation />
    <CardHome />
    <MilestoneProjects/>
    </div>
  );
}

export default App;