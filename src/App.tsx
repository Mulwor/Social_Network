import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App(props: any) {
    return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header />
              <Navbar />

              <div className='app-wrapper-content'>
                  <Route path='/dialogs'
                         render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                  <Route path='/profile'
                         render={() => <Profile state={props.state.profilePage}/>}/>
              </div>

                  {/*
                   Router определяет набор маршрутов и, когда к приложению, приходит запрос, то Router выполняет сопоставление запроса с маршрутами.

                  path: шаблон адреса, с которым будет сопоставляться запрошенный адрес URL

                  */}
          </div>
      </BrowserRouter>)
}

export default App;
