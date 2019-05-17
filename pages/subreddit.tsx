import React from 'react';

// Components
import Details from '../slices/Details';

import GlobalStyles from '../styles/globalStyles';

interface SubredditProps {
    id: string;
};

const Subreddit: React.SFC<SubredditProps> = ({
    id,
}) => {
    return (
        <>
            <GlobalStyles />
            <Details subreddit={ id } />
        </>
    );
};

Subreddit.getInitialProps = ({ query: id }: { query: { id: string } }) => {
    return id;
}

export default Subreddit;