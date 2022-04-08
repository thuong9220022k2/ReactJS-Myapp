import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  changeColor(){
    var title = document.getElementById("title");
    ReactDOM.findDOMNode(title).style.color = "red";
  }
  render(){
    return(
    <div>
      <h1 id="title">Tieu De</h1>
      <button onClick={() => this.changeColor()}>Change color</button>
    </div>
    )
  }
}
 
export default App;
