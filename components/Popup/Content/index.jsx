import classNames from 'classnames/bind';
import styles from './Content.module.scss';
const cx = classNames.bind(styles);
export default function Content({children}) {
    return (
      <>
        <div className={cx('container')}>
            <div className={cx('Popup_content')}>
                {children}
            </div>
        </div>
      </>
    ); 
  }