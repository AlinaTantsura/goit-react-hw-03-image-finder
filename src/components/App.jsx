import { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import {fetchPictures} from "../API"
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import Button from "./Button/Button";
import Container from "./Container.styled";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

class App extends Component{
    state={
        imagesArray: [],
        searchValue: '',
        isLoad: false,
        page: 1,
        totalHits: 0,
        pictureId: null,
        isOpenModal: false,
    }
     onSubmit = (e) => {
         e.preventDefault();
         this.setState({ searchValue: e.target.elements.search.value });
    }
    handleClick = () => {
        let page = this.state.page;
        this.setState({ page: page += 1 });
    }
 
    componentDidUpdate(_, prevState) {
        if (prevState.searchValue !== this.state.searchValue ) {
            this.setState({
                isLoad: true,
                page: 1,
                imagesArray: [],
            });
            this.handleFetchPictures();
            
        }
        
        if (prevState.page !== this.state.page && this.state.page !==1) {
            this.handleFetchPictures();
        }
    } 
    handleFetchPictures = async() => {
        try {
            const resp = await fetchPictures(this.state.searchValue, this.state.page);
            // this.setState((prev)=>({imagesArray: [...prev.imagesArray, ...resp.data.hits]}))
            this.setState((prev)=>({imagesArray: [...prev.imagesArray, ...resp.data.hits.filter((item)=> (!this.state.imagesArray.find(({id})=> id === item.id)))]}))
            if (this.state.page === 1) {
                  this.setState({totalHits: resp.data.totalHits})
              }  
            }
        catch (error) {
            console.log(error.message);
        }
        finally{
            this.setState({
                isLoad: false,
            })
        }
    }
    handleOpenModal = ({currentTarget, target}) => {
        if(currentTarget === target) return
        const picId = this.state.imagesArray.find((item) => (item.id === Number(target.id)));
        console.log(picId);
        this.setState({
            pictureId: picId ,
            isOpenModal: true
        });
    }

    closeModal = (e) => {
        console.log(e)
        const { currentTarget, target } = e;
        if (currentTarget === target || e.key === "Escape") this.setState({ isOpenModal: false });
        return;
    }

    
    render() {
      const  { isLoad, imagesArray, totalHits, isOpenModal, pictureId } = this.state;
     
        return (
            <Container>
                <Searchbar onSubmit={this.onSubmit} />
                {isLoad ? (<Loader styles="left: 50%"/>) : (<>
                    <ImageGallery onClick={this.handleOpenModal}>
                        <ImageGalleryItem array={imagesArray} />
                    </ImageGallery>
                    {(imagesArray.length < totalHits) && (
                    <Button onClick={this.handleClick} />
                )}
                </>)}
                {isOpenModal && (<Modal pictureInfo={pictureId} closeModal={this.closeModal} />)}
            </Container>
        )
    }
}
export default App;