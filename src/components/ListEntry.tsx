import React from "react";
import { Pokemon } from "../types/pokemon";
import { SHINY_SPRITE_URL, NORMAL_SPRITE_URL } from "../config/api";

interface IListEntryProps {
  pokemon: Pokemon;
  getPokemonDetails: (pokemon: Pokemon) => Promise<void>;
}

const ListEntry = (props: IListEntryProps) => {
  const { pokemon, getPokemonDetails } = props;

  /**
   * Fetches a sprite for the pokemon
   * @param isShiny Determines whether to fetch a shiny or not shiny sprite
   */
  const getSprite = (isShiny: boolean) => {
    const id = pokemon.url.split("/")[6];

    return isShiny
      ? `${SHINY_SPRITE_URL}/${id}.png`
      : `${NORMAL_SPRITE_URL}/${id}.png`;
  };

  return (
    <div
      key={pokemon.name}
      className="pokemon-entry"
      onClick={() => getPokemonDetails(pokemon)}
    >
      <img
        src={getSprite(false)}
        alt={pokemon.name}
        onMouseOver={e => {
          e.currentTarget.src = getSprite(true);
        }}
        onMouseOut={e => (e.currentTarget.src = getSprite(false))}
      />
      <h3 className="pokemon-name">{pokemon.name}</h3>
    </div>
  );
};

export default ListEntry;
