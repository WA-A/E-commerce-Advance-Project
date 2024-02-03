import React from 'react'

export default function Profile() {
    const {userData,Loading} = useContext(UserContex);
    if(Loading){
        return <h2>...Loading</h2>
    }
    console.log(userData);
  return (
    <aside className={`${style.Profile}`}> 
    <div className='user-info'>
        <h2>{userData.userName}</h2>
        <img src={userData.mainImage.secure_url}/>
    </div>
    <div className='user-contant'>
        <h2 className='test'>{userData.email}</h2>
        <h2>{userData.phone}</h2>
    </div>
   </aside>
 
  )
}
