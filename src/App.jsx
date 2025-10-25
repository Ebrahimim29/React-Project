import { Fragment, useState } from "react"
import ClassComponent from "./ClassComponent"
import FunctionalComponent from "./FunctionalComponent"
import Car from "./Car";
import ChildComponent from "./ChildComponent";

const App = () =>{
  
  const [text,setText] = useState(" ری رندر شدن کامپوننت بعد از تغییر استیت😎...") ;
  const changeText = () => {
   setText(".هر موقع استیت ها و پراپ ها در یک کامپوننت تغییر پیدا کند، کل المانها بعلاوه کامپوننت فرزندش مجددا ری رندر میشه.یعنی فانکشن کامپوننت ،مجددا فرخوانی میشه😐...");
    console.log(text);    
  };

  return (
    <Fragment>
      <h4>Components: Class & Function</h4>
      <ClassComponent/>
      <FunctionalComponent/>
      <Car make="Toyota" model="Camery" year={2022} color="Silver" price="$25,000"/>
      <Car make="Hyundai" model="Azera" year={2018} color="black" price="$27,000"/>

      {/* State */}
      <button onClick={changeText}>Click Me</button>
      <ChildComponent text={text}/>
    </Fragment>

  )
}

export default App
