import React, { useState, useEffect } from 'react';
import "../styles/Mentors.css";
function Mentors() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        try {
            const fetchImages = async() => {
                const request = new Request('http://localhost:8080/cors', {
                    headers: new Headers({
                        'Accept': 'application/json'
                    }),
                    method: 'GET'
                });
                const response = await fetch(request);
                const data = await response.json();
                setImages(data);
            }
            fetchImages();
        } catch (error) {
            console.log(error);
        }
    }, []);
    console.log(images);
    const leftPositions= new Array(images.length);
    leftPositions.push(`40px`);
    leftPositions.push(`290px`);
    leftPositions.push(`62px`);
    leftPositions.push(`533px`);
    leftPositions.push(`772px`);
    leftPositions.push(`915px`);
    leftPositions.push(`1157px`);
    leftPositions.push(`1097px`);
    leftPositions.push(`1338px`);
    console.log(leftPositions);
    const topPositions= new Array(images.length);
    topPositions.push(`277px`);
    topPositions.push(`407px`);
    topPositions.push(`602px`);
    topPositions.push(`542px`);
    topPositions.push(`647px`);
    topPositions.push(`480px`);
    topPositions.push(`647px`);
    topPositions.push(`356px`);
    topPositions.push(`336px`);
    return (
        <div className='mentorscontainer'>
            <div className="bubbles">
                {images.map((image, index) => (
                    <>
                    <div className='bubble' id={`bubble-${index}`} key={index} style={{ left:` ${leftPositions[9+index]}`, top:`${topPositions[9+index]}`, backgroundImage:`url(${image})` }} />
                    <div className="line" key={index}></div>
                    </>
                ))}
            </div>
        </div>
    );
}

export default Mentors;
