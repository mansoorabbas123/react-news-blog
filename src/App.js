import './app.css';
import { Routes } from './routes';
import { useState, useEffect } from 'react';
import React from 'react';
export const MyContext = React.createContext();
const Provider = MyContext.Provider;

function App() {
  const [content, setContent] = useState([]);
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(`https://newsapi.org/v2/sources?technology&country=us&apiKey=9ecd732cbfa94c4193ea1db647070b44`);
      const data = await res.json();
      const sources = data.sources;

      setCategories([...new Set(data.sources.map(c => c.category))])
      setContent(sources);

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const data = {
    content, categories
  }

  return (
    <Provider value={data}>
      <Routes />
    </Provider>);
}

export default App;
