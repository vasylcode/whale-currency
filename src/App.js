import React from 'react';
import axios from 'axios';

import './sass/styles.sass';
import data from './data.json';

import { Header, CurrencyBlock, Footer, Preloader } from './components';

function App() {
	const [currencies, setCurrencies] = React.useState();
	const [value, setValue] = React.useState([]);
	const [currency, setCurrency] = React.useState('btc');

	React.useEffect(() => {
		axios
			.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/' + currency + '.json')
			.then(res => {
				setCurrencies(res.data[currency]);
				console.log('AXIOS SUCCESS');
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
	}, [currency]);

	if (currencies) {
		data.map(data => {
			if (value.length > 0) {
				let name = value[0];
				let price = value[1];

				let newPrice = currencies[data.name] * price;
				if (data.name === name) {
					data.price = Number(price);
				} else {
					return (data.price = newPrice);
				}
			} else {
				let name = data.name;
				return (data.price = currencies[name]);
			}
			return null;
		});
		console.log(data);
	}

	function onChangeBlock(name, val) {
		setValue([name, val]);
		setCurrency(name);
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
						<CurrencyBlock name={data.name} color={data.color} price={data.price} key={data.name} onChangeBlock={onChangeBlock} />
					))}
				</div>
			</section>
			<Footer />
		</React.Fragment>
	);
}

export default App;
