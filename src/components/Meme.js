import React from 'react'
import memesData from '../memesData'
function Meme() {
    const [memeImage, setMemeImage] = React.useState("https://i.imgflip.com/16iyn1.jpg")
  let url
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
  return (
    <main>
    <p>{url}</p>
    <div className="form">
        <input 
            type="text"
            placeholder="Top text"
            className="form--input"
        />
        <input 
            type="text"
            placeholder="Bottom text"
            className="form--input"
        />
        <button 
            className="form--button"
            onClick={getMemeImage}
        >
            Get a new meme image 🖼
        </button>
    </div>

    <div className="img-container">
        <div className='text1'><h1>text1</h1></div>
    <img className='meme-img' src={memeImage} alt="img" />
    <div className='text2'><h1>text2</h1></div>
    </div>
</main>
  )
}

export default Meme