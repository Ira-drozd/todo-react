import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import {TodoPage} from "./pages/TodoPage";
import {AboutPage} from "./pages/AboutPage";

// import logo from './logo.svg';
// import './App.css';


const App: React.FC = () => {


    return <BrowserRouter>
        <Navbar/>
        <div className="container">
<Switch>
    <Route component={TodoPage} path='/' exact />

    <Route component={AboutPage} path='/about' />
</Switch>
        </div>
    </BrowserRouter>
}

// function App() {
//   return (
//       <h1>Main</h1>
//   );
// }

export default App;
