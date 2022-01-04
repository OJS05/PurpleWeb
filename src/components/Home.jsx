import React from 'react';
import Header from './Header';
import Trifold from './Trifold';
import Slideshow from './Slideshow';
import Footer from './Footer';

function Home(){
    return (
        <div>
            <Header />
            <Trifold />
            <Slideshow />
            <Footer />
        </div>
    );
}

export default Home;