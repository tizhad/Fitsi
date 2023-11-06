import React, {useState} from "react";
import Modal from "../Modal/Modal";

interface HomeProps {
}

function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function onTableReservation() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    const onAddRestaurant = () => {

    }

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={onTableReservation}>
                Reserve a Table
            </button>
            {isModalOpen && <Modal onClose={closeModal}/>}
            <button className="btn btn-outline-primary" onClick={onAddRestaurant}>Add Your Restaurant</button>

        </div>
    );
}

export default Home;