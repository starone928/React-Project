import { useEffect, useState } from 'react'

const NewsApp = () => {
    const [data, setData] = useState([])

    const newsApi = 'https://newsdata.io/api/1/latest?apikey=pub_ad3d3e3ab4a54482b8dc8546b9f2b183&q=pizza'

    const getNews = async () => {
        try {
            const apiData = await fetch(newsApi)
            const res = await apiData.json()
            setData(res.results);
            console.log(res.results)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <>
            <div class="flex justify-center flex-wrap gap-14">
                {
                    data.map((item, i) => {
                        return (
                            <div class=" " key={i}>

                                <div class="columns-1 max-w-sm  overflow-hidden  min-w-25 bg-lime-300 hover:scale-105 transition duration-1000 hover:bg-fuchsia-200  rounded-4xl border-t-4 border-t-green-500 shadow-2xl shadow-blue-800 ">
                                    <img class="w-full   border-pink-600" src={item.image_url} alt="Sunset in the mountains" />
                                    <div class="px-6 py-4">
                                        <div class="font-bold text-xl mb-2 text-blue-800">{item.title}</div>
                                        <p class="text-gray-700 text-base justify-center">{item.description}</p>
                                    </div>
                                    <div class="px-6 pt-4 pb-2">
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><span class="text-orange-800 text-1xl font-bold">Date:-</span> &nbsp;{item.pubDate}</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.language}</span>
                                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item.datatype}</span>
                                    </div>
                                    <div class="m-2 p-2 ">
                                        <span class="text-2xl font-bold"><span class="text-orange-800 text-2xl font-bold">Category:-</span> {item.category}</span>
                                        &nbsp; &nbsp; &nbsp;
                                        <span class="text-2xl font-bold"><span class="text-orange-800 text-2xl font-bold">Creator:-</span> {item.creator}</span>
                                        <br/>
                                        <span class="font-extrabold hover:text-orange-700"><span class="font-bold text-orange-700 text-2xl">Link:-</span> {item.link}</span>
                                        <p class=""><span class="text-orange-800 text-2xl font-bold">Id:-</span> {item.article_id}</p>
                                        <p class="font-bold"><span class="text-orange-800 text-2xl font-bold" >Title:-</span>{item.title}</p>
                                    </div>
                                </div>
                              
                            </div>
                        )
                    })
                }

            </div>
            {/* NewsApp
            C = create - post
            U = update - put
            R = read - get
            D = delete - delete

            req frontend ---- backend --- database

            200 
            401 402 403 404
            501 502 503 504 */}
        </>
    )
}

export default NewsApp