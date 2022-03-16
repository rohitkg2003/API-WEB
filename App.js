import React, { useEffect, useState } from 'react';

import './index.css';


 function App(){
   const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch('https://randomuser.me/api/');
    
    setUsers(await response.json());
    
  }
  useEffect(()=>{
    getUsers();
  },[]);
  return (
   <>
    if(users.length===0){
    return <div></div>
  }
   <div className="container">
    <div className="map">
      <img src=''></img>
     <div className="heading">
       <img className="img" style={{borderRadius:'50%',width:'20%'}} src={users.results[0].picture.medium} ></img>
       <div classNmae="headingname">
           <h3>Your Name</h3>
           <div>Update your photo and personal details</div>
       </div>
     </div>
    </div>
    <div className="details">
      
    <div className="name"    contenteditable="true">{`Username : ${users.results[0].name.title} ${users.results[0].name.first} ${users.results[0].name.last}`}</div>
    <div contenteditable="true" className="gender">Gender: {users.results[0].gender}</div>
    <div className="location">
     <div contenteditable="true">Street number : {users.results[0].location.street.number}</div>
     <div contenteditable="true">Street name : {users.results[0].location.street.name}</div>
     <div contenteditable="true">City : {users.results[0].location.city}</div>
     <div contenteditable="true">State : {users.results[0].location.state}</div>
     <div contenteditable="true">Country : {users.results[0].location.country}</div>
     <div contenteditable="true">latitude : {users.results[0].location.coordinates.latitude}</div>
     <div contenteditable="true">longitude : {users.results[0].location.coordinates.longitude}</div>
    </div>
    <div className="email" contenteditable="true">Email : {users.results[0].email}</div>
    <div className="dob" contenteditable="true">DOB : {users.results[0].dob.date}</div>
    <div className="age" contenteditable="true">Age : {users.results[0].dob.age}</div>
    <div className="phone" contenteditable="true">Phone no : {users.results[0].phone}</div>
    </div>
   </div>
   </> 
  );
}

export default App;
