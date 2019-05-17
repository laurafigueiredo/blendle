import React from 'react';

// Styles
import {
    SSubtitle,
} from './styles/subtitle';

// Interface
interface SubtitleProps {
    children: string;
    className?: string;
};

const Subtitle: React.SFC<SubtitleProps> = ({
    children: text,
    className,
}) => (
    <SSubtitle className={ className }>{ text }</SSubtitle>
);

export default Subtitle;
