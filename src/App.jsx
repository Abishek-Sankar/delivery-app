import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import HeadlineCard from './components/HeadlineCard';
import Food from './components/Food';
import Category from './components/Category';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
      <Footer />
    </div>
  );
};

export default App;
