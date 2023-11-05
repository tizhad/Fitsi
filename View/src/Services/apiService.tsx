import axios from 'axios';
import {Restaurant} from "../Models/Restaurant";


const apiService = axios.create({
    // baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const submitFormData = async (formData: any): Promise<any> => {
    try {
        const response = await apiService.post('/api/reservations', formData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to submit form data');
    }
};

export const getAllRestaurants = async (): Promise<Restaurant[]> => {
    try {
        const response: Restaurant[] = await apiService.get('/api/restaurants');
        return response;
    } catch (error) {
        throw new Error('Failed to get restaurants!');
    }
};

export default apiService;
