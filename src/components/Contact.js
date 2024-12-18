import React, { useState } from 'react';

import '../CSS/Contact.css';
const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''

    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data', formData)
        setFormData({name: '', email: '', message: ''});
    }

    return(

        <div className="contact-container"> 
            <h1>Contact Us</h1> 
            <form onSubmit={handleSubmit}> 
                <div className="cform-group"> 
                <label htmlFor="name">Name:</label> 
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name} 
                    onChange={handleChange} 
                    /> 
                </div> 

                <div className="cform-group"> 
                <label htmlFor="email">Email:</label> 
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                 /> 
                </div> 
                
                <div className="cform-group"> 
                <label htmlFor="message">Message:</label> 
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} >
                    </textarea> 
                </div> 
                <button className ='cbutton' type="submit">Submit</button> </form> 
                </div>

    );
};
export default Contact
