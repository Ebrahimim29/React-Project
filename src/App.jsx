import { Fragment } from "react"
import ClassComponent from "./ClassComponent"
import FunctionalComponent from "./FunctionalComponent"
import Car from "./Car";

const App = () =>{

  return (
    <Fragment>
      <h4>Components: Class & Function</h4>
      <ClassComponent/>
      <FunctionalComponent/>
      <Car make="Toyota" model="Camery" year={2022} color="Silver" price="$25,000"/>
      <Car make="Hyundai" model="Azera" year={2018} color="black" price="$27,000"/>
    </Fragment>

  )
}

export default App
