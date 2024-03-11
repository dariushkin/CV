
import { styled } from "styled-components"
import { Container } from "../../components/Container"
import { theme } from "../../styles/Theme"

const Header = styled.header`

margin-top:10px;

 a {
    color: ${theme.colors.textColor}
}


@media ${theme.media.tablet} {

    ${Container} {
        padding: 0;

    }
}

`
const HeaderWrapper = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;

@media ${theme.media.tablet} {
    justify-content:flex-start;
}

`

export const S  =  {
    Header,
    HeaderWrapper,
}