import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =["Web Developer", "UI Developer", "Full Stack"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta )

        return () => { clearInterval(ticker)};

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); 
        setText(updatedText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
            else if(isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
            
        }    
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Pragnya`}<div className="wrap">{text}</div></h1>
                    <p>As a software professional, I specialize in crafting intuitive and adaptable websites. I focus on delivering distinctive solutions through a creative and forward-thinking approach.</p>
                    <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                    </div>
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}