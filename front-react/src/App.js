import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import Header from './components/header';
import Books from './components/books';
import Authors from './components/authors';
import Topics from './components/topics';

function App() {
  return (
    <div className="container">
      <Header />
      <Tabs
        defaultActiveKey="books"
        className="mb-3"
      >
        <Tab eventKey="books" title="Livros">
          <Books />
        </Tab>
        <Tab eventKey="authors" title="Autores">
          <Authors />
        </Tab>
        <Tab eventKey="topics" title="Assuntos">
          <Topics />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
