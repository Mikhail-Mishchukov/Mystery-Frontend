import { IconSize, IconType } from './Entities';
import { getIconPath, getIconSize } from './Utilities';

interface IconProps {
    type: IconType;
    size?: IconSize;
}

export function Icon({ type, size = 'medium' }: IconProps) {
    const path = getIconPath(type);
    const iconSize = getIconSize(size);

    return (
        <svg viewBox="0 0 24 24" width={iconSize} height={iconSize}>
            <path d={path} />
        </svg>
    );
}
