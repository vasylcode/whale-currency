import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';

function Preloader() {
	const { promiseInProgress } = usePromiseTracker();
	return (
		promiseInProgress &&
		<div className='preloader'>
			<img className='preloader__image' src='./images/whale.svg' alt='loading' />
		</div>
	)
}

export default Preloader;