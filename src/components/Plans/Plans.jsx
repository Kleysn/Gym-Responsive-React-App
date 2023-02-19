import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {

    return (

        <div className='plans-containers' id='planss'>

            <div className='blur plans-blur-1'></div>
            <div className='blur plans-blur-2'></div>

            <div className='programs-header'>

                <span className='stroke-text'>Vamos  Começar</span>
                <span>Sua  Jornada</span>
                <span className='stroke-text'>Conosco?</span>


            </div>

            {/* card dos planos */}

            <div className="plans">

                {plansData.map((plan, i) =>

                    <div className="plan" key={i}>

                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>R$ {plan.price}</span>

                        <div className="features">

                            {plan.features.map((feature, i) => (
                                <div className="feature">

                                    <img src={whiteTick} alt="" />
                                    <span key={i}>{feature}</span>

                                </div>
                            ))}

                        </div>

                        <div>
                            <span>{"Veja mais beneficios ->"}</span>
                        </div>

                        <button className="btn feature-curv">Entre Agora</button>


                    </div>


                )}

            </div>

        </div>
    )



}


export default Plans
