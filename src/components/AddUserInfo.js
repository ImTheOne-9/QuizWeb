import React, { useEffect, useState } from 'react';

const AddUserInfo = (props) => {
    const [name, setName] = useState('user');
    const [age, setAge] = useState(30);
    const { handleAddUserInfo } = props;

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        console.log('Form submitted');
        console.log(name, age);
        setName('hoang');
        setAge(30);
        handleAddUserInfo({
            id: Math.floor((Math.random() * 100) + 1),
            name: name,
            age: age
        });
    }


    return (
        <>
            My name is {name}, I'm {age} years old.
            <form onSubmit={(event) => onSubmitForm(event)}>
                <input
                    value={name}
                    type="text"
                    onChange={(event) => onChangeName(event)}>

                </input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddUserInfo;