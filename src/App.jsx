import { Fragment } from "react"
import ClassComponent from "./ClassComponent"
import FunctionalComponent from "./FunctionalComponent"

const App = () =>{

  return (
    <Fragment>
      <h4>Components: Class & Function</h4>
      <ClassComponent/>
      <FunctionalComponent/>
    </Fragment>

  )
}

export default App
