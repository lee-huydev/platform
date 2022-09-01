import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    children, 
    outline = false,
    small = false,
    disable = false,
    rounded = false,
    large = false,
    btnblur = false,
    btnsmallblur = false,
    btnlargeblur= false,
    btnmaximunblur= false,
    btntranspar = false,
    text = false,
    primary = false,
    rightIcon = false,
    leftIcon = false,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className] : className,
        primary,
        outline,
        text,
        small,
        large,
        rounded,
        disable,
        btnblur,
        btnsmallblur,
        btnlargeblur,
        btnmaximunblur,
        btntranspar
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
