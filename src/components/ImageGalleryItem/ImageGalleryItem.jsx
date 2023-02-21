import PropTypes from 'prop-types';
import { ImgGalleryItem, ImgGalleryItemImage } from "./ImageGalleryItem.styled";

const ImageGalleryItem = ({webformatURL, largeImageURL, tags, onClick,}) => (
  <ImgGalleryItem
        onClick={() => { onClick(largeImageURL);}} >
    <ImgGalleryItemImage src={webformatURL} alt={tags} />
  </ImgGalleryItem>
);


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


export default ImageGalleryItem;
