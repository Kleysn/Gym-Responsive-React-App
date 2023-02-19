import React, { useState } from 'react'
import "./Header.css"
import { Link } from "react-scroll"
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'

const Header = () => {

    const mobile = window.innerWidth <= 768 ? true : false
    const [menuOpended, setmenuOpended] = useState(false)

    return (

        <div className="header">
            <img src={Logo} alt="" className='logo' />

            {(menuOpended === false && mobile === true) ? (
                <div
                    onClick={() => setmenuOpended(true)}

                ><img src={Bars} alt="" className='img-bar' /></div>
            ) : (
                <ul className='header-menu'>

                    <li>
                        <Link
                            onClick={() => setmenuOpended(false)}
                            activeClass='active'
                            to="hero"
                            spy={true}
                            smooth={true}

                        ><div>Home</div>
                        </Link></li>
                    <li>
                        <Link
                            onClick={() => setmenuOpended(false)}
                            activeClass='active'
                            to="programs"
                            spy={true}
                            smooth={true}

                        ><div>Programas</div>
                        </Link></li>
                    <li>
                        <Link
                            onClick={() => setmenuOpended(false)}
                            activeClass='active'
                            to="reasons"
                            spy={true}
                            smooth={true}

                        ><div>Por que nós?</div>
                        </Link></li>
                    <li>
                        <Link
                            onClick={() => setmenuOpended(false)}
                            activeClass='active'
                            to="planss"
                            spy={true}
                            smooth={true}

                        ><div>Planos</div>
                        </Link></li>

                    <li>
                        <Link
                            onClick={() => setmenuOpended(false)}
                            activeClass='active'
                            to="testimonials"
                            spy={true}
                            smooth={true}

                        ><div>Depoimentos</div>
                        </Link>
                    </li>

                </ul>)
            }

            {/* <ul className='header-menu'>

                <li>
                    <Link
                        activeClass='active'
                        to="hero"
                        spy={true}
                        smooth={true}

                    ><div>Home</div>
                    </Link></li>
                <li>
                    <Link
                        activeClass='active'
                        to="programs"
                        spy={true}
                        smooth={true}

                    ><div>Programas</div>
                    </Link></li>
                <li>
                    <Link
                        activeClass='active'
                        to="reasons"
                        spy={true}
                        smooth={true}

                    ><div>Por que nós?</div>
                    </Link></li>
                <li>
                    <Link
                        activeClass='active'
                        to="testimonials"
                        spy={true}
                        smooth={true}

                    ><div>Planos</div>
                    </Link></li>

                <li>
                    <Link
                        activeClass='active'
                        to="planss"
                        spy={true}
                        smooth={true}

                    ><div>Depoimentos</div>
                    </Link>
                </li>

            </ul> */}

        </div >

    )
}

export default Header;
