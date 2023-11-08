import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

const reservationService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getRestaurant = async (restaurantId: number) => {
    try {
        const response = await reservationService.get(`/restaurants/${restaurantId}`)
        return response.data;
    } catch (err) {
        console.log(err)
    }
}

