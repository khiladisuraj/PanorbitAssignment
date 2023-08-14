import React from 'react'
import { useState , useEffect} from 'react'
import { Image } from 'react-bootstrap'
import './layout.css'

function Footer() {

    const [users, setUsers] = useState([]);
    const [Popover , setPopover] = useState(false)
    const [PopoverChat , setPopoverChat] = useState(false)
    const [Name , setName] = useState("")

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


    return (
        <div>

            <div >
                <div className='footer' onClick={() => setPopover(true)}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                            </svg>
                        </span>
                        <span>Chats</span>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill" viewBox="0 0 16 16">
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg>
                    </span>
                </div>

                {Popover && <div className='popover' >
                    <div className='footer' onClick={() => { setPopoverChat(false); setPopover(false) }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16">
                                    <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z" />
                                </svg>
                            </span>
                            <span>Chats</span>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                        </span>
                    </div>

                    <div style={{ height: '350px', overflow: 'scroll' }}>
                        {users && users.map((item, index) => {
                            return <div key={index} className='popoverText'>
                                <Image style={{ width: '30px', height: '30px', borderRadius: '50%' }} src="/Image/NoDp.jpg" roundedCircle />
                                <div style={{ 'cursor': 'pointer', color: 'black' }} onClick={() => { setPopoverChat(true); setName(item.name) }}>
                                    {item.name}
                                </div>
                            </div>
                        })}
                    </div>
                </div>}

                {PopoverChat && <div className='popoverChat'>
                    <div className='footer' onClick={() => { setPopoverChat(false) }} >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Image style={{ width: '20px', height: '20px', borderRadius: '50%' }} src="/Image/NoDp.jpg" roundedCircle />
                            <span>{Name}</span>
                        </span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </span>
                    </div>

                    <div style={{ height: '210px', overflow: 'scroll', borderBottom: '0.5px solid #80808073' }}>
                        <div className='chatbox'>
                            Lorem Ipsum dolar sit amet consextetur
                        </div>
                        <div className='chatbox'>
                            Lorem Ipsum dolar sit
                        </div>

                        <div style={{ color: '#9e9e9eba', textAlign: 'center' }}>9:16 PM</div>

                        <div style={{ 'float': 'right' }}>
                            <div className='chatbox'>
                                Lorem Ipsum dolar
                            </div>
                            <div className='chatbox'>
                                Lorem Ipsum
                            </div>
                        </div>
                    </div>

                    <div style={{ color: 'black', textAlign: 'right' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" color='blue' fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </div>
                </div>}
            </div>

        </div>
    )
}

export default Footer