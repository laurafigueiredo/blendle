import React from 'react';

// Shared Components
import Title from '~/components/Title';
import Subtitle from '~/components/Subtitle';

// Components
import Post from './Post';

// Utils
import useFetch from '../../utils/useFetch';

// Interface
interface TotalDataProps {
    loading: boolean;
    error: string | null;
    data: PostDataProps | null;
} 

interface PostDataProps {
    data: {
        children: Array<ItemProps>;
    };
}

interface ItemProps {
    data: {
        title: string;
        url: string;
        subreddit_name_prefixed: string;
        score: number;
    }
}

// Styles
import {
    SContainer,
    STitlesWrapper,
} from './styles/list';

const List = () => {
    const {
        loading,
        error,
        data: postData,
    }: TotalDataProps = useFetch('https://www.reddit.com/best.json?limit=10');

    return (
        <SContainer>
            <STitlesWrapper>
                <Title>Home</Title>
                <Subtitle>Top 10 posts</Subtitle>
            </STitlesWrapper>
            {
                loading && <div data-testid="loading">Loading...</div>
            }
            {
                !!error && <div data-testid="error">Error</div>
            }
            {
                !!postData &&
                postData.data.children.map((item: ItemProps, idx: number) => (
                    <Post
                        dataTestId={`postData-${idx}`}
                        key={ `post-${idx}` }
                        title={ item.data.title }
                        url={ item.data.url }
                        askText={ item.data.subreddit_name_prefixed }
                        points={ item.data.score } />
                ))
            }
        </SContainer>
        
    );
}

export default List;
