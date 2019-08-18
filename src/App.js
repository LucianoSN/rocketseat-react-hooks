import React, { useState, useEffect, useMemo } from 'react';

function App() {
	const [tech, setTech] = useState([]);
	const [newTech, setNewTech] = useState('');

	const handleAdd = () => {
		setTech([...tech, newTech]);
		setNewTech('');
	};

	useEffect(() => {
		const storageTech = localStorage.getItem('tech');

		if (storageTech) {
			setTech(JSON.parse(storageTech));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('tech', JSON.stringify(tech));
	}, [tech]);

	const techSize = useMemo(() => tech.length, [tech]);

	return (
		<>
			<ul>
				{tech.map(t => (
					<li key={t}>{t}</li>
				))}
			</ul>
			<p>
				<strong>Você tem {techSize} tecnologias</strong>
			</p>
			<input
				value={newTech}
				type="text"
				onChange={e => setNewTech(e.target.value)}
			/>
			<button type="button" onClick={handleAdd}>
				Adicionar
			</button>
		</>
	);
}

export default App;
