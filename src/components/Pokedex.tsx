import React, { useState, useEffect } from "react";
import { POKEMON_API, GIPHY_API, GIPHY_API_KEY } from "../config/api";
import Details from "./Details";
import List from "./List";
import { Pokemon } from "../types/pokemon";
import "./Pokedex.css";

const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon>();
  const [selectedPokemonGif, setSelectedPokemonGif] = useState<string>("");

  useEffect(() => {
    async function fetchPokemon() {
      const data = await fetch(POKEMON_API);
      const allPokemonData = (await data.json())["results"];

      setAllPokemon(allPokemonData);
    }

    fetchPokemon();
  }, []);

  /**
   * Fetches more details for pokemon and a gif
   * @param pokemon The pokemon to fetch details for
   */
  const getPokemonDetails = async (pokemon: Pokemon) => {
    // Fetch details about the pokemon
    const pokemonDetails = await fetch(pokemon.url);
    const pokemonDetailsJson = await pokemonDetails.json();

    setSelectedPokemon(pokemonDetailsJson);

    // Prepare the request URL with our API key and the name of the Pokemon
    const GIPHY_REQUEST_URL = `${GIPHY_API}?api_key=${GIPHY_API_KEY}&q=${pokemonDetailsJson["name"]}`;

    // Make the request to Giphy
    const giphyData = await fetch(GIPHY_REQUEST_URL);
    const giphyJson = await giphyData.json();
    const gifUrl = giphyJson["data"][0]["images"]["original"]["url"];

    setSelectedPokemonGif(gifUrl);
  };

  return (
    <main id="pokedex-container">
      <h1>Pokedex</h1>

      <section id="pokemon-detail-container">
        <Details
          selectedPokemon={selectedPokemon}
          selectedPokemonGif={selectedPokemonGif}
        />
      </section>

      <List allPokemon={allPokemon} getPokemonDetails={getPokemonDetails} />
    </main>
  );
};

export default Pokedex;
