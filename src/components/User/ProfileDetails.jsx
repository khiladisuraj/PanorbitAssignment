import React from 'react'
import { Image } from 'react-bootstrap'
import './user.css'

function ProfileDetails({ User }) {

  return (
    <div>

      <div className='profile_layout'>

        <div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Image style={{ borderRadius: '50%', width: '220px', height: '220px' }} src='/Image/NoDp.jpg' rounded />
            <div className='textValue'>{User.name}</div>
          </div>

          <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', margin: '20px auto 20px 70px' }}>
            <div> <label className='label'>Username : </label> <span className='textValue'>{User.username}</span> </div>
            <div> <label className='label'>e-mail : </label> <span className='textValue'> {User.email}</span></div>
            <div> <label className='label'>Phone : </label>  <span className='textValue'>{User.phone}</span></div>
            <div> <label className='label'>Website : </label>  <span className='textValue'>{User.website}</span></div>
          </div>

          <hr style={{ border: '0.5px solid #80808073', width: '80%' }}></hr>

          <div style={{ 'textAlign': 'center' }}><label className='label'>Company</label> </div>

          <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', margin: '20px auto 20px 70px' }}>
            <div> <label className='label'>Name : </label> <span className='textValue'>{User.company?.name}</span></div>
            <div> <label className='label'>catchphrase : </label><span className='textValue'> {User.company?.catchPhrase}</span></div>
            <div> <label className='label'>bs : </label> <span className='textValue'>{User.company?.bs}</span></div>
          </div>
        </div>

        <span style={{ border: '0.5px solid #80808073' }}></span>

        <div>
          <label className='label'>Address : </label>
          <div style={{ display: 'flex', gap: '20px', flexDirection: 'column', margin: '20px auto 20px 70px' }}>
            <div> <label className='label'>Street : </label><span className='textValue'>{User.address?.street}</span> </div>
            <div> <label className='label'>Suite : </label><span className='textValue'>{User.address?.suite}</span> </div>
            <div> <label className='label'>City : </label><span className='textValue'>{User.address?.city}</span> </div>
            <div> <label className='label'>Zipcode : </label><span className='textValue'>{User.address?.zipcode}</span> </div>
          </div>

          <div className='mapImage'>
            <Image style={{ width: '600px', height: '300px', borderRadius: '10px' }} src='/Image/MapImage.png' />
            <div>
              <label className='label'>Lat : </label><span className='textValue'>{User.address?.geo?.lat}</span>
              <label className='label'>Long : </label><span className='textValue'>{User.address?.geo?.lng}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ProfileDetails