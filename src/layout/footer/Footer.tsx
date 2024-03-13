
import styled from 'styled-components';
import { font } from '../../styles/Common';


export const Footer:React.FC = () => {
    return (
        <StyledFooter>
            <Copyright>
                © 2024  Daria Komarova. All Rights Reserved
            </Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    width: 100%;
    margin-top: 30px;
    text-align:center;


`

const Copyright = styled.small`
    ${font({ Fmax: 10, Fmin: 8 })};
`