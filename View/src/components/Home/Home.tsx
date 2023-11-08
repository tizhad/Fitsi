import React, {useState} from "react";
import Modal from "../Modal/Modal";
import ReservationDetail from "../Reservation/ReservationDetail";
import {Reservation} from "../../Models/Reservation";

interface HomeProps {
}

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reservation, setReservation] = useState<Reservation>();

    function onTableReservation() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    const handleReservation = (reserved: Reservation) => {
        setReservation(reserved);
        setIsModalOpen(false);
    };


    return (
        <div>
            <button type="button" className="btn btn-primary m-2" onClick={onTableReservation}>
                Reserve a Table
            </button>
            {isModalOpen && <Modal onClose={closeModal} onReservation={handleReservation}/>}
            <button className="btn btn-outline-primary">Add Your Restaurant</button>
            {reservation &&<ReservationDetail reservation={reservation} />}
        </div>
    );
}

export default Home;