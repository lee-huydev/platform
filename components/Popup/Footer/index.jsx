import classNames from 'classnames/bind';
import styles from './FooterPopup.module.scss';
const cx = classNames.bind(styles);
import Button from '../../partials/Button';
export default function FooterPopup({title = '' }) {
    return (
      <>
        <div>
            <Button
                small
            >
                continue
            </Button>
        </div>
      </>
    ); 
  }