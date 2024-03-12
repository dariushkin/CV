
import { Icon } from "../../../../components/icon/Icon"
import {S} from "../../skills/Skills_Styles"


type SkillPropsType = {
    iconId: string
    skillDescription: string
}


export const Skill: React.FC<SkillPropsType>= (props:SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId={props.iconId} />
            <S.SkillText>{props.skillDescription}</S.SkillText>
        </S.Skill>
    )
}



 