
import styled from 'styled-components';


export const Footer = () => {
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
text-align:center;
font-size:10px;
`

const Copyright = styled.small`




`