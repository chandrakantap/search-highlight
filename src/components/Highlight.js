import React from 'react';
import styled from 'styled-components';

const Matched = styled.span`
    color: blue;
    font-weight:bold;
`;

const Highlight = ({ tokens = [], searchTerm }) => {
    return <span>
        {tokens.map((token, index) => token.toLowerCase() === searchTerm.toLowerCase()
            ? <Matched key={`token_${index}`}>{token}</Matched>
            : <span key={`token_${index}`}>{token}</span>)}
    </span>
}

export default Highlight;