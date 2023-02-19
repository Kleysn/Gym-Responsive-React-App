import React, { useState } from 'react'
import './Testimonial.css'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { testimonialsData } from '../../data/testimonialsData'
import { motion } from 'framer-motion'

const Testimonial = () => {

    const [select, setSelect] = useState(0);
    const tLenght = testimonialsData.length;

    /* animação */

    const transition = { type: 'spring', duration: 3 }


    return (

        <div className='Testimonials' id='testimonials'>

            <div className="left-t">

                <span>Depoimentos</span>
                <span className='stroke-text'>O que eles</span>
                <span>dizem sobre nós?</span>

                <motion.span

                    key={select}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ transition }}


                >{testimonialsData[select].review}</motion.span>

                <span>
                    <span className='name-t'>{testimonialsData[select].name} </span>
                    - {testimonialsData[select].status}
                </span>

            </div>


            <div className="right-t">

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}

                ></motion.div>


                <motion.div

                    initial={{ opacity: 0, x: 100 }}
                    transition={{ ...transition, duration: 2 }}
                    whileInView={{ opacity: 1, x: 0 }}

                >
                </motion.div>

                <motion.img
                    key={select}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ transition }}

                    src={testimonialsData[select].image}
                    alt="">
                </motion.img>

                <div className="arrows">
                    <img

                        onClick={() => {
                            select === 0
                                ? setSelect(tLenght - 1)
                                : setSelect((previous) => previous - 1)
                        }}


                        src={leftArrow} alt="" />
                    <img

                        onClick={() => {
                            select === tLenght - 1
                                ? setSelect(0)
                                : setSelect((previous) => previous + 1)
                        }}

                        src={rightArrow} alt="" />
                </div>

            </div>



        </div>
    )
}

export default Testimonial
