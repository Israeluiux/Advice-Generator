import "./Advice.css"
import { useEffect, useState } from "react"
import axios from "axios" 

export default function Advise(){
    const [advise, setAdvise] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    const fetchData = async () => {
        try {
            let thedata = await axios.get("https://api.adviceslip.com/advice");
            setAdvise(thedata.data)
            setLoading(false)
            setError(null)
        } catch (error) {
            console.log(error)
            setAdvise(null)
            setError(error)
            // setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const getAdvise = () => {
        fetchData()
    }

    return(
        
        <div className="advise-container">
            <div className="container">
                <div className="top">
                    <div className="heading">Advice Generator</div>
                    <div className="hr"></div>
                {error && <div className="error">There was an error, dont worry it wasn't not your fault</div>}
                </div>
                {loading == true ? <div className="load">Loading...</div> : 
                <>
                <div className="adviseid">{advise.slip.id}</div>
                <div className="body">
                    {advise.slip.advice} 
                </div>
                </>}
                <button className="cto" onClick={getAdvise}>Generate Advise</button>
            </div>
        </div>
    )
}
