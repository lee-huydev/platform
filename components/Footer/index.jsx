import style from './style.module.scss'
const Footer = () => {
    return (
        <div className={style.container_fluid}>
            <div className={style.row}>
                <div className={style.column_1}>
                    <img src='https://beta.huntgem.io/uploads/2022/07/Logo-Huntgem.png' alt='image' />
                </div>
                <div className={style.column_2}>
                    <nav className={style.nav}>
                        <ul>
                            <li>
                                <a href="">Start A Hunt</a>
                            </li>
                            <li>
                                <a href="">Hcash Tranfer</a>
                            </li>
                            <li>
                                <a href="">Scoin Exchange</a>
                            </li>
                            <li>
                                <a href="">Withdraw</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={style.column_2}>
                <nav className={style.nav}>
                        <ul>
                            <li>
                                <a href="">Dealer Register</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={style.column_2}>
                <nav className={style.nav}>
                        <ul>
                            <li>
                                <a href="">Telegram</a>
                            </li>
                            <li>
                                <a href="">Twitter</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Footer