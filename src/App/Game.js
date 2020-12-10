import React, {Component} from 'react'
import GameBoard from './Board'

export default class Game extends Component {
	render() {
		return <div className="game">
			<p>Tic Tac Toe</p>
			<GameBoard />
		</div>
	}
}