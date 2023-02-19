import React from 'react'
import './Reasons.css'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"


const Reasons = () => {
    return (

        <div className="Reasons" id="reasons">

            <div className="left-r">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>


            <div className="right-r">

                <span>Algumas Razões</span>

                <div>

                    <span className='stroke-text'>Por Que </span>
                    <span className='decore-r'>Nos Escolher?</span>

                </div>

                <div className='details-r'>

                    <div>
                        <img src={tick} alt=""></img>
                        <span>MAIS DE 140+ TREINADORES ESPECIALIZADOS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>TREINE MAIS INTELIGENTE E MAIS RÁPIDO DO QUE ANTES</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>1 PROGRAMA GRATUITO PARA NOVOS MEMBROS</span>
                    </div>
                    <div>
                        <img src={tick} alt="" />
                        <span>PARCEIROS CONFIÁVEIS</span>
                    </div>

                </div>

                <span className='decore-r-partner'>NOSSOS PACEIROS</span>

                <div className='partners'>
                    <img src={nb} alt="" />
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                </div>



            </div>

        </div>
    )
}

export default Reasons
