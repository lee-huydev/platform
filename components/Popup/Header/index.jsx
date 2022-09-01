import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
export default function Header({title = '' }) {
    return (
      <>
        <div className={cx('container')}>
            <div className={cx('Header_title')}>
                {title}
            </div>
            <div className={cx('header_icon')}>
            </div>
        </div>
      </>
    ); 
  }