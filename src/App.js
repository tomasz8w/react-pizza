import './App.css';
import Header from './Header'
import Footer from './Footer'
import Center from './Center'

function App() {

  const dataFile = require("./data.json");
  return (
    <div class="App">
      <Header />
      <Center data={dataFile}/>
      <Footer />
    </div>
    
  );
}

export default App;
