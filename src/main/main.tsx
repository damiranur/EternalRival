import React from "react";
import { ResultItem } from "../models/search.model";
import CardItem from "../CardItem/cardItem";
import "./main.css"

export default class Main extends React.Component<{list: ResultItem[]}> {
  render() {
    return  (
      <main className="main">
        {this.props.list.map((i) => {
          return (
            <CardItem key={i.name + i.url} item={i} />
          )
        })}
      </main>
    )
  }
}