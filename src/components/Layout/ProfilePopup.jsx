import React from 'react'
import { useState , useEffect} from 'react'
import { Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './layout.css'
import UserContext from '../../context/Usercontext'
import { useContext } from 'react'

function ProfilePopup({User , title}) {

  const Navigate = useNavigate()
  const { ChangeuserInfo } = useContext(UserContext)

  const [profilepopup , setprofilepopup] = useState(false);
  const [Users , setUsers] = useState([]);


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleProfileClick = (item) => {
    ChangeuserInfo(item);
    setprofilepopup(false);
  }

  return (
    <div>

      <div className='topbar'>
        <h2>{title}</h2>
        <div>
          <Image style={{ borderRadius: '50%', width: '40px', height: '40px' }} src='/Image/NoDp.jpg' rounded />
          <span style={{ cursor: 'pointer' }} onClick={() => { setprofilepopup(!profilepopup) }}>{User.name}</span>
        </div>

      </div>


      {profilepopup && <div className='profilePopup'>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
          <Image style={{ width: '70px', height: '70px', borderRadius: '50%' }} src="/Image/NoDp.jpg" alt='Image' rounded />
          <span>{User.name}</span>
          <span className='email'>{User.email}</span>
        </div>

        <hr style={{ border: '0.5px solid #80808073' }}></hr>

        <div style={{ height: '100px', 'overflow': 'scroll' }}>
          {Users && Users.map((item) => {
            return <div className='profileUsers'>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-start' }}>
                <Image style={{ width: '35px', height: '35px', borderRadius: '50%' }} src="/Image/NoDp.jpg" alt='Image' roundedCircle />
                <div onClick={() => { handleProfileClick(item) }}>{item.name}</div>
              </div>
            </div>
          })}
        </div>
        <div onClick={() => { Navigate('/') }} className='signOut'>Sign Out</div>

      </div>}

    </div>
  )
}

export default ProfilePopup