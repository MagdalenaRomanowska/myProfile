import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {listData, infoContent} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={listData.title} image={infoContent.image} />
    <h2>{infoContent.title}</h2>
    <p>&nbsp;</p>
    <p>{infoContent.content01}</p>
    <p>{infoContent.content02}</p>
    <p>{infoContent.content03}</p>
    <p>{infoContent.content04}</p>
    <p>{infoContent.content05}</p>
    <p>&nbsp;</p>
    <p><b>{infoContent.content05a}</b></p>
    <p>{infoContent.content05b}</p>
    <p>{infoContent.content05c}</p>
    <p>{infoContent.content05d}</p>
    <p>{infoContent.content05e}</p>
    <p>{infoContent.content05f}</p>
    <p>{infoContent.content05g}</p>
    <p>{infoContent.content05h}</p>
    <p>{infoContent.content05i}</p>
    <p>{infoContent.content05j}</p>
    <p>&nbsp;</p>
    <h2>{infoContent.myLanguages}</h2>
    <p>&nbsp;</p>
    <p>{infoContent.language1}</p>
    <p>{infoContent.language2}</p>
    <p>&nbsp;</p>
    <h2>{infoContent.myEducation}</h2>
    <p>&nbsp;</p>
    <p>{infoContent.education1a}</p>
    <p>{infoContent.education1b}</p>
    <p>{infoContent.education1}</p>
    <p>{infoContent.education2}</p>
    <p>{infoContent.education3}</p>
    <p>&nbsp;</p>
    <h2>{infoContent.myInterests}</h2>
    <p>&nbsp;</p>
    <p>{infoContent.content06}</p>
    <p>{infoContent.content07}</p>
    <p>{infoContent.content08}</p>
    <p>{infoContent.content09}</p>
    <p>{infoContent.content10}</p>
    <p>{infoContent.content11}</p>
  </Container>
);

export default Info;
