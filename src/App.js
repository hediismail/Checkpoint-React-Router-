import React from 'react';
import { useState } from 'react';
import { data } from "./data.js";
import './App.css';
import MovieList from "./components/movieList/movieList";
import Filter from "./components/search/search";
import AddButton from "./components/addButton/addButton";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDetail from "./movieDeatail/movieDetail";
function App() {
  const [items, setItems] = useState(data);
  const [search, setSearch] = useState('');
  const [rate, setRate] = useState('');
  const handleAdd = (title, description, url, rate) => {
    if (title !== '' & description !== '' & url !== '' & rate < 6)
      setItems([...items, { id:Math.random() , title: title, description: description, posteUrl: url, rate: rate }]);
  };
  return (
    <BrowserRouter>
      <div className="App">

        <Filter setSearch={setSearch} setRate={setRate} />

        <Switch>
          <Route path="/detail/:id" component={MovieDetail} />
          <Route exact path='/'>
            <div>
              <AddButton handleAdd={handleAdd} />
              <MovieList list={items} search={search} rate={rate} />
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
