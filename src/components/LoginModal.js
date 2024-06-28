import React from 'react';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 15,  // content için zIndex ekleniyor
        backgroundColor: "#232323",
        border: "none",

    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 10,  // overlay için zIndex ekleniyor
    },
};


export default function LoginModal({ isOpen, onRequestClose }) {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        birthPlace: '',
        birthDate: '',
        occupation: ''
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [warning, setWarning] = useState("");

    useEffect(() => {
        const { firstName, lastName, gender, birthPlace, birthDate, occupation } = formData;
        if (firstName && lastName && gender && birthPlace && birthDate && occupation) {
            setIsFormValid(true);
        } else {
            var newWarning = ""
            firstName ? "" : newWarning += "Name, ";
            lastName ? "" : newWarning += "Surname, ";
            gender ? "" : newWarning += "Gender, ";
            birthPlace ? "" : newWarning += "Birth Place, ";
            birthDate ? "" : newWarning += "Birth Date, ";
            occupation ? "" : newWarning += "Occupation, ";

            newWarning += "is invalid";

            setWarning(newWarning)
            setIsFormValid(false);
        }
    }, [formData]);

    const handleChange = (e) => {
        const { id, value, name } = e.target;
        setFormData({ ...formData, [name || id]: value });

    };

    const handleSubmit = () => {
        if (isFormValid) {
            alert("Registered Successfully");
        } else {
            alert(warning);
        }
    };
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Image Modal"
            ariaHideApp={false}
        >
            <h2 className='text-white text-center'>Register</h2>
            <form className="form d-flex flex-column align-items-center justify-content-center gap-sm-3" style={
                windowWidth < 700 ? { width: '80vw', height: "60vh" } :
                    windowWidth < 1000 ? { width: '65vw', height: "65vh" } :
                        windowWidth < 1300 ? { width: '55vw', height: "65vh" } :
                            { width: '42vw', height: "65vh" }}>
                <div className="form-group text-white">
                    <label htmlFor="firstName">Name</label>
                    <input
                        type="text"
                        className="form-control text-white bg-dark"
                        id="firstName"
                        placeholder="Enter your name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group text-white">
                    <label htmlFor="lastName">Surname</label>
                    <input
                        type="text"
                        className="form-control text-white bg-dark"
                        id="lastName"
                        placeholder="Enter your surname"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group text-white">
                    <label>Gender</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="male">
                            Male
                        </label>
                    </div>
                    <div className="form-check text-white">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="female">
                            Female
                        </label>
                    </div>
                    <div className="form-check text-white">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                            onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="other">
                            Other
                        </label>
                    </div>
                </div>

                <div className="form-group text-white">
                    <label htmlFor="birthPlace">Birthplace</label>
                    <input
                        type="text"
                        className="form-control text-white bg-dark"
                        id="birthPlace"
                        placeholder="Enter your birthplace"
                        value={formData.birthPlace}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group text-white">
                    <label htmlFor="birthDate">Birth Date</label>
                    <input
                        type="date"
                        className="form-control text-white bg-dark"
                        id="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group text-white">
                    <label htmlFor="occupation">Job</label>
                    <select
                        className="form-control text-white bg-dark"
                        id="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                    >
                        <option value="">Select your job</option>
                        <option value="teacher">Teacher</option>
                        <option value="doctor">Doctor</option>
                        <option value="engineer">Engineer</option>
                        <option value="soldier">Soldier</option>
                        <option value="judge">Judge</option>
                        <option value="farmer">Farmer</option>
                        <option value="selfEmployed">Self Employed</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </form>
            <button onClick={handleSubmit} style={{ position: 'relative' }} className='btn btn-warning w-100 mt-2'>Register</button>
            <button onClick={onRequestClose} style={{ position: 'relative' }} className='btn btn-danger w-100 mt-2'>Close</button>

        </Modal>
    );
};
