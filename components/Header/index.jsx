import Image from 'next/image'
import style from './style.module.scss'
const Header = () => {
    return (
        <div className={style.header_container}>
            <div className={style.header_content}>
                <div className={style.left}></div>
                <div className={style.logo}>Hello</div>
                <div className={style.right}></div>
            </div>
        </div>
    )
}
export default Header