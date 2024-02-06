import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



const API_KEY = 'clsEhpPNeLv8GZWx3cHLxIm7zmgQK7FS';
const Tag = () => {
    const [tag, setTag] = useState('car');
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState('false')

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);

    // }

    // useEffect( ()=> {
    //     fetchData();
    // },[])

    const {gif, loading, fetchData} = useGif(tag);

    function clickHandler(){
        fetchData(tag);
    }

    function changeHandler(event){
        setTag(event.target.value)
    }

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col  items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>Random {tag} GIF</h1>
        {
            loading? (<Spinner/>) : (<img src={gif} alt="gif" width='450'/> )
        }


        <input type="text" 
        onChange={changeHandler}
        value={tag}
        className='w-10/12 bg-white opacity-[90%] text-lg py-2 rounded-lg mb-[3px] text-center' />

        <button
        className='mb-[20px] w-10/12 bg- bg-white opacity-[60%] text-lg py-2 rounded-lg'
        onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}

export default Tag