import './App.css';
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Menu from './Menu'
import data from './data.json'

function App() {

  return (
    <div className="App">
      <Header />
      <Menu />
      <Content data={data}/>
      <Footer />
    </div>
    
  );
}

export default App;
