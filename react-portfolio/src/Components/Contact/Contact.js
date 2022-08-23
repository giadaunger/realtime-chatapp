import React, { useState } from 'react'
import './css/contact.css'
import './css/responsive.css'
import emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_dnb2wv4';
            const templateId = 'template_okf6vwu';
            const userId = 'XToFv5sg1a2bOqZoQ';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return (
        <div id="contact-div">
            <div className="contact-header">
                <h1 className="contact-h1">Contact</h1>
                <p className="contact-p">If you don't have any questions or a message, feel free to leave some feedback / constructive criticism on my portfolio :)</p>
            </div>

            <div className="form-div">
            <form>
            <label>Name:</label><br />
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /><br />

            <label>Email:</label><br />
            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /><br />

            <label>Message:</label><br />
            <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea><br />
            <button className="form-btn" onClick={submit}>Send Message</button><br />
            <span className={emailSent ? 'visible' : null}><p className="span-p">Thank you for your message!</p></span>
            </form>
            </div>

        </div>
    );
};

export default Contact;