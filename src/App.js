
import './App.css';
import index from './index.css'

import { useEffect, useState } from "react";

const App = () => {
  const [updates, setNewupdates] = useState([]);
  const [search, setSearchQuery] = useState('react');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=react');


  const findnews = () => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${search}`)
      .then(res => res.json())
      .then(data => setNewupdates((data.hits)))
      .catch(err => console.log(err));

  }
  const makeChange = (e) => {
    setSearchQuery(e.target.value)
  }
  const handleIinput = (e) => {
    e.preventDefault();
    setUrl(`https://hn.algolia.com/api/v1/search?query=${search}`)
  }

  useEffect(() => {
    findnews();
  }, [url])

  return (
    <div>
      <h1>News App Project</h1>
      <form onSubmit={handleIinput}>
        <input type="text" value={search} onChange={makeChange}></input>
        <button>Click</button>
      </form>

      {updates.map((n, i) => (
        <div className="content"><p key={i}>{n.title}</p></div>

      ))}
    </div>
  )

}





export default App;
