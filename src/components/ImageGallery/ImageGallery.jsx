import Gallery from "./Gallery.styled";

const ImageGallery = ({array, children}) => {
    return (
        <Gallery>
            {array.map(({ id, tags, webformatURL }) => (
               <li key={id} > <img src={webformatURL} alt={tags} />
        </li>
           ))}
            {children}</Gallery>
    )
    
}
export default ImageGallery;