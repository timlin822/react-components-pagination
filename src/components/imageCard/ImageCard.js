import './ImageCard.css';

const ImageCard=({image})=>{
    return (
		<div className="image-card">
			<img src={image.url} alt="image" />
		</div>
    );
}

export default ImageCard;