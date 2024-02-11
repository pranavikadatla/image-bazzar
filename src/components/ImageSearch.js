import React ,{useState,useEffect} from "react";
import axios from "axios";
const ImageSearch=({setImageList})=>{
    const [searchQuery, setSearchQuery]=useState('')
useEffect(()=>{
    handleSearch()
},[])
    function handleSearch(e){
       e && e.preventDefault();
        console.log(searchQuery)
        axios.get("https://api.unsplash.com/search/photos",
        {
            headers :{
                "Accept-Version":"v1",
                "Authorization":`Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
            },
            params:{
                query:searchQuery||'random'
            }
        })
        .then((response)=>{
            console.log(response.data);
            setImageList(response.data.results)
        })
        .catch((err)=>{
            console.log(err)
        }) 

    }
    return(
        <div>
          <form onSubmit={handleSearch}> 
            <input type="text" placeholder="Enter Search"
            value={searchQuery}
            onChange={e=>setSearchQuery(e.target.value)}/>
            <button type="submit">Search</button>
          </form>
        </div>
    )
}
export default ImageSearch