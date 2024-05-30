import css from './picture.module.css';

export interface IPictureProps {
    path: string;
    width: string;
    height: string;
    position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed';
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
}

export function generatePicture(image: string): IPictureProps {
    return {
        path: image,
        width: '132px',
        height: '132px',
        position: 'absolute',
        bottom: '12px',
        right: '12px',
    }
}

export function Picture(props: IPictureProps) {
    return (
        <img className={css.picture} src={props.path} alt="picture" style={{ width: props.width, height: props.height, position: props.position, top: props.top, left: props.left, bottom: props.bottom, right: props.right }} />
    )
}