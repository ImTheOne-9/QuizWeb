import React, { useState } from 'react';
import AddUserInfo from './AddUserInfo';

import DisplayInfo from './DisplayInfo';
const MyComponent = () => {
    const [listUser, setListUser] = useState([
        { id: 1, name: 'hoang', age: 20 },
        { id: 2, name: 'hung', age: 25 },
        { id: 3, name: 'vu', age: 30 }
    ]);

    const handleDeleteUser = (userId) => {
        let listUserClone = [...listUser];
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUser(listUserClone);
    }

    const handleAddUserInfo = (userObj) => {
        setListUser([...listUser, userObj]);
    }
    const test = { name: 'hoang', age: 18 };
    return (
        <>
            {JSON.stringify(test)}
            <AddUserInfo
                handleAddUserInfo={handleAddUserInfo} />
            <DisplayInfo
                listUser={listUser}
                handleDeleteUser={handleDeleteUser} />
        </>

    )
}


export default MyComponent;