
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import { theme } from '../styles/Theme';


export const Slider: React.FC = () => {
    return (
        <StyledSlider>
            <Pagination>
                <span></span>
                <span></span>
                <span></span>
            </Pagination>
        </StyledSlider>
    );
};


const StyledSlider = styled.div`

`
const Pagination = styled.div`

@media ${theme.media.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

        span {
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: ${theme.colors.gradientEndColor};
            border-radius: 50%;

 }
}
`