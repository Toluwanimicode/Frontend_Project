import React from 'react'
import Navigation from '../../Navigation/Navigation';
import ImageGrid from '../../Grid/Grid';
import "../Gallery/Gallery.css"

const Gallery = () => {

  return (
    <>
        <div className='gallery-intro'>
            <h3>Welcome to our vibrant gallery, where the spirit of creativity comes to life. </h3>
            <p>Explore a visual journey showcasing the diverse talents and artistic excpressions of our students, capturing the essence of our dynamic secondary school community</p>
        </div>
        <div>
            <ImageGrid />
        </div>
    </>
  )
}

export default Gallery;