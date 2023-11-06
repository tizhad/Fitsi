import React, {useEffect, useState} from 'react';
import apiService, {getAllRestaurants, submitFormData} from "../../Services/apiService";
import {Restaurant} from "../../Models/Restaurant";
import moment from 'moment';

interface ModalProps {
    onClose: () => void;
}

function Modal({onClose}: ModalProps) {
    const currentDate = new Date() ;
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

    const [formData, setFormData] = useState({
        people: 0,
        restaurant: '',
        date: moment(currentDate).format('YYYY-MM-DD'),
        time: moment(currentDate).format('HH:mm')
    });


    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        try {
            const restaurantsData: Restaurant[] = await getAllRestaurants();
            setRestaurants(restaurantsData);
        } catch (error) {
            console.error(error);
        }
    };

    const onSubmitForm = (e: any) => {
        console.log('on submit called')
        e.preventDefault();
        handleSubmit(formData);
    }


    // const getRestaurants = () => {
    //     getAllRestaurants().then((res: Restaurant[]) => {
    //             console.log(res, 'response ')
    //             restaurants = res;
    //         }
    //     )
    //     return restaurants
    //
    // }

    const handleChange = (e: any) => {
        const {name, value} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: parseInt(value),
        }));
    }
    const handleSubmit = async (formData: any) => {
        try {
            return await submitFormData(formData)
        } catch (error) {
            // USe message component
            console.log(error)
        }
    };

    return (
        <div className="modal fade show" id="reserveModal" style={{display: 'block'}} role="dialog"
             aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="form-group" onSubmit={onSubmitForm}>
                            <select
                                name="restaurant"
                                value={formData.restaurant}
                                onChange={handleChange}
                                className="form-control mb-2"
                                required
                            >
                                {restaurants.map((restaurant: Restaurant) => (
                                    <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
                                ))}
                            </select>
                            <select
                                name="people"
                                value={formData.people}
                                onChange={handleChange}
                                className="form-control mb-2"
                                required
                            >
                                <option value="1">1 Person</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                            </select>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                placeholder={formData.date.toString()}
                                className="form-control mb-2"
                                required
                            />
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                placeholder={formData.time.toString()}
                                className="form-control mb-2"
                                required
                            />
                            <button className="btn btn-primary m-2" type="submit">Submit</button>
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;