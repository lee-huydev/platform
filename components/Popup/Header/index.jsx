import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
export default function Header({title = '' }) {
    return (
      <>
        <div className={cx('container_header_popup')}>
          <div className={cx('content_header_popup')}>
            <div className={cx('Header_title')}>
                {title}
            </div>
            <div className={cx('header_popup_icon')}>
            <lord-icon
              src="https://cdn.lordicon.com/zlhhhefv.json"
              trigger="hover"
              colors="primary:#23262f,secondary:white"
              style={{width: '50px',height:'50px'}}>
          </lord-icon>
            </div>
          </div>
        </div>
      </>
    ); 
  }