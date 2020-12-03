import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {listData, faqContent} from '../../data/dataStore';
import styles from './FAQ.scss';

const FAQ = () => (
  <Container>
    <Hero titleText={listData.title} image={faqContent.image} />
    <h2>{faqContent.title}</h2>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>{faqContent.email}</p>
    <p>&nbsp;</p>
    <p>{faqContent.phone}</p>
    <p>&nbsp;</p>
    <p>{faqContent.address}</p>
    <p>&nbsp;</p>
    <p><a href='https://github.com/MagdalenaRomanowska' className={styles.link}>{faqContent.github}</a></p>
  </Container>
);

export default FAQ;
