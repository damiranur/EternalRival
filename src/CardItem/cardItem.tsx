import React from "react";
import { ResultItem } from "../models/search.model";
import "./cardItem.css"

interface PropsType {
  item: ResultItem;
}

interface StateType {
  img: string
}

export default class CardItem extends React.Component<PropsType, StateType> {

  constructor(props: PropsType) {
    super(props);

    this.state = {
      img: '',
    }
  }

  componentDidMount() {
    this.setImg();
  }

  setImg() {
    fetch(this.props.item.url)
      .then(response => response.json())
      .then((response) => {
        this.setState({
          ...this.state, 
          img: response.sprites.other['official-artwork'].front_default
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
        { this.props.item.name }
      </div>
    )
  }
}