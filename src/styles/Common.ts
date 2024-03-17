import { theme } from "./Theme"

type FontPropsType = {

family?: string,
weight?: number,
lineHeight?: number,
color?:string,
Fmin?: number,
Fmax?: number,
}


export const font = ({ family, weight, color , lineHeight, Fmin, Fmax }: FontPropsType ) => `
    font-family: ${family || "Montserrat"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.textColor};
    line-height: ${lineHeight || 1.2};
    font-size: calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`