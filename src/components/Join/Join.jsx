import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6d1qg4o', 'template_r0e3jzr', form.current, 'uXkEdWBaq6yu4yaGF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (

        <div className="Join" id="join-us">

            <div className="left-j">

                <hr />
                <div>
                    <span className='stroke-text'>PRONTO PARA</span>
                    <span>ELEVAR SEU</span>
                </div>
                <div>
                    <span>SEU CORPO</span>
                    <span className='stroke-text'>CONOSCO?</span>
                </div>

            </div>

            <div className="right-j">

                <form ref={form} className="email-container" onSubmit={sendEmail}>
                    <input type="email" name='user_email' placeholder='Entre com seu email' />
                    <button className="btn btn-join">Entre Agora</button>
                </form>

            </div>

        </div>
    )
}

export default Join
