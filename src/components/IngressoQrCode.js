import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import PDF from './PDF';
import imgagemEscolhida from './PagCine.JPEG';

class Ingressos extends Component {
    state = {
        title: 'Um tio quase perfeito 2',
        content:  <QRCode
					 id='Filme: Um tio quase perfeito 2
					         Sessão: Seg - 19hs
							 Nome: Jhon
							 Valor Pago R$: 27.50'
					value='https://www.pagcine.com.br'
					/>  
          ,        
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.title || !this.state.content){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
										    <img src={imgagemEscolhida} alt="Logo PagCine" width="150" height="80"></img>																								                                                  										
                                            <fieldset>											    											
												<legend className="text-left header">Obrigado pela preferência!</legend>                                                
                                                <div className="form-group">																								
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Emitir Ingresso</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (

                        <PDF title= {this.state.title} content={this.state.content}/>
                    )
                }
            </>

            
        );
    }
}
// class Ingresso extends Component {
// 		render() { 		
// 		return (
// 			<div>			
//                <h4>			   
// 			   Ingresso PagCine <br/>
// 			   Valor: R$ 9.50
//                </h4>	   
			   
// 			    <QRCode
//                   id='abc'  
//                   value='https://www.digitalhouse.com/br'
//                 />
// 			</div>
// 		);
// 	}	
// }


export default Ingressos;