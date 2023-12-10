import { IconSize, IconType } from './Entities';

export function getIconSize(size: IconSize) {
    switch (size) {
        case 'small':
            return 16;
        case 'medium':
            return 20;
        case 'big':
            return 24;
        default:
            return 20;
    }
}

export function getIconPath(type: IconType) {
    switch (type) {
        case 'logout':
            return 'm17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z';
        default:
            return '';
    }
}
