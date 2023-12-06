import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import {fetchPictures} from "../API"
import ImageGallery from "./ImageGallery/ImageGallery";
import { Dna } from "react-loader-spinner";

class App extends Component{
    state={
        imagesArray: [],
        searchValue: '',
        isLoad: false,
    }
     onSubmit = (e) => {
         e.preventDefault();
         this.setState({searchValue:e.target.elements.search.value})
    }
    async componentDidUpdate(_, prevState) {
        if (prevState.searchValue !== this.state.searchValue) {
        this.setState({ isLoad: true });
        try {
        const resp = await fetchPictures(this.state.searchValue, '1');
            console.log(resp.data.hits);
        this.setState( {imagesArray: resp.data.hits, isLoad: false})
    }
    catch(error) {
    }}
    } 
    render() {
        return (
            <div>
                {this.state.isLoad &&(<Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>)}
                <Searchbar onSubmit={this.onSubmit} />
                <ImageGallery array={this.state.imagesArray}></ImageGallery>
            </div>
        )
    }
}
export default App;