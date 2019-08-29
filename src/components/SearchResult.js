import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';

const SearchResultBox = styled.div`
    width: 100%;
    margin-top: 2px;
    max-height: 350px;
    overflow-x: hidden;
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius:3px;
    position:relative;
`;
const EmptySearchResultBox = styled(SearchResultBox)`
    height: 250px;
`;

const EmptyResultText = styled.h3`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-weight:400;
`;


const SearchResult = ({ searchResult = [], searchTerm, selectedIndex = -1, onMouseOverUserCard, onSelect }) => {
    if (searchResult.length === 0) {
        return <EmptySearchResultBox>
            <EmptyResultText>No User Found</EmptyResultText>
        </EmptySearchResultBox>
    }
    return <SearchResultBox>
        {searchResult.map((user, index) => <UserCard key={user.id} user={user}
            onMouseOver={onMouseOverUserCard(index)}
            onClick={onSelect}
            searchTerm={searchTerm} selected={selectedIndex === index} />)}
    </SearchResultBox>
}

export default SearchResult;