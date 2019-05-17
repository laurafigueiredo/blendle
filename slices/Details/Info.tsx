import React from 'react';

// Styles
import {
    SWrapper,
    STitle,
    SDescription,
} from './styles/info';

// Interface
interface InfoProps {
    title: string;
    description: string;
};

const Info: React.SFC<InfoProps> = ({
    title,
    description,
}) => {

    return (
        <SWrapper>
            <STitle>{ title }</STitle>
            <SDescription>{ description }</SDescription>
        </SWrapper>
    );
}

export default Info;
