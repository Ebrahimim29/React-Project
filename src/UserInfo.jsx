const UserInfo = ({fname,age,email, handleDelete}) =>{

    // const handleDelete = (e , value)=>{
    //     // e.preventDefault();
    //     console.log(value);        
    //     console.log("Delete button clicked");        
    // };

    const handleChange = (e)=>{
        console.log(e.target.value);        
    }

    return(
        <div>
            <ul>
                <li>Fname: {fname}</li>
                <li>Age: {age}</li>
                <li>Email: {email}</li>
                <li>
                    {/* <button onClick={(e)=>handleDelete(e, "test")}>Delete</button> */}
                    <button onClick={()=>handleDelete(fname)}>Delete</button>
                    <input type="text" onChange={handleChange} />
                </li>
            </ul>
        </div>
    );
};

export default UserInfo;