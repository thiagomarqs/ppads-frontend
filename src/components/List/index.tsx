import React from "react";
import ListItem from "./ListItem";
import { ListProps } from "./ListProps";

class List extends React.Component<ListProps> {
  
  render() {
    return (
      <ul>{this.props.items.map((i, index) => <ListItem key={index} title={i.title} link={i.link}/>)}</ul>
    )
  }
}

export default List;