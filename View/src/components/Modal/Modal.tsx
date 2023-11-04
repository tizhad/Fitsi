import React, {useState} from 'react';

interface ModalProps {
    onClose: () => void;
}

function Modal({onClose}: ModalProps) {
    const now: Date = new Date();
    const [formData, setFormData] = useState({
        people: '',
        date: now.getDate(),
        time: now.getTime()
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData)

    }
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
                        <form className="form-group" onSubmit={handleSubmit}>
                            {/*Make this dropdown*/}
                            <input
                                type="text"
                                name="people"
                                value={formData.people}
                                onChange={handleChange}
                                placeholder="2 People"
                                className="form-control mb-2"
                                required
                            />
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