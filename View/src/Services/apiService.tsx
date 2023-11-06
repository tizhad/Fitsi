import axios from 'axios';
import {Restaurant} from "../Models/Restaurant";


const BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

const apiService = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export const submitFormData = async (formData: any): Promise<any> => {
    try {
        const response = await apiService.post('/reservations', formData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to submit form data');
    }
};

export const getAllRestaurants = async (): Promise<Restaurant[]> => {
    try {
        const response = await apiService.get('/restaurants');
        return response.data;
    } catch (error) {
        throw new Error('Failed to get restaurants!');
    }
};

export default apiService;
