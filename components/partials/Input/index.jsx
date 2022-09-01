import { useState } from 'react';
import style from './style.module.scss';
const Input = ({
   content = 'Default',
   type = 'text',
   src = 'https://cdn.lordicon.com/oirityrg.json',
   setValue = null,
   error = null
}) => {
   const [valueInput, setValueInput] = useState('');
   const [borderColor, setBorderColor] = useState('')
   const onChange = (value) => {
      if (setValue) {
         setValue(value);
      }
      setValueInput(value);
   };
   return (
      <div className={style.input_wrapper}>
         <input
            className={style.input_item}
            value={valueInput}
            style={error && { borderColor: '#FA9494' } || valueInput && {borderColor: '#00FFFF'} || {}}
            onChange={({ target }) => onChange(target.value)}
            type={type}
         />
         <label
            className={style.label}
            style={valueInput ? { top: '-5px', fontSize: '14px' } : {}}
         >
            {content}
         </label>
         <i className={style.icon}>
            <lord-icon
               src={src}
               target="input"
               trigger="click"
               stroke="50"
               colors="primary:#00FFFF"
               style={{ width: '50px', height: '35px' }}
            />
         </i>
         {error && <div className={style.error}>{error}</div>}
      </div>
   );
};

export default Input;
