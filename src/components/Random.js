import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';



const API_KEY = 'clsEhpPNeLv8GZWx3cHLxIm7zmgQK7FS';
const Random = () => {

    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState('false')

    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);

    // }

    // useEffect( ()=> {
    //     fetchData();
    // },[])

    const {gif, loading, fetchData} = useGif();

    function clickHandler(){
        fetchData();
    }

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col  items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random GIF</h1>
        {
            loading? (<Spinner/>) : (<img src={gif} alt="gif" width='450'/> )
        }
        <button
        className='mb-[20px] w-10/12 bg- bg-white opacity-[60%] text-lg py-2 rounded-lg'
        onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}

export default Random