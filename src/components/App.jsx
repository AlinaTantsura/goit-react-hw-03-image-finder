import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import {fetchPictures} from "../API"
import ImageGallery from "./ImageGallery/ImageGallery";
import { Dna } from "react-loader-spinner";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button/Button";
import Container from "./Container.styled";

class App extends Component{
    state={
        imagesArray: [],
        searchValue: '',
        isLoad: false,
        page: 1,
        totalHits: 0,
    }
     onSubmit = (e) => {
         e.preventDefault();
         this.setState({ searchValue: e.target.elements.search.value });
    }
    handleClick = () => {
        let page = this.state.page;
        this.setState({ page: page += 1 });
    }
    async componentDidUpdate(_, prevState) {
        if (prevState.searchValue !== this.state.searchValue ) {
            this.setState({
                isLoad: true,
                page: 1});
            try {
                const resp = await fetchPictures(this.state.searchValue, this.state.page);
                console.log(resp.data.totalHits)
                this.setState({
                    imagesArray: resp.data.hits,
                    isLoad: false,
                    totalHits: resp.data.totalHits,
                })
                
            }
            catch(error) {
            }
        }
        
        if (prevState.page !== this.state.page) {
            try {
                const resp = await fetchPictures(this.state.searchValue, this.state.page);
                this.setState((prev)=>({imagesArray: [...prev.imagesArray, ...resp.data.hits]}))
            }
            catch(error) {
            }
        }
    } 

    
    render() {
        return (
            <Container>
                {this.state.isLoad &&(<Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>)}
                <Searchbar onSubmit={this.onSubmit} />
                <ImageGallery >
                    <ImageGalleryItem array={this.state.imagesArray}/>
                </ImageGallery>
                {(this.state.imagesArray.length < this.state.totalHits) && (
                    <Button onClick={this.handleClick} />
                )}
            </Container>
        )
    }
}
export default App;