import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import { Authors } from './components/tabs/authors';
import { Books } from './components/tabs/books';
import { Topics } from './components/tabs/topics';
import { Header } from './components/ui/header';

export const Main = () => {
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
