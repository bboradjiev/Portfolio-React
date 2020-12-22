import React from 'react';
import ContactForm from './ContactForm';
 
function ContactPage() {

    return (
        <div className='contact-section'>
            <h1>&lt;Contact me/&gt;</h1>

            <ContactForm/>        

            <div className='contact-items'>
                <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/bojidar-boradjiev-007a0662/'> <img src='/images/icons/icons8-linkedin-96 (1).png' alt='Linkedin Icon'/></a>
                <a rel="noreferrer" target='_blank' href='https://github.com/bboradjiev'> <img src='/images/icons/github-sign.png' alt='Github Icon'/></a>
            </div>

        </div>
    )
}

export default ContactPage;
