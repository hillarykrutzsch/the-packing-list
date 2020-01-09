import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.weatherbit.io/v2.0'
});

/*export async function getWeatherAtLocation(zipcode){
    return axios.get(API_URL)
        .then(resp => {
            if(!resp.ok){
                if(resp.status >= 400 && resp.status < 500){
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                }
                else{
                    let err = {errorMessage: 'Please try again later, server is not responding.'};
                    throw err;
                }
            } 
            return resp.json();
        });
}*/