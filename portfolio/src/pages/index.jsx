import React from "react";

import { Container } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Wrapper from "../components/Wrapper/Wrapper"

const MainPage = () => {
    return (
        <Wrapper>
            <Container>
                <div class="py-4">

                    <div id="border" class="container bg-warning pb-3" style={{bordercolor: 'black'}}>
                        <h1>About Me</h1>
                        <hr/>
                        <div class=" card-body bg-warning "></div>

                        <div class="media">
                            <img src="./images-folder/positive.png" class="img-fluid pr-3" alt="Positive change in the world"/>
                            <div id="about-me" class="media-body px-3">
                                <p>
                                    I am the embodiment of what it means to be a nerd, majority of my life taking place through my
                                    computer.
                                    However, I enjoy hobbies that take place outside my comfort place. I'm a big fan of
                                    roller-blading,
                                    exploring the outdoors and taking trips to places I haven't yet been to!
                                </p>
                                <p>
                                    To describe me, I am a positive person at my foundation. I try to support everyone around me and
                                    spread
                                    happiness and love anywhere I step foot. I try to be a leader where necessary and pay attention
                                    to those who
                                    direct and lead as well. I have learned to reach for my goals and to embrace the challenges I
                                    face along the
                                    way, to not let the fog of the unknown deter me from what I know I'm capable of achieving.
                                </p>
                                <p>
                                    I'm tied very close to my immediate family, especially my siblings whom I have learned much
                                    after. As the
                                    youngest child in the family, I've grown to understand that I can take in experiences of those
                                    around me and
                                    let that morph my future in a beneficial way that I see fit. This does not mean I'm afraid to
                                    take on
                                    failures of my own, as I have learned in the last couple of years that I shouldn't be scared of
                                    myself
                                    failing or be afraid of new things to come that I am unsure of. After all that is a part of the
                                    excitment we
                                    call life, isn't it?
                                </p>
                                <p>
                                    As a final note, I view my life as a way to deliver those around me positive change. I want to be
                                    the
                                    change I want to see in the world, so I put myself in the position to help as many as I can. We
                                    all have
                                    different life experiences, but that does not mean we have to take on those issues alone. I
                                    choose to live
                                    my life out in this fashion for there are some who don't get to experience positivity in their
                                    life, at
                                    least on a daily basis.
                                </p>
                            </div>
                        </div>
                            

                    </div>
                </div>
            </Container>
        </Wrapper>
    )
};

export default MainPage;