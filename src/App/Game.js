import React, {Component} from 'react'
import GameBoard from './Board'

export default class Game extends Component {
	render() {
		return <div className="game">
			<h2 style="text-align:center">Tic Tac Toe</h2>
			<GameBoard />
		</div>
	}
}