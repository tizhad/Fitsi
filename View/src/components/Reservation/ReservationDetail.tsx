import React, { useState, useEffect } from "react";
import { Reservation } from "../../Models/Reservation";
import { getRestaurant } from "../../Services/reservationService";
import { Restaurant } from "../../Models/Restaurant";

interface ReservationDetailProps {
    reservation: Reservation;
}

function ReservationDetail({ reservation }: ReservationDetailProps) {
    const [restaurant, setRestaurant] = useState<Restaurant | undefined>();


    useEffect(() => {
        getRestaurantDetail();
    }, [reservation.id])

    const getRestaurantDetail = async () => {
        const response = await getRestaurant(reservation.restaurant_id);
        setRestaurant(response);
    }


    return (
        <div className="reservation">
            <h2>Your Reservation Details</h2>
            <p>You reserved a table for <br/><strong className="restaurant-name mt-2"> {restaurant?.name}</strong></p>
            <p><strong>Date:</strong> {reservation.date}</p>
            <p><strong>For </strong>{reservation.people} people</p>
            <h6><strong>Your Table number is: </strong>{reservation.table_number}</h6>
            <h6><strong>At </strong>{reservation.time}</h6>
            <small>Please be in the restaurant 5 minutes before.</small>
        </div>
    );
}

export default ReservationDetail;
