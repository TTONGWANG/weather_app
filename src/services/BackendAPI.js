import axios from 'axios'

const BackendAPI = {
    fetchWeather: async (city)=>{
        // console.log(city)
        // if(city !== undefined){
        
        let api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=42c9a2f1315e0d41fa91334dc25969f6`;
        // await axios.get(api).then(res=>{
        //     const data = res.data
        //     console.log(data)
        //     return data
        // })
        let res = await axios.get(api)
        // console.log(api)
        return res.data
    }    
    
}

export default BackendAPI;