import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";

class App extends Component{
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.search.value)
    }
    render() {
        return (
            <div>
            <Searchbar onSubmit={this.onSubmit} />
            </div>
        )
    }
}
export default App;