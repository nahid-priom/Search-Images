import { ImageShow } from "./ImageShow";
import './imagelist.css';

export const ImageList = ({images})=> {
    const renderedImage = images.map((image)=>{
        return <ImageShow key={image.id} image = {image} />
    });
    return(
        <div className="image-list">{renderedImage}</div>
    );
}