import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'
import { Button } from '../ButtonElements'


const HeroSection = () => {
    
    const [ hover, setHover ] = useState (false);

    const onHover = () => {

        setHover(!hover)

    }
    
    
    
    return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>
                Tech Front - Soluções em Tecnologia
            </HeroH1>
            <HeroP>
                Solucionando projetos do presente para viabilizar o seu futuro!
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}                
                >
                    Iniciar {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    )
}

export default HeroSection