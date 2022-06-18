import React from 'react';

function CurrencyBlock( {name, color, price, onChangeBlock} ) {
	const image = './images/'+ name +'.svg';
	const classColor = 'currency-block ' + color;
	

	const [value, setValue] = React.useState();

	React.useEffect(() => (
		setValue(price)
	), [price]);

	const onInputChange = e => {
		setValue(e.target.value);
		onChangeBlock(name, e.target.value);
	}

	// onBlur={e => alert("test")}
  return (
	<div className={classColor} key={name}>
		<img src={image} alt='' className='currency-img' />
		<input type='number' className='input' value={value || ''} onChange={onInputChange} />
		<span className='currency-text'>{name}</span>
	</div>
  )
}

export default CurrencyBlock;