import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-barber-bg text-barber-text">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default App;