import React, { useState, useEffect } from 'react';
import './Displayinfo.scss';
import logo from './../logo.svg';

const DisplayInfo = (props) => {
    const [showhidelist, setshowhidelist] = useState(true);

    const { listUser } = props;
    const onHideShowList = () => {
        setshowhidelist(!showhidelist);
    };

    useEffect(
        () => {
            if (listUser.length === 0) {
                alert('her roi');
            }
            console.log('Use effect finished')
        }, [listUser]
    );
    console.log("Render")
    return (
        <div className='display-info-container'>
            <img src={logo} alt="logo" />
            <div>
                <span onClick={() => onHideShowList()}>{showhidelist === true ? "Hide list user" : "Show list user"}</span>
            </div>
            {showhidelist === true &&
                <div>
                    {listUser.map((user) => {
                        return (
                            <div key={`${user.id}-${user.name}`} className={user.age > 25 ? "green" : "red"}>
                                <div>
                                    <p>Name: {user.name}</p>
                                    <p>Age: {user.age}</p>
                                </div>
                                <div>
                                    <button onClick={() => props.handleDeleteUser(user.id)}>Xoa</button>
                                </div >
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}


export default DisplayInfo;