import React from 'react'
import "./Astro.css"
import { useEffect , useState} from 'react';
const My_Key_NASA = "exLhcO4Kmc3eWUy38Bgp7Lc1hAk5iieYpGs4Q8Hs";

export default function Astronomy() {
    const [photoData, setPhotoData] = useState([]);
    useEffect(() => {
        fetchPhotoDay();
  
        async function fetchPhotoDay() {
          const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${My_Key_NASA}`
          );
          const data = await res.json();
          setPhotoData(data);
        }
      }, []);
  return (
      <>
      <div className='astro'>{photoData.date}</div>
      <img className='astro_img'
      src={photoData.url}
      alt={photoData.title}/>
        <h1 className='astro_title' >{photoData.title}</h1>
        <br/> 
        <p className='astro_des'>{photoData.explanation}</p>
    </>

  )
}
   