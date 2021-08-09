import React from 'react';
import Navbar from '../components/Navbar';
import LeftNav from '../components/LeftNav';
import Enfant from '../components/exemple/Enfant';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <LeftNav />

            <Enfant/>
        </div>
    );
};

export default Home;