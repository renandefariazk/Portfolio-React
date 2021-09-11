import React from 'react';
import '../css/app.css';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

function Home(){
    return(
        <>
            <Header></Header>
            <Main></Main>
            <Footer name="Renan de Faria"></Footer>
        </>
    )
}

export default Home;