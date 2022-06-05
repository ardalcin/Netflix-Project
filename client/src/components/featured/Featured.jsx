import "./featured.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span> {type==="movie" ? "Movies" : "Series"} </span>
                <select name="genre" id="genre">
                    <option >Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentery">Documentery</option>
                </select>
            </div>
        )}
     <img 
      src="https://images4.alphacoders.com/982/thumb-1920-982360.jpg" 
           alt="" 
           />
           <div className="info">
               <img src="https://marka-logo.com/wp-content/uploads/2020/05/Stranger-Things-Logo.png" 
               alt="" 
               />
               <span className="desc">
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                   Omnis totam maiores in autem ad minima rerum eligendi, tempora cupiditate. Tempora ea ipsam quasi dolor velit eius ratione harum voluptatum saepe.
               </span>
               <div className="buttons">
                   <button className="play">
                        <PlayArrowIcon/>
                        <span>Play</span>
                   </button>
                   <button className="more">
                   <InfoOutlinedIcon/>
                   <span>Info</span>
                   </button>
               </div>
           </div>
    </div>
  )
}

export default Featured
