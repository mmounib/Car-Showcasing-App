// import axios from 'axios';
import axios from 'axios';
import {CarProps} from "@/types";

interface carOptions {
    manufacturer: string,
    model:string,
    fuel:string,
    year: number,
    limit: number,
}
const options = {
    method: 'GET',
    url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    params: {model: 'corolla'},
    headers: {
        'X-RapidAPI-Key': 'a9a142b421msha80555c588fc161p1071fejsn2bf648b1b953',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
};

try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}

export const fetchCars = async ({manufacturer, model, fuel, year, limit}: carOptions) => {
    const headers = {
        'X-RapidAPI-Key': 'a9a142b421msha80555c588fc161p1071fejsn2bf648b1b953',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await axios.get(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers
    })

    return response.data
}
export const generateCarUrl = (car: CarProps, angle?: string) => {

}