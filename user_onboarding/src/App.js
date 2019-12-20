import React from 'react';
import ReactDOM from "react-dom"
import './App.css';
import UserForm from "./components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Formik form for new-user
      </header>
      <section class= 'Form'>
        {UserForm()}
      </section>
    </div>
  );
}

export default App;
