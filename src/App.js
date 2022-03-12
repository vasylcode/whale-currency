import React from 'react';
import './sass/styles.sass';

function App() {
	return (
		<React.Fragment>
			<div className='preloader'>
				<img className='preloader__image' src='./images/whale.svg' alt='loading' />
			</div>

			<header className='header'>
				<img className='logo' src='./images/logo.svg' alt='logo' />
			</header>

			<section className='main'>
				<h1 className='main-title'>Whale Currency Converter</h1>

				<div className='clouds-one'></div>
				<div className='clouds-two'></div>

				<div className='currencies'>
					<div className='currency-block beige'>
						<img src='./images/USD.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>USD</span>
					</div>
					<div className='currency-block blue'>
						<img src='./images/EUR.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>EUR</span>
					</div>
					<div className='currency-block dark-blue'>
						<img src='./images/UAH.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>UAH</span>
					</div>
					<div className='currency-block beige'>
						<img src='./images/PLN.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>PLN</span>
					</div>
					<div className='currency-block blue'>
						<img src='./images/GBP.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>GBP</span>
					</div>
					<div className='currency-block dark-blue'>
						<img src='./images/CHF.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>CHF</span>
					</div>
					<div className='currency-block beige'>
						<img src='./images/JPY.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>JPY</span>
					</div>
					<div className='currency-block blue'>
						<img src='./images/CAD.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>CAD</span>
					</div>
					<div className='currency-block blue'>
						<img src='./images/BTC.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>BTC</span>
					</div>
					<div className='currency-block beige'>
						<img src='./images/ETH.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>ETH</span>
					</div>
					<div className='currency-block dark-blue'>
						<img src='./images/SOL.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>SOL</span>
					</div>
					<div className='currency-block blue'>
						<img src='./images/AED.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>AED</span>
					</div>
					<div className='currency-block beige'>
						<img src='./images/MXN.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>MXN</span>
					</div>
					<div className='currency-block dark-blue'>
						<img src='./images/NOK.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>NOK</span>
					</div>
					<div className='currency-block blue'>
						<img src='./images/SEK.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>SEK</span>
					</div>
					<div className='currency-block beige'>
						<img src='./images/CNY.svg' alt='' className='currency-img' />
						<input type='number' className='input' />
						<span className='currency-text'>CNY</span>
					</div>
				</div>
			</section>

			<footer className='footer'>
				<div className='footer-text'>
					made with &lt;3 by <a href='https://github.com/vasylcode'>vasylcode</a>
				</div>
			</footer>
		</React.Fragment>
	);
}

export default App;
