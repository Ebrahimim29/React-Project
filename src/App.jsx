import { Fragment, useState } from "react"
import ClassComponent from "./ClassComponent"
import FunctionalComponent from "./FunctionalComponent"
import Car from "./Car";
import ChildComponent from "./ChildComponent";
import UserInfo from "./UserInfo";

const App = () =>{
  
  const [text,setText] = useState(" ری رندر شدن کامپوننت بعد از تغییر استیت😎...") ;
  const changeText = () => {
   setText(".هر موقع استیت ها و پراپ ها در یک کامپوننت تغییر پیدا کند، کل المانها بعلاوه کامپوننت فرزندش مجددا ری رندر میشه.یعنی فانکشن کامپوننت ،مجددا فرخوانی میشه😐...");
    console.log(text);    
  };

  const initialUsers = [
    {fname:"Hassan Jalili",age:23,email:"hassan@gmail.com"},
    {fname:"Kami khosravi",age:32,email:"Kami@yahoo.com"},
    {fname:"Kasra imani",age:76,email:"kasra@yahoo.com"},
    {fname:"siamk hase",age:54,email:"siamak@gmail.com"},
  ];

  const[users,setUsers] = useState(initialUsers);

  // const handleDelete = (fname) => {
  //   const newUsers = users.filter((user) => user.fname !== fname);
  //   setUsers(newUsers)
  // }

  //Functional Update
  const handleDelete = (fname) =>{
    setUsers((prevUsers) =>{
      const newUsers = prevUsers.filter((user)=>user.fname !== fname);
      return newUsers;
    });
  }

  const setSearch = (char) =>{
    const newUsers = initialUsers.filter((user)=>user.fname.toLowerCase().includes(char.toLowerCase()));
    setUsers(newUsers);
  }

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
        <p>Children</p>
        <p>Children: زمانی تگ باز و بسته استفاده می کنیم که بخواهیم یک چیلدرن ارسال کنیم </p>
        <p>Children: داخلش هر چیزی می توانیم بنویسیم</p>
      <ChildComponent/>

      <div>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} />
        {users.map((user) => (
          // <UserInfo key={user.fname} fname={user.fname} age={user.age} email={user.email}/>

          //Props Spreading: {...spread operator}
          <UserInfo key={user.fname} {...user} handleDelete={handleDelete}/>

        ))}
      </div>
    </Fragment>

  )
}

export default App
