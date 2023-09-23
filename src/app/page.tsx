// Import necessary modules and components
import React from 'react';
import Hero from './components/Hero';
import Sales from './components/Sales';
import {
  heroapi,
  highlight,
  popularsales,
  story,
  sneaker,
  toprateslaes,
  footerAPI,
} from './data/data';
import FlexContents from './components/FlexContents';
import Stories from './components/Stories';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Cart />
      <div className="flex flex-col gap-16 relative">
        <Hero heroapi={heroapi} />
        <Sales items={popularsales.items} title={popularsales.title} ifExists />
        <FlexContents content={highlight} ifExists />
        <Sales
          items={toprateslaes.items}
          title={toprateslaes.title}
          ifExists={false}
        />
        <FlexContents content={sneaker} ifExists={false} />
        <Stories story={story} />
      </div>
      <Footer titles={footerAPI.titles} links={footerAPI.links} />
    </main>
  );
}
