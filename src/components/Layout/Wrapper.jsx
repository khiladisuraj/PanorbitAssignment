import React from 'react'
import { useContext } from 'react'
import { Card } from 'react-bootstrap'
import ProfilePopup from './ProfilePopup'
import ProfileDetails from '../User/ProfileDetails'
import './layout.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PostDetails from '../User/PostDetails'
import GalleryScreen from '../User/GalleryScreen'
import ToDo from '../User/ToDo'
import UserContext from '../../context/Usercontext'
import Footer from './Footer'
import { useState } from 'react'

function Wrapper() {

    const { User } = useContext(UserContext)
    const Navigate = useNavigate();

    const [Title , setTitle] = useState('Profile')

    React.useEffect(() => {
        if (!(Object.keys(User).length > 0)) {
            Navigate('/');
         }
    }, [])

    return (
        <div>
            {Object.keys(User).length > 0 && <div className='container'>

                <div>
                    <Card className='sidebar_card'>
                        <ul>
                            <li style={{ color: Title === 'Profile' ? 'white' : '' }} onClick={(e) => { Navigate('/user/ProfileDetails'); setTitle(e.target.outerText); }}>Profile {Title === 'Profile' && <span className='hoverstyle'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg>
                            </span>}</li>
                            <span style={{ border: '0.5px solid #80808073', width: '80%' }}></span>
                            <li style={{ color: Title === 'Post' ? 'white' : '' }} onClick={(e) => { Navigate('/user/PostDetails'); setTitle(e.target.outerText); }}>Post {Title === 'Post' && <span className='hoverstyle'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg>
                            </span>}</li>
                            <span style={{ border: '0.5px solid #80808073', width: '80%' }}></span>
                            <li style={{ color: Title === 'Gallery' ? 'white' : '' }} onClick={(e) => { Navigate('/user/GalleryScreen'); setTitle(e.target.outerText); }}>Gallery {Title === 'Gallery' && <span className='hoverstyle'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg>
                            </span>}</li>
                            <span style={{ border: '0.5px solid #80808073', width: '80%' }}></span>
                            <li style={{ color: Title === 'Todo' ? 'white' : '' }} onClick={(e) => { Navigate('/user/ToDo'); setTitle(e.target.outerText); }}>Todo {Title === 'Todo' && <span className='hoverstyle'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-caret-right" viewBox="0 0 16 16">
                                    <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
                                </svg>
                            </span>}</li>
                        </ul>
                    </Card>
                </div>
                <div style={{ marginLeft: '300px' }}>
                    <ProfilePopup User={User} title={Title} />
                    <hr style={{ border: '0.5px solid #80808073' }}></hr>
                </div>

                <Routes>
                    <Route exact path='/user/ProfileDetails' element={<ProfileDetails User={User} />} />
                    <Route exact path='/user/PostDetails' element={<PostDetails />} />
                    <Route exact path='/user/GalleryScreen' element={<GalleryScreen />} />
                    <Route exact path='/user/ToDo' element={<ToDo />} />
                </Routes>

                <div style={{ position: 'absolute', right: '70px', bottom: '20px' }}>
                    <Footer />
                </div>

            </div>}

        </div>
    )
}

export default Wrapper