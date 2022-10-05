import React, { useState } from 'react';

import '../style/cuadrado.css';

const CuadradoMagico = () => {
	const [colorRgb, setColor] = useState({ red: 0, green: 0, blue: 0 });

	const [intervalID, setIntervalID] = useState(0);

	const newColor = {
		backgroundColor: `rgb(${colorRgb.red},${colorRgb.green},${colorRgb.blue})`,
	};

	const randomColor = () => {
		const rgbNumbers = [];
		for (let i = 0; i < 3; i++) {
			rgbNumbers.push(Math.floor(Math.random() * (255 - 0 + 1) + 0));
		}
		setColor({
			red: rgbNumbers[0],
			green: rgbNumbers[1],
			blue: rgbNumbers[2],
		});
	};

	const randomColorStart = () => {
		const interval = setInterval(() => {
			randomColor();
		}, 1000);
		setIntervalID(interval);
	};

	const randomColorStop = () => {
		clearInterval(intervalID);
	};

	return (
		<div className="container">
			<div
				id="cuadrado"
				className="dimensions"
				style={newColor}
				onMouseEnter={randomColorStart}
				onMouseLeave={randomColorStop}
				onDoubleClick={randomColorStop}
			></div>
		</div>
	);
};

export default CuadradoMagico;
