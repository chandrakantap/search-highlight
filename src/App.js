import React, { useState } from 'react';
import styled from 'styled-components';
import SearchResult from './components/SearchResult';
import { getFilterdUser } from './userService';
import SelectedUser from './components/SelectedUser';

const AppContainer = styled.div`
    margin:50px auto;
    width:500px;
    padding:24px;
    font-family:arial,sans-serif
`;

const SearchInput = styled.input`
    background: #eee;
    padding: 14px;
    width: 100%;
    border: 1px solid #dddd;
    border-radius: 3px;
    font-size: 16px;
`;

const UPKEY_CODE = 38;
const DOWNKEY_CODE = 40;
const ENTERKEY_CODE = 13;

const App = () => {
    const [timeOutRef, setTimeOutRef] = useState();
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selectedUser, setSelectedUser] = useState(undefined);

    const filterResult = withSearchKey => {
        setSearchResult(getFilterdUser(withSearchKey));
        setSearchTerm(withSearchKey);
        setShowSearchResult(true);
        setSelectedIndex(-1);
    }

    const onChangeInput = event => {
        /* if any filterResult scheduled already, clear that */
        if (timeOutRef) {
            clearTimeout(timeOutRef);
        }

        const value = event.target.value.trim();

        if (value && value.length > 0) {
            setSearchTerm(value);
            /* schedule a filterResult after 200 miliseconds*/
            setTimeOutRef(setTimeout(() => filterResult(value), 400));
        } else {
            setShowSearchResult(false);
            setSearchResult([]);
            setSearchTerm('');
        }

    }

    const onMouseOverUserCard = index => () => setSelectedIndex(index);

    const onKeyDown = event => {
        const key = event.keyCode;
        if (key !== UPKEY_CODE && key !== DOWNKEY_CODE && key !== ENTERKEY_CODE) {
            return;
        }

        event.preventDefault();
        if (key === ENTERKEY_CODE && selectedIndex >= 0) {
            onSelectResult();
        }
        else if (selectedIndex < 0) {
            setSelectedIndex(0);
        } else if (key === UPKEY_CODE && selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        } else if (key === DOWNKEY_CODE) {
            const resultLen = searchResult.length - 1;
            if (selectedIndex < resultLen) {
                setSelectedIndex(selectedIndex + 1);
            }
        }
    }

    const onSelectResult = () => {
        const selectedUser = searchResult[selectedIndex].original;
        setSearchTerm(selectedUser.name);
        setSearchResult(selectedUser);
        setShowSearchResult(false);
        setSelectedUser(selectedUser);
    }

    return <AppContainer>
        {selectedUser && <SelectedUser user={selectedUser} />}
        <SearchInput onChange={onChangeInput} onKeyDown={onKeyDown}
            value={searchTerm}
            placeholder="Search user by id, name and address" />
        {showSearchResult && <SearchResult searchResult={searchResult}
            selectedIndex={selectedIndex}
            onMouseOverUserCard={onMouseOverUserCard}
            onSelect={onSelectResult}
            searchTerm={searchTerm} />}
    </AppContainer>
}

export default App;