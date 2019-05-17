import React from 'react';
import Link from 'next/link';

// Components
import Info from './Info';

// Utils
import useFetch from '~/utils/useFetch';
import formatNumber from '~/utils/formatNumber';

// Styles
import {
    SContainer,
    STitle,
    SDescription,
    SIcon
} from './styles/details';

// Interface
interface TotalDataProps {
    loading: boolean;
    error: string | null;
    data: DetailsDataProps | null;
} 

interface DetailsDataProps {
    data: {
        title: string;
        public_description: string;
        subscribers: number;
    };
}

interface DetailsProps {
    subreddit: string;
};

const Details: React.SFC<DetailsProps> = ({
    subreddit,
}) => {
    const {
        loading,
        error,
        data: detailsData,
    } : TotalDataProps = useFetch(`https://www.reddit.com/${ subreddit }/about.json`);

    return (
        <SContainer> 
            <Link href='/'>
                <a className='GoBackLink'><SIcon className='GoBackIcon' name='Back' color='#4583C2' /> Home</a>
            </Link>
            <STitle>{ subreddit }</STitle>
            <SDescription>Subreddit details</SDescription>
            {
                loading && 'Loading...'
            }
            {
                !!error && 'Error'
            }
            {
                !!detailsData &&
                <>
                    <Info
                        title={ 'Title' }
                        description={ detailsData.data.title } />
                    <Info
                        title={ 'Public Description' }
                        description={ detailsData.data.public_description } />
                    <Info
                        title={ 'Subscriber count' }
                        description={ formatNumber(detailsData.data.subscribers) } />
                </>
            }
        </SContainer>
    );
}

export default Details;
