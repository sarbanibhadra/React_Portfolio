
import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_9kdd118', 'template_f10fl2l', form.current, {
        publicKey: 'fh3QfWFHH8OZ9c1Cu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
    return (
      <div className="w-50 p-3 mx-auto" >
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
        <label>Name</label>
        <input type="text" name="user_name" className="form-control" />
        </div>
        <div className="form-group">
        <label>Email address</label>
        <input type="email" name="user_email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
        <label>Message</label>
        <textarea name="message" className="form-control"/>
        <input type="submit" value="Send" />
        </div>
      </form>
      </div>
    );
}

export default Contact;


