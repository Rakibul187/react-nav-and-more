import './App.css';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import Navbar from './components/Navbar/Navbar';
import PhoneBar from './components/PhoneBar/PhoneBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <h1 className='underline font-bold text-4xl'>This is Header!!!</h1>
      <p>This is just a paragraph</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
      < PhoneBar></PhoneBar>
    </div>
  );
}

export default App;
