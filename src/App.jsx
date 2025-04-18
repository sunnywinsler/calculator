import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";


function App() {
  const [calVal, setCalVal] = useState("45");
  const onButtonClick =(buttonText)=> {
    if(buttonText === "c") {
     setCalVal("");
    }else if(buttonText === '='){
      const result =eval(calVal); 
      setCalVal(result);
    }
    else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return ( <div className={styles.calculator}>
    <Display displayValue={calVal}></Display>
    <ButtonsContainer 
    onButtonClick ={onButtonClick}
    ></ButtonsContainer>

  </div>
  );
}

export default App;
