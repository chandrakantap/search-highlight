import React, { useRef } from 'react';
import styled from 'styled-components';
import Highlight from './Highlight';

const UserCardRoot = styled.div`
    padding:10px;
    font-size:14px;
    border-bottom:1px solid #eee;
    line-height: 20px;
    cursor:pointer;
    background:${props => props.selected ? 'lightyellow' : 'white'}
    ul{
        list-style:none;
        border-top:1px solid #eee;
        border-bottom:1px solid #eee;
        padding:5px 0;
    }
    ul li:before {
        content:"\\2022";
        color: blue;
        margin-right: 0.5rem;
    }
`;
const UserId = styled.h4`
    padding:2px;
    font-weight:600;
    text-transform:uppercase;
`;
const UserName = styled.h4`
    padding:2px;
    font-weight:200;
    font-style: italic;
`;
const UserAddress = styled.h4`
    padding:2px;
    font-weight:400;
`;

const UserCard = ({ user = {}, searchTerm, selected = false, onMouseOver, ...props }) => {

    const cardRef = useRef(null);

    if (selected && cardRef.current) {
        cardRef.current.scrollIntoViewIfNeeded({ block: "end", behavior: 'smooth' });
    }

    return <UserCardRoot selected={selected} ref={cardRef} onMouseOver={onMouseOver} {...props}>
        <UserId><Highlight tokens={user.id} searchTerm={searchTerm} /></UserId>
        <UserName><Highlight tokens={user.name} searchTerm={searchTerm} /></UserName>
        {user.inItems && <ul><li>"{searchTerm}" found in in items</li></ul>}
        <UserAddress><Highlight tokens={user.address} searchTerm={searchTerm} /></UserAddress>
    </UserCardRoot>
};

export default UserCard;