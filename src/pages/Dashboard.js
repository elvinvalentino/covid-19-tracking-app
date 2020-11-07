import React, { Component } from 'react';

import Container from '../components/Container';
import Header from '../components/Header';
import Content from '../components/Content';
import Article from '../components/Article';
import Footer from '../components/Footer'

class Dashboard extends Component {

    state = {
        cases: undefined
    }

    componentDidMount = async () => {
        await fetch("https://covid-193.p.rapidapi.com/statistics?country=Indonesia", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "a291b5c645msh99935275aaf55bap1825f2jsn3efd2bce260c"
        }
    })
    .then(async response => {
        let res = await response.json();
        let datas = await res.response;
        datas.forEach(data => {
            this.setState({
                cases: data
            }, () => {
                setTimeout(() => {
                    this.componentDidMount();
                }, 300000);
            });
        });
    })
    .catch(err => {
        console.log(err);
    });
    }

    render() {
        return (
            <div>
                <Container>
                    <Header />
                    <Content cases={this.state.cases}/>
                    <Article />
                </Container>
                <Footer />
            </div>
        )
    }
}

export default Dashboard;
