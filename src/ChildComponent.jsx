// import PropTypes from "prop-types";

const ChildComponent = ({text})=>{

    console.log("Chil Component");
    

    return(
        <div>
            <h1>Child Component</h1>
            <p>{text}</p>
        </div>
    );
};

export default ChildComponent;

// ChildComponent.PropTypes = {
//     text: PropTypes.string.isRequired,
// };