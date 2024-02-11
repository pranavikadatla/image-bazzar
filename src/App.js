import React,{useState} from "react";
import ImageSearch from "./components/ImageSearch"
import ImageGallery from "./components/ImageGallery";

const App=()=>{
  const [imageList,setImageList]=useState([])
  return(
    <div>
      <h1>Image Bazzar</h1>
      <ImageSearch setImageList={setImageList}/>
      <ImageGallery imageList={imageList}/>
    </div>
  )
}

export default App;
