import { useState } from "react"
import './Login.css' ;
const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassWord] = useState('');
    const [isRegistered, setIsRegistered] = useState(false) ;
    const [isLoggedIn, setIsLoggedIn] = useState(false) ;
    const [users, setUsers] = useState([]) ;

     const handleSubmit = (e)=>{
        e.preventDefault()
     }
     const handleAuth =()=>{
      if(isRegistered){
         if(isRegistered){
            const user = users.find((u)=> u.email === email && u.password === password);
            if(user){
                setIsLoggedIn(true);
            }else{
                alert("LogIn Failed")
            }
         }
      }else{
        const newUsers = {email, password};
        setUsers([...users,newUsers ]);
        localStorage.setItem('users',JSON.stringify([...users,newUsers ]));
        setIsLoggedIn(true);

      }
     }

     const handleLogOut =()=>{
        setIsLoggedIn(false);
        setEmail("");
        setPassWord("");
     }
  return (
    <div>{isLoggedIn ? (<div>
        <h2>Welcome , {email}!</h2><button onClick={handleLogOut}>LogOut</button>
    </div>): (
        <div className="container">
        <h2>{isRegistered ? "LogIn" : "Register"}</h2>
    <form className="form" onSubmit={handleSubmit}>
     
    <input className="input-fill" type="email" placeholder="Email..." onChange={(e)=>setEmail(e.target.value)} /> <br></br>
        <input  className="input-fill" type="password" placeholder="PassWord..." onChange={(e)=>setPassWord(e.target.value)}  /><br></br>
        
      <button onClick={handleAuth} className="btn-i">{isRegistered ? "LogIn":"Register"}</button><br></br>
    <p>
        {isRegistered ? "Don't have an account? Register now" : "Already have an account? LogIn"}
    </p>
   <button className="btn" onClick={()=>setIsRegistered(!isRegistered)}>{isRegistered ? "Register":"LogIn"}</button>
    </form>
    </div>
    )}
    </div>
   
  )
}

export default Login ;