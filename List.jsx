import React, { Component } from 'react';
 class List extends Component {
renderList() {
 const items = this.props.items.map(item => {
 return <li key={item.name} id="list">{item.name}</li>
 });
 return items;
 }
 render() {
return (
 <ul>
 <br/>
 {this.renderList()}
 </ul>
 );
 }
}
export default List;