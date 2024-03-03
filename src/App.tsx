import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/main/Main';
import { Footer } from './layout/footer/Footer';
import { Container } from './components/Container';




function App() {
    return (
            <Container>
            <Header />
            <Main />
            <Footer />
            </Container>




    );
}

export default App;

