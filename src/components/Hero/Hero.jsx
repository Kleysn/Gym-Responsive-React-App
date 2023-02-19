import React from 'react'
import Header from '../Header/Header';
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import NumberCounter from 'number-counter'
import { motion } from 'framer-motion'

const Hero = () => {

    const transition = { type: 'spring', duration: 3 }
    const mobile = window.innerWidth <= 768 ? true : false

    return (

        < div className='hero' id='hero' >

            <div className='blur hero-blur'></div>

            <div className='left-h'>

                <Header />

                {/* parte: o melhor club */}

                <div className="the-best-ad">

                    {/* div da animação */}{/* <div></div> */}
                    <motion.div
                        initial={{ left: mobile ? '178px' : '305px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween' }}
                    ></motion.div>
                    <span>O melhor club fitness qualificado na cidade</span>
                </div>

                {/* parte: trabalhe o seu corpo */}

                <div className="hero-text">

                    <div>

                        <span className='stroke-text'>Construa </span>
                        <span>Seu</span>

                    </div>

                    <div>
                        <span>Corpo Ideal</span>

                    </div>

                    <div>
                        <span>Aqui, vamos ajudá-lo a moldar e construir seu corpo ideal e viver sua vida ao máximo</span>
                    </div>

                </div>

                {/* Figuras */}

                <div className="figures">
                    <div>
                        <span><NumberCounter end={180} start={130} delay='4' preFix='+' />
                        </span>

                        <span>Treinadores</span>
                    </div>
                    <div>
                        <span><NumberCounter end={1000} start={920} delay='4' preFix='+' /></span>

                        <span>Membros se Juntaram</span>
                    </div>
                    <div>
                        <span><NumberCounter end={70} start={50} delay='4' preFix='+' /></span>

                        <span>Programas Fitness</span>
                    </div>
                </div>

                {/* botoes */}

                <div className="hero-buttons">
                    <button className="btn">Começe Agora</button>
                    <button className="btn">Aprenda Mais</button>
                </div>

            </div>

            <div className='right-h'>

                <button className='btn'>Entre Agora</button>

                <motion.div

                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={{ transition }}
                    className="heart-rate">

                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>120 bpm</span>
                </motion.div>

                {/* imagens da seção */}

                <img src={hero_image} alt="" className='hero-image' />
                <motion.img

                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={{ transition }}

                    src={hero_image_back} alt="" className='hero-image-back'>

                </motion.img>

                {/* calorias */}

                <motion.div

                    initial={{ right: '1rem' }}
                    whileInView={{ right: '30rem' }}
                    transition={{ transition }}

                    className="calories">
                    <img src={calories} alt="" />

                    <div>
                        <span>Calorias Queimadas</span>
                        <span>335 kcal</span>
                    </div>

                </motion.div>

            </div>

        </div >

    )
}

export default Hero;
