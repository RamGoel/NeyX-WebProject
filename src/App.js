import React from 'react';
import './style.css';
import HomePage from './components/Home/HomePage';
import NavBar from './components/NavBar/NavBar';
import Working from './components/Working/Working';
import Features from './components/Features/Features';
import Facts from './components/Facts/Facts';
import Explore from './components/Explore/Explore';
import FAQ from './components/FAQ/FAQ';

import 'bootstrap/dist/css/bootstrap.min.css';
let data = {
  explore1: {
    title: 'Monitor the Magic',
    text: 'Your customers are haggling now. You got to watch somewhere and believe about the e-commerce 2.0. So, what’s better than our handsome looking dynamic dashboard? Monitor each sale made through NeyX with the dashboard, not only that, watch the numbers increasing, analytics, the reviews people are giving you as a thanks for adding bargaining in your store. All things aside, you need a place, where you can watch your profits increasing, so here you go',
    url: 'https://i.ibb.co/W6Z8TnP/Screenshot-2022-05-20-at-01-41-22-Figma.png',
    btnText: 'Explore Now',
    position: 'd-flex ',
  },
  explore2: {
    title: 'Smart inventories manage',
    text: 'While you have thousands of products you can’t set price range for every one of them individually. We got you covered there too. Solution? Smart inventory management of NeyX. You can set minimum prices for all your products at once with respective filters. Also, by category wise and if you want you can set up for individually too. We don’t stop there yet. You also get to set the bargaining behaviour too. Depends on occasion, or just your mood, you can control how much you want the people to bargain.',
    url: 'https://i.ibb.co/bF0wxm5/Screenshot-2022-05-20-at-01-41-22-Figma.png" alt="Screenshot-2022-05-20-at-01-41-22-Figma',
    btnText: 'Get NeyX',
    position: 'd-flex flex-row-reverse',
  },
};
export default function App() {
  return (
    <div className="homePageMain">
      <NavBar />
      <HomePage />
      <Working />
      <Features />
      <Facts />
      <Explore data={data.explore1} />
      <Explore data={data.explore2} />
      <FAQ />
    </div>
  );
}
