import styled from 'styled-components'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;


    
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    align-items: center;
    padding: 9px 24px;
    position: absolute;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    z-index: 3;
`

export const HeroH1 = styled.h1`
    color: #fff;
    text-shadow: 3px 3px #3bcfed;
    font-size: 68px;
    text-align: center;
    

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    text-shadow: 3px 3px #180b3e;
    font-size: 34px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`