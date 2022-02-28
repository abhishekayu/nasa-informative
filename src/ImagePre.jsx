import React, { useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Scroll from './Scroll'

export default function ImagePre({ nasap, title,description }) {
  
  
  const [show, setShow] = useState(false);
  return (
    <main className="grid">
    <div className="responsive" >  
    <div className="gallery">       
          <img src={nasap} className="Img_Grid"onClick={() => setShow(true)}/>
          <div className="desc">{title}</div> 
    </div>
    </div>
    
    <Modal show={show} 
    onClick={()=>setShow(false)}
    ><div className="modal">
    <div className="container-Modal">
    <img src={nasap}/>
          <h1 className="Title_Modal">{title}</h1>
          <p className="description_Modal">{description}</p>
          </div>
          </div>
      </Modal>
  </main>
  );
}
