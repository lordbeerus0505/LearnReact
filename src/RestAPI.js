import Axios from "axios"
import { useEffect, useState } from "react"
export const APIResponse = () => {
    const [factCat, setCatFact] = useState("")
    // Without use effect this will cycle infinite times
    useEffect(() =>{
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact)
        });
    }, [])// Will do it 2 times, not infinite times thanks to the []
    
    return (
        <div>
            <h1>Hello</h1>
            <p>{factCat}</p>
        </div>
    )
}