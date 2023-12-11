import { IconColor, IconSize, IconType } from './Entities';
import { getIconColor, getIconPath, getIconSize } from './Utilities';

interface IconProps {
    type: IconType;
    size?: IconSize;
    color?: IconColor;
}

export function Icon({
    type,
    size = 'medium',
    color = 'secondary',
}: IconProps) {
    const path = getIconPath(type);
    const iconSize = getIconSize(size);
    const iconColor = getIconColor(color);

    return (
        <svg
            viewBox="0 0 24 24"
            width={iconSize}
            height={iconSize}
            fill={iconColor}
        >
            <path d={path} />
        </svg>
    );
}
