import Header from './Header/index';
import Content from './Content/index';
import FooterPopup from './Footer/index';
import classNames from 'classnames/bind';
import styles from './Popup.module.scss';
const cx = classNames.bind(styles);
export default function Popup() {
    return (
        <div className={cx('Popup_container')} >
            <Header title='System Warning'/> 
            <Content/>
            {/* <FooterPopup/> */}
        </div>

    ); 
  }