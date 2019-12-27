const API_URL = 'http://api.weatherbit.io/v2.0/forecast/daily?key=b98eda624dda452f9459a883922ee87e&units=I&postal_code=27601&country=US';

export async function getWeatherAtLocation(zipcode){
    console.log(`getWeatherAtLocation: ${API_URL}&postal_code=${zipcode}&country=US`)
    //return fetch(`${API_URL}&postal_code=${zipcode}&country=US`)
    return fetch(API_URL)
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
}