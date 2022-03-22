import React from 'react';

function CurrencyBlock( {name, color, price} ) {

	const image = './images/'+ name +'.svg';
	const classColor = 'currency-block ' + color;

	const [value, setValue] = React.useState(price);

	React.useEffect(() => (
		setValue(price)
	), [price]);

	React.useEffect(() => (
		convertValue(value)
	), [value]);

	const onInputChange = e => {
		setValue(e.target.value);
		console.log(e.target.nextSibling.innerHTML)
	}

	const convertValue = (value) => {
		console.log(value)
	}

  return (
	<div className={classColor}>
		<img src={image} alt='' className='currency-img' />
		<input type='number' className='input' defaultValue={value} onChange={onInputChange} />
		<span className='currency-text'>{name}</span>
	</div>
  )
}

export default CurrencyBlock;