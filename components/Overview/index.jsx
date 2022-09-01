import style from './style.module.scss'
import Button  from '../partials/Button/index'
import Popup from '../Popup/index';
export default function Home() {
    return (
      <>
        <Button 
          small
          btnsmallblur
        >
          BUTTON
        </Button>
        <Button 
          large
        >
          BUTTON
        </Button><Button 
          small
        >
          BUTTON
        </Button><Button 
          small
          btntranspar
        >
          BUTTON
        </Button>
        <Popup/>
      </>

    );
  }