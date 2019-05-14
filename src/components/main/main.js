import React, { Component } from "react"
import characters from "../../api/characters"
import FriendCard from "../friendcard/friendcard"
import Jumbotron from '../jumbotron/jumbotron'
import Header from "../header/header"
import Container from "../container/container"
import Footer from '../footer/footer'

import "./main.css";



class Main extends Component {
    state = {
        characters: [],
        score: 0,
        topScore: 0

    };

    componentWillMount() {
        this.setState( {characters});
    }

    handleCorrectGuess = newData => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, topScore);
        newData.clicked = true;
console.log(score);
console.log(newScore);
        this.setState({
            characters: this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore
        });
    };

    handleIncorrectGuess = data => {
        this.setState({
            characters: this.resetChars(data),
            score: 0
        });
    };

    resetChars = chars => {
        const resetChars = chars.map(item => ({ ...item, clicked: false }));
        return this.shuffleData(resetChars)
    };

    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };

    handleClick = id => {
        let guessedCorrectly = false;
        const newData = this.state.characters.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
            }
            // guessedCorrectly = true;
            console.log(newItem.clicked)
            return newItem;
        });
        guessedCorrectly ? this.handleCorrectGuess(newData) : this.handleIncorrectGuess(newData);
        console.log(guessedCorrectly)
    }

    render() {

        return (
            <div>
                <Header
                    score={this.state.score}
                    topScore={this.state.topScore}
                />
                <Jumbotron />
            <Container>

                {this.state.characters.map( (person, i) => (
                     <FriendCard
                    id = {person.id}
                     key={i}
                     handleClick={this.handleClick}
                     img={person.img}
                         />
                ))}
    </Container>
    <Footer/>
        </div>
        )
    }
}


export default Main;