const FunctionalComponent = () => {

    const value = prompt("1 or 2");

    return (
        <div>
            FunctionalComponent.....
            Conditional Rendering:
            {value === "1" ? <h2>خوش آمدید😎</h2> : <h2>لطفا وارد شوید!😐</h2>}
            {/* {value === "1" ? <h2>خوش آمدید</h2> : null} */}
        </div>
    );
};

export default FunctionalComponent;