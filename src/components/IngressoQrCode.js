import React, { Component } from 'react';
import QRCode from 'qrcode.react';

class Ingresso extends Component {
	render() {
		return (
			<div>
               <h1>
                Qr Code
               </h1>	   
			    <QRCode
                  id='abc'  
                  value='https://www.digitalhouse.com/br'
                />
			</div>
		);
	}
}

export default Ingresso;