import React, { useEffect, useState } from 'react'

const cityName = ["Pune", "Mumbai", "Goa", "Delhi", "Wardha", "Yavatmal", "Sangli", "Satara", "Solapur", "Kolhapur","Ahmednagar","Dhule","Jalgaon","Nandurbar","Nashik"]
const WeatherApp = () => {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(false);
    const [city, setCity] = useState('Pune');
    
    const weatherApi = `http://api.weatherapi.com/v1/current.json?key=bc03d1f21b9b4fea80b74349260802&q=${city}&aqi=no`
    // `http://api.weatherapi.com/v1/current.json?key=bc03d1f21b9b4fea80b74349260802&q=${city}&aqi=no`
    
    const getWeather = async () => {
        try {
            setLoader(true);
            const response = await fetch(weatherApi);
            const result = await response.json();
            setData(result)
            timetoint(result?.current.last_updated_epoch)
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false);
        }
    }
    function timetoint(epochSeconds) {
        const date = new Date(epochSeconds * 1000);
        const hour = date.getHours(); // 0–23
        console.log(hour);
    }
    useEffect(() => {
        getWeather();

    }, [city])

    return (
        <>
            <div className="w-120 h-150 flex flex-col justify-between flex-wrap  items-center p-10 ml-180 mt-20 rounded-4xl border-4 border-green-500 shadow-2xl bg-amber-100 ">
                <h1 className="text-5xl font-bold text-green-800">Weather App</h1>
                <select className="px-4 rounded-lg text-xl border-2 border-rose-400 " name="city" id="city" onChange={(e) => setCity(e.target.value)}>
                    <option disabled value="">Choose city</option>
                    {cityName.map((cName, i) => (
                        <option key={i} value={cName}>
                            {cName}
                        </option>
                    ))}
                </select>
                {
                    loader
                        ?
                        <h1 className="text-xl">Loading..... </h1>
                        :
                        <>
                            <div className="bg-cyan-200 rounded-xl p-3 shadow-lg text-center ">
                                <h1 className="text-3xl font-bold underline text-rose-600">{data?.location.name} </h1>
                                <h1 className="text-xl font-semibold">{data?.location.region} </h1>
                                <h1 className="text-xl font-semibold">{data?.location.country}</h1>
                            </div>
                            <div className="text-2xl m-2 text-center text-amber-700">
                                {Date(data?.current.last_updated_epoch)}
                                <img className="mx-auto w-20 h-20 animate-bounce" src={data?.current.condition.icon} alt={data?.current.text} />
                                <p className="text-3xl font-semibold text-blue-500"style={{textShadow: "10px red" }}>{data?.current.condition.text}</p>
                            </div>
                        </>
                }
            </div>
        </>
    )
}
export default WeatherApp