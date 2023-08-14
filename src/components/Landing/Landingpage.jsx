import React, { useState, useEffect , useContext} from 'react';
import { Card, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './landing.css'
import UserContext from '../../context/Usercontext';

function Landingpage() {

  const [users, setUsers] = useState([]);
  const { ChangeuserInfo } = useContext(UserContext);
  const Navigate = useNavigate()

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

  const handleclick = (item) => {
    ChangeuserInfo(item)
    Navigate('/user/ProfileDetails')
  }

  return (

    <div className='landing_layout'>

      <Card className='card'>
        <div className='text'>
          <span>Select an account</span>
        </div>
        <div style={{ height: '400px', 'overflow': 'scroll' }}>
          {users && users.map((item, index) => {
            return <div key={index} className='user_list'>
              <Image style={{ width: '40px', height: '40px', borderRadius: '50%' }} src="./Image/NoDp.jpg" roundedCircle />
              <div style={{ 'cursor': 'pointer' }} onClick={() => handleclick(item)}>
                {item.name}
              </div>
            </div>
          })}
        </div>
        <footer className='footer_card'>
          <label> i am footer</label>
        </footer>
      </Card>

    </div>
  )
}

export default Landingpage