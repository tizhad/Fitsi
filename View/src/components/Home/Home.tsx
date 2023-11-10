import React, {useState} from "react";
import Modal from "../Modal/Modal";
import ReservationDetail from "../Reservation/ReservationDetail";
import {Reservation} from "../../Models/Reservation";


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
            {!reservation ? (<button type="button" className="btn btn-primary m-2" onClick={onTableReservation}>
                Reserve a Table
            </button>) : (<div>
                <button type="button" className="btn btn-primary m-2" onClick={onTableReservation}>
                    New Reservation
                </button>
            </div>)}
            {isModalOpen && <Modal onClose={closeModal} onReservation={handleReservation}/>}

            {reservation && <ReservationDetail reservation={reservation}/>}
        </div>
    );
}

export default Home;