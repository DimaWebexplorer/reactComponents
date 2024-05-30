import css from './card.module.css';

export interface ITextStyle {
    color: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: string;
    lineHeight: string;
    letterSpacing: string;
    width?: string;
}

export interface IHeaderStyle extends ITextStyle {
    fontSize: 18 | 24 | 32 | 48;
}

export interface ICardProps {
    boxShadow: string;
    color: string;
    radius: string;
    header: {
        text: string,
        style: IHeaderStyle,
    };
    description: {
        text: string,
        style: ITextStyle,
    };
    line?: {
        color: string;
        width: string;
    };
    flexGrow?: number;
    eventClick?(): void;
    getPicture?(): JSX.Element;
}

function getTextStyle(params: ITextStyle) {
    return {
        color: params.color, fontSize: params.fontSize, fontFamily: params.fontFamily, fontWeight: params.fontWeight, lineHeight: params.lineHeight, letterSpacing: params.letterSpacing, maxWidth: params.width
    }
}

function getLineStyle(params: ICardProps) {
    return {
        background: params.line?.color, width: params.line?.width, borderTopLeftRadius: params.radius, borderEndStartRadius: params.radius
    }
}

export function Card(props: ICardProps) {
    return (
        <div className={css.card} style={{ background: props.color, borderRadius: props.radius, boxShadow: props.boxShadow, flexGrow: props.flexGrow }} onClick={props.eventClick}>
            {props.line ? <div className={css.line} style={getLineStyle(props)}></div> : null}
            <header className={css.header} style={getTextStyle(props.header.style)}>
                {props.header.text}
            </header>
            <p className={css.description} style={getTextStyle(props.description.style)}>
                {props.description.text}
            </p>
            {props.getPicture ? <props.getPicture/> : null}
        </div>
    )
}