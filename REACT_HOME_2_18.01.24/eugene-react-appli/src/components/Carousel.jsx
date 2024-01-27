import React, { useState } from 'react';

const Thumbnails = ({ images, current, onChange }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {images.map((image, index) => (
                <div key={index}>
                    <img
                        src={image}
                        alt={`Thumbnail № ${index + 1}`}
                        onClick={() => onChange(index)}
                        style={{
                            width: '100px',
                            height: '50px',
                            margin: '0 5px',
                            border: index === current ? '2px solid red' : 'none'
                        }}
                    />
                </div>
            ))}
        </div>
    )
}

const Carousel = ({ images }) => {

    const [currentImage, setCurrentImage] = useState(0);

    const handleChange = (index) => {
        setCurrentImage(index);
    };

    const handleImageClick = (event) => {
        const { offsetX, target } = event.nativeEvent;
        const { width } = target.getBoundingClientRect();
        if (offsetX < width / 3) {
            setCurrentImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
        } else if (offsetX > (2 * width) / 3) {
            setCurrentImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Carousel</h2>
            <div>
                <img
                    src={images[currentImage]}
                    alt={`image ${currentImage + 1}`}
                    style={{
                        height: '500px',
                        width: 'auto',
                    }}
                    onClick={handleImageClick}
                />
            </div>
            <Thumbnails images={images} current={currentImage} onChange={handleChange} />
        </div>
    );
};

export default Carousel;