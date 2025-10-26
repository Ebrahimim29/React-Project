// import PropTypes from "prop-types";

const ChildComponent = ({text , children})=>{

    console.log("Chil Component");
    

    return(
        <div>
            <h1>Child Component</h1>
            <p>{text}</p>
            {children}
        </div>
    );
};

export default ChildComponent;

// ChildComponent.PropTypes = {
//     text: PropTypes.string.isRequired,
// };