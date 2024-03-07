
import { useRef } from 'react';

export default function Contact() {



    const nameRef = useRef();
    const addressRef = useRef();
    const phoneNumberRef = useRef();
    const emailRef = useRef();
    const detailRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name: nameRef.current.value,
            address: addressRef.current.value,
            phoneNumber: phoneNumberRef.current.value,
            email: emailRef.current.value,
            detail: detailRef.current.value
        };

        console.log(formData);

        
        nameRef.current.value = '';
        addressRef.current.value = '';
        phoneNumberRef.current.value = '';
        emailRef.current.value = '';
        detailRef.current.value = '';
    };

    return (
        <>
        <div className='ContactContainer'>

       
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" ref={nameRef} required />

                <label htmlFor="address">Address:</label>
                <input type="text" id="address" ref={addressRef} required />

                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="tel" id="phoneNumber" ref={phoneNumberRef} required />

                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" ref={emailRef} required />

                <label htmlFor="detail">Detail:</label>
                <textarea id="detail" ref={detailRef} required></textarea>

                <button type="submit">Submit</button>
            </form>
            </div>
        </>
    )
}
