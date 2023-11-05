import { useEffect, useState } from "react";
import { ResultItem } from "../models/search.model";
import { PokemonDescription, StatType } from "../models/pokemon.model";
import "./cardItem.css";

interface PropsType {
  item: ResultItem;
}

interface StateType {
  img: string;
  stats: StatType[];
}

export default function CardItem(props: PropsType) {
  const [state, setState] = useState<StateType>({
    img: "",
    stats: [],
  });


  useEffect(() => {
    fetch(props.item.url)
    .then((response) => response.json())
    .then((response: PokemonDescription) => {
      setState((prevState) => ({
        ...prevState,
        img: response.sprites.other["official-artwork"].front_default,
        stats: response.stats,
      }));
    });
  }, [props.item.url]);

  return (
    <div
      className="card-pokemon"
      key={props.item.name + props.item.url}
    >
      <img src={state.img} alt={props.item.name} />
      <div>
        <span>{props.item.name}</span>
        <div className="pokemon-stats">
          {state.stats.map((i) => {
            return (
              <span key={i.stat.url}>
                {i.stat.name}: {i.base_stat}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
