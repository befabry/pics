import React from "react";

const ImageList = (props) => {
    const { images } = props;

    const imageList = images.map((image) => {
        return <img src={image.urls.regular} key={image.id} alt={image.description} />;
    });

    return <div>{imageList}</div>;
};

export default ImageList;
