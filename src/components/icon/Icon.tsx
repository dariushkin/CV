import React from "react"
import iconsSprite from "../../assets/images/sprite.svg"

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string

}

export const Icon = (props: IconPropsType) => {
    return (

            <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"}>
                <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
            </svg>

    )
}

