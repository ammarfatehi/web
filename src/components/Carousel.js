import React from 'react';

import Card from '../components/Card';

import discord_icon from '../assets/images/discord_icon.png';
import space_invaders_icon from '../assets/images/space_invaders_icon.png';
import alpaca_icon from '../assets/images/alpaca_icon.jpg';
import a_star_icon from '../assets/images/a_star_icon.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {

            items: [
                {
                    id: 0,
                    title: 'Discord Bot',
                    subTitle: 'Bot used to manage a community of 70+ users.',
                    imgSrc: discord_icon,
                    link: 'https://github.com/ammarfatehi/Discord-Bot',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Space Invaders',
                    subTitle: 'Recreated the classic game Space Invaders.',
                    imgSrc: space_invaders_icon,
                    link: 'https://github.com/ammarfatehi/Space-Invaders-TM4C',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Trading Bot',
                    subTitle: 'A trading bot that paper trades on Alpaca Brokerage.',
                    imgSrc: alpaca_icon,
                    link: 'https://github.com/ammarfatehi/Trading-Bot',
                    selected: false
                },
                {
                    id: 3,
                    title: 'A* Path Finding Visualizer',
                    subTitle: 'An interactive GUI to demostrate the A* algorithm',
                    imgSrc: a_star_icon,
                    link: 'https://github.com/ammarfatehi/A-star-Visualizer',
                    selected: false
                }
            ]

        }
    }

    HandleCardClick = (id,Card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected? false : true; 

        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item=> {
            return <Card item={item} click={(e => this.HandleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fuild={true}>
                <Row className = "justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;