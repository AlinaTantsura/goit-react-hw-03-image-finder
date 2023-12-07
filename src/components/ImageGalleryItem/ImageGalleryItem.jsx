import Item from "./Item.styled";

const ImageGalleryItem = ({array}) => {
    return (
    <>
        {array.map(({ id, tags, webformatURL }) => (
               <Item key={id} > <img src={webformatURL} alt={tags} />
        </Item>
        ))}
    </>
    )
}
export default ImageGalleryItem;