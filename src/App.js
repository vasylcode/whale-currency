import React from 'react';
import axios from 'axios';

import './sass/styles.sass';
import data from './data.json';

import { Header, CurrencyBlock, Footer, Preloader } from './components';

function App() {
	const [currencies, setCurrencies] = React.useState();

	React.useEffect(() => {
		axios
			.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json')
			.then(res => {
				setCurrencies(res.data.btc);
			})
			.catch(err => {
				if (err.response) {
					console.error('Whale Currency: API response error.');
					// client received an error response (5xx, 4xx)
				} else if (err.request) {
					console.error('Whale Currency: API response was not received.');
					// client never received a response, or request never left
				} else {
					console.error('Whale Currency: Error while responding.');
					// anything else
				}
			});
	}, []);

	if (currencies) {
		data.map(data => {
			let name = data.name;
			return (data.price = currencies[name]);
		});
		console.log(data);
	}

	return (
		<React.Fragment>
			<Preloader />
			<Header />
			<section className='main'>
				<h1 className='main-title'>Whale Currency Converter</h1>

				<div className='clouds-one'></div>
				<div className='clouds-two'></div>

				<div className='currencies'>
					{data.map(data => (
						<CurrencyBlock name={data.name} color={data.color} price={data.price} key={data.name} />
					))}
				</div>
			</section>
			<Footer />
		</React.Fragment>
	);
}

export default App;
