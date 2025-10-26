const UserInfo = ({fname,age,email}) =>{
    return(
        <div>
            <ul>
                <li>Fname: {fname}</li>
                <li>Age: {age}</li>
                <li>Email: {email}</li>
            </ul>
        </div>
    );
};

export default UserInfo;