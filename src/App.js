import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, InputGroup, FormControl, Button } from 'react-bootstrap';

const App = () => {

  const APP_ID = "96300403";
  const APP_KEY = "7432cb0ab890b3b024d7a149647615a7";

  const [recipies, setRecipies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chips");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipies(data.hits);
  }

  const updateSearch = event => {
    setSearch(event.target.value);
  }

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Food Sense</Navbar.Brand>
      </Navbar>
      <Container style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="What do you like to eat?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={updateSearch}
            // value={search}
          />
          <InputGroup.Append>
          {search && <Button variant="outline-primary" onClick={getSearch}>Button</Button>}
            {/* <Button variant="outline-primary" onClick={getSearch}>Button</Button> */}
          </InputGroup.Append>
        </InputGroup>

      </Container>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {recipies.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            nameOfTheRecipe={recipe.recipe.label}
            imageOfTheRecipe={recipe.recipe.image}
            videoURL={recipe.recipe.url}
            ingredientLines={recipe.recipe.ingredientLines} />
        ))}
        {recipies.length === 0 && <h3>
          Nothing to Show. Sorry !
        </h3>}
      </div>
    </div>
  )
}

export default App

