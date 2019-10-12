import React from "react";
import { Pokemon } from "../types/pokemon";

interface IDetailsProps {
  selectedPokemon?: Pokemon;
  selectedPokemonGif: string;
}

const Details = (props: IDetailsProps) => {
  const { selectedPokemon, selectedPokemonGif } = props;

  if (!selectedPokemon) return null;

  return (
    <div id="pokemon-detail">
      <hr />

      <h2 className="pokemon-name">{selectedPokemon.name}</h2>
      <img src={selectedPokemonGif} alt={`${selectedPokemon.name} gif`} />

      <table className="stats-table">
        <tbody>
          <tr>
            <td>Height</td>
            <td>{selectedPokemon.height}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{selectedPokemon.weight}</td>
          </tr>
          <tr>
            <td>Types</td>
            <td>
              {selectedPokemon.types.map((type: any) => (
                <span key={type.type.name} className="type">
                  {" "}
                  {type.type.name}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      <hr />
    </div>
  );
};

export default Details;
