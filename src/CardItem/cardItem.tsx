import React from "react";
import { ResultItem } from "../models/search.model";
import "./cardItem.css"

interface PropsType {
  item: ResultItem;
}

interface StateType {
  img: string;
  stats: StatType[];
}

interface StatType {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export default class CardItem extends React.Component<PropsType, StateType> {

  constructor(props: PropsType) {
    super(props);

    this.state = {
      img: '',
      stats: []
    }
  }

  componentDidMount() {
    this.setData();
  }

  setData() {
    fetch(this.props.item.url)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          ...this.state, 
          img: response.sprites.other['official-artwork'].front_default,
          stats: response.stats
        });
      });
  }

  render() {
    return (
      <div
        className="card-pokemon"
        key={this.props.item.name + this.props.item.url}
      >
        <img src={this.state.img} alt={this.props.item.name} />
        <div>
          <span>{ this.props.item.name }</span>
          <div className="pokemon-stats">
            {this.state.stats.map((i) => {
              return (
                <span key={i.stat.url}>{ i.stat.name }: { i.base_stat }</span>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}