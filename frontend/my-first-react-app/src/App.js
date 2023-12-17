
import './App.css';
import Card from './Card';

// in react this mix of js and html together we call as JSX
function App() {
  return (
    <div >
        <h1>Weclome to React Training2</h1>
        <Card number="1"/>
        <Card number="2"/>
        <Card number="3"/>
        <Card number="4"/>
        <Card number="5"/>
        <Card number="6"/>
        <Card number="7"/>
    </div>
  );
}

export default App;
