
import { Navigation } from "../navigation/Navigation"
import {S} from "../headerNavigations_Styles"




export const DesktopNavigation: React.FC<{ navigationItems: Array<string> }> = (props: { navigationItems: Array<string> }) => {
    return (
        <S.DesktopNavigation>
            <Navigation navigationItems={props.navigationItems}/>
        </S.DesktopNavigation >
    )
}


