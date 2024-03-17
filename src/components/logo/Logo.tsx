/* eslint-disable jsx-a11y/anchor-is-valid */
import { Icon } from "../icon/Icon"
import { animateScroll as scroll } from "react-scroll"

export const Logo: React.FC = () => {
    return (
        <a onClick = {() => {scroll.scrollToTop()}}>
            <Icon iconId={"siteLogo"}/>
        </a>
    )
}