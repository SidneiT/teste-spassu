import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { Modal } from './components/ui/modal';
import { ContextWrapper } from './context';
import { Main } from './main';
import { Alert } from './components/ui/alerts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextWrapper>
    <Main />
    <Modal />
    <Alert />
  </ContextWrapper>
);
