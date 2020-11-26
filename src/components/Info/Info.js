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
