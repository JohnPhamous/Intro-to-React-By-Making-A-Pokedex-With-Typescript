import React from "react";
import { Pokemon } from "../types/pokemon";
import ListEntry from "./ListEntry";

interface IListProps {
  allPokemon: Pokemon[];
  getPokemonDetails: (pokemon: Pokemon) => Promise<void>;
}

const List = (props: IListProps) => {
  const { allPokemon, getPokemonDetails } = props;

  return (
    <section id="pokemon-list">
      {allPokemon.map(pokemon => (
        <ListEntry
          key={pokemon.name}
          pokemon={pokemon}
          getPokemonDetails={getPokemonDetails}
        />
      ))}
    </section>
  );
};

export default List;
