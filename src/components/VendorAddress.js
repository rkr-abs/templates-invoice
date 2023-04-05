import { Text, View } from '@react-pdf/renderer';
import React from 'react';

const VendorAddress = (context) => {
	const { config: { obj: { vendor }}, data: styles } = context;

	return <View style={ styles.subView }>
		<Text style={ styles.text }>
			<Text style={ styles.light }>{vendor.name}</Text>
		</Text>
		{ vendor.address.map((address, i) =>
			<Text key={ i } wrap={ true } style={ styles.text }>
				<Text style={ styles.light }>{address}</Text>
			</Text>)}
	</View>;
};

export default VendorAddress;