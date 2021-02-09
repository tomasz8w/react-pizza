import './App.css';
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Menu from './Menu'

function App() {

  const dataFile = require("./data.json");
  return (
    <div className="App">
      <Header />
      <Menu />
      <Content data={dataFile}/>
      <Footer />
    </div>
    
  );
}

export default App;
