import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { Footer } from './layout/footer/Footer';
import { Gotopbtn } from './components/gotobtn/Gotopbtn';




function App() {
    return (
            <>
            <Header />
            <Main />
            <Footer />
            <Gotopbtn/>
            </>



    );
}

export default App;

