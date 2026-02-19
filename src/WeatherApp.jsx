import React, { useEffect, useState } from 'react'

const cityName = [
    {
        name: "Pune",
    },
    {
        name: "Mumbai",
    },
    {
        name: "Goa"
    },
    {
        name: "Delhi"
    },
    {
        name: "Yavatmal"
    }
]

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
            <div className="flex w-full justify-center p-6 flex-col">
                <h1 className='flex justify-center'>Weather App</h1>

                <select className="max-w-xl mx-auto py-3 px-4 pe-9 border block w-full m-6" name="city" id="city" onChange={(e) => setCity(e.target.value)}>
                    <option disabled value="">Choose city</option>
                    {cityName.map((cName, i) => (
                        <option key={i} value={cName.name}>
                            {cName.name}
                        </option>
                    ))}
                </select>
                {
                    loader
                        ?
                        <h1 className='flex items-center justify-center w-full h-[90vh] text-2xl font-bold'>
                            Loading.....
                        </h1>
                        :
                        <>
                            <div className='flex item-center gap-2'>
                                <h1 className='text-xl text-gray-800'>{data?.location.name}, </h1>
                                <h1 className='text-xl text-gray-800'>{data?.location.region}, </h1>
                                <h1 className='text-xl text-gray-800'>{data?.location.country}</h1>
                            </div>
                            <div>
                                {Date(data?.current.last_updated_epoch)}
                                <img src={data?.current.condition.icon} alt={data?.current.text} />
                                <p>{data?.current.condition.text}</p>
                            </div>
                        </>

                }
            </div>
        </>
    )
}

export default WeatherApp