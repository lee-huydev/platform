import style from './style.module.scss';
import { useState } from 'react';
const InputNum = ({ error = null, setValue }) => {
   const [valueInput, setValueInput] = useState('');
   const onChange = (value) => {
    if(setValue){
        setValue(valueInput)
    }
      setValueInput(value);
   };
   return (
      <div className={style.input_wrapper}>
         <div
            style={
               (error && { backgroundColor: '#FA9494' }) ||
               (valueInput && { backgroundColor: '#00FFFF' }) ||
               {}
            }
            className={style.line}
         ></div>
         <input
            style={
               (error && { borderColor: '#FA9494' }) ||
               (valueInput && { borderColor: '#00FFFF' }) ||
               {}
            }
            className={style.input}
            type="text"
            onChange={({ target }) => onChange(target.value)}
         />
      </div>
   );
};

export default InputNum;
