import React from 'react';
import Link from 'next/link';

// Utils
import formatNumber from '~/utils/formatNumber';

// Styles
import {
    SContainer,
    STitle,
    STextWrapper,
    SPoints,
    SPointsText,
    SBullet,
} from './styles/post';

interface PostProps {
    title: string;
    askText: string;
    points: number;
    url: string;
    dataTestId?: string;
};

const Post: React.SFC<PostProps> = ({
    title,
    askText,
    points,
    url,
    dataTestId,
}) => {

    return (
        <SContainer>
            <STitle href={ url } target='_blank' data-testid={ `${dataTestId}-title` }>{ title }</STitle>
            <STextWrapper>
                <Link href={ `/subreddit?id=${ askText }` }>
                    <a className='askLink'>{ askText }</a>
                </Link>
                <SPoints><SBullet>&#8226;</SBullet>{ formatNumber(points) } <SPointsText>points</SPointsText></SPoints>
            </STextWrapper>
        </SContainer>
    );
}

export default Post;
