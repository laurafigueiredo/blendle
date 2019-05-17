import React from 'react';

// Icons assets
import { Back } from './assets';

// Styles
import { SWrapper } from './styles/icon';

// Interface
interface IconProps {
    name: string;
    width?: number;
    height?: number;
    color?: string;
    className?: string;
}

const Icon: React.SFC<IconProps> = ({
    name,
    width,
    height,
    color,
    className,
}) => {
    switch (name) {
        case 'Back': return <SWrapper className={ className }><Back width={ width } height={ height } color={ color } /></SWrapper>;
        default: return null;
    }
};

export default Icon;