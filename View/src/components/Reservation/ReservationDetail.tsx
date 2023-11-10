import React, {useEffect, useState} from "react";
import {Reservation} from "../../Models/Reservation";
import {deleteReservation, getRestaurant} from "../../Services/reservationService";
import {Restaurant} from "../../Models/Restaurant";

interface ReservationDetailProps {
    reservation: Reservation;
}

function ReservationDetail({reservation}: ReservationDetailProps) {
    const [restaurant, setRestaurant] = useState<Restaurant | undefined>();
    const [message, setMessage] = useState<string>();
    const [isReserveDeleted, setReserveDeleted] = useState<boolean>(false);


    useEffect(() => {
        getRestaurantDetail();
    }, [reservation.id])

    const getRestaurantDetail = async () => {
        const response = await getRestaurant(reservation.restaurant_id);
        setRestaurant(response);
        setReserveDeleted(false);
    }

    const onCancelReservation = async () => {
        try {
            const response = await deleteReservation(reservation.id);
            if (response) {
                setMessage(response.message);
                setReserveDeleted(true);
                return response;
            } else {
                setMessage('An Error occurred! Please try again.');
                return null;
            }
        } catch (error) {
            setMessage('An Error occurred! Please try again.');
            console.error(error);
            return null;
        }
    }
    return (
        <div className="reservation">
            {!isReserveDeleted ? (
                <div>
                    <h2>Your Reservation Details</h2>
                    <p>You reserved a table for <br/><strong
                        className="restaurant-name mt-2">{restaurant?.name}</strong></p>
                    <p><strong>Date:</strong> {reservation.date}</p>
                    <p><strong>For</strong> {reservation.people} people</p>
                    <h6><strong>Your Table number is:</strong> {reservation.table_number}</h6>
                    <h6><strong>At</strong> {reservation.time}</h6>
                    <small>Please be in the restaurant 5 minutes before.</small>
                    <br/>
                    <button type="button" className="btn btn-danger mt-3" id="showMessageBtn"
                            onClick={onCancelReservation}>
                        Cancel Reservation
                    </button>
                </div>
            ) : (
                <div className="text-bold text-danger"><h3>{message}</h3></div>
            )}
        </div>
    );
}

export default ReservationDetail;
