import React from 'react';

// Styles
import {
    STitle,
} from './styles/title';

// Interface
interface TitleProps {
    children: string;
    className?: string;
};

const Title: React.SFC<TitleProps> = ({
    children: text,
    className,
}) => (
    <STitle className={ className }>{ text }</STitle>
);

export default Title;
