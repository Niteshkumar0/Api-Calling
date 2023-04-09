import React,{useEffect} from 'react'


let Api = () => {
    let api = `https://hn.algolia.com/api/v1/search?query=html`;

    let fetchApi =  async (url) => {
        try {
            let res = await fetch(url);
            let data  = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        fetchApi(api)
    },[])    

    return(
        <>
        </>
    )
}
export default Api