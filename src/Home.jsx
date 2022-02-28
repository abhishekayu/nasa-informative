import Earth_Background from './img/Earth_Background.mp4';
import "./Home.css"
import { useState } from "react";
import ImagePre from './ImagePre';

export default function Home() {
  const [search, setSearch] = useState("");
  const [photos, setPhotos] = useState([]);
  // useEffect(()=>{
  //   async function getd(){
  //     const results = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${search}`);
  //     const previews = await results.json();
  //     setPhotos(previews.collection.items);
  //   }
  //   getd()
  // });
  return (
    <div className="Home">
              <video className="Video_Background" autoPlay loop muted>
              <source src={Earth_Background} type="video/mp4"/>
          </video>
          <h1 className="TitleHome">Hello, earthlings!</h1>
          <p className="PHome">
              Here you can find photos of our planet, the other planets and galaxies too!
          </p>
          <div className='tit'>
          <input
             className="SearchBarHome"
              id="nasaSearch"
              autoComplete="off"
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for an image"
            ></input>
            <button
            className="button"
             onClick= {
              async () => {
                if(search == ""){
                  setPhotos([])
                }
                else{
                  const results = await fetch(
                    `https://images-api.nasa.gov/search?media_type=image&q=${search}&page=2`
                  );
                  const previews = await results.json();
                  setPhotos(previews.collection.items.slice(0, 15));
                }
                }
            }>
              Search
            </button></div>

            <div className='frame'>
            {
              
              photos.map((pre) =>
              <ImagePre
              key={pre.data[0].title}
              nasap={pre.links[0].href}
              title={pre.data[0].title}
              description={pre.data[0].description}
              />

              )
            }
            </div>
            </div>

  )
}
