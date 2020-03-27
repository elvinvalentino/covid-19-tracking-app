import React, { useState } from 'react';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Article from '../components/Article';
import Footer from '../components/Footer'

const Dashboard = () => {

    const [cases, setCases] = useState();

    fetch("https://covid-193.p.rapidapi.com/statistics?country=Indonesia", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "a291b5c645msh99935275aaf55bap1825f2jsn3efd2bce260c"
        }
    })
    .then(async response => {
        let res = await response.json();
        let datas = res.response;
        await setCases(...datas)
    })
    .catch(err => {
        console.log(err);
    });

    return (
        <div>
            <Container>
                <Header />
                <Content cases={cases} />
                <Article />
            </Container>
            <Footer />
        </div>
    )
}

export default Dashboard;