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

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={onTableReservation}>
                Reserve a Table
            </button>
            {isModalOpen && <Modal onClose={closeModal}/>}
        </div>
    );
}

export default Home;