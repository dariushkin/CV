
import styled from "styled-components"
import { Navigation } from "../navigation/navigation"





export const DesktopNavigation: React.FC<{ navigationItems: Array<string> }> = (props: { navigationItems: Array<string> }) => {
    return (
        <StyledNavigation>
            <Navigation navigationItems={props.navigationItems}/>
        </StyledNavigation >
    )
}

const StyledNavigation = styled.nav`

   margin-right:140px;

 ul {
    display: flex;
   gap: 30px;

 }

`
