import React from 'react';
import styled from 'styled-components';

const SelectedUserRoot = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:1fr 3fr;
    grid-gap:5px;
    margin-bottom:15px;
    h2{
        font-size:16px;
        font-weight:400;
        color:blue;
    }
    h3{
        font-size:14px;
        font-weight:200;
        text-transform:upperCase;
    }
`;

const SelectedUser = ({ user }) => <SelectedUserRoot>
    <h2>id:</h2><h3>{user.id}</h3>
    <h2>Name:</h2><h3>{user.name}</h3>
    <h2>Items:</h2><h3>{user.items.join(", ")}</h3>
    <h2>Address:</h2><h3>{user.address} {user.pincode}</h3>
</SelectedUserRoot>

export default SelectedUser;