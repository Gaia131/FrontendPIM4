import React from 'react';
import Header from '../../components/Header';
import './pagamento.css';

const Pagamento: React.FC = () => {

    return (
        <>
        <div>
            <div>
            <Header/>
            </div>
            <div><h1 className="t5">Pagamento</h1></div>
            <br/>
            <form>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input id="credito" name="paymentMethod" type="radio" className="custom-control-input" checked required/>
                <label className="credito">Cartão de crédito</label>
              </div>
              <div className="custom-control custom-radio">
                <input id="debito" name="paymentMethod" type="radio" className="custom-control-input" required/>
                <label className="debito">Cartão de débito</label>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label>Nome no cartão</label>
                <input type="text" className="form-control" id="cc-nome" placeholder="" required/>
                <small className="text-muted">Nome completo, como mostrado no cartão.</small>
                <div className="invalid-feedback">
                  O nome que está no cartão é obrigatório.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label>Número do cartão de crédito</label>
                <input type="text" className="form-control" id="cc-numero" placeholder="" required />
                <div className="invalid-feedback">
                  O número do cartão de crédito é obrigatório.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 mb-3">
                <label>Data de expiração</label>
                <input type="text" className="form-control" id="cc-expiracao" placeholder="" required/>
                <div className="invalid-feedback">
                  Data de expiração é obrigatória.
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <label>CVV</label>
                <input type="text" className="form-control" id="cc-cvv" placeholder="" required/>
                <div className="invalid-feedback">
                  Código de segurança é obrigatório.
                </div>
              </div>
            </div>
            <hr className="mb-4"/>
            <button className="btn btn-primary btn-lg btn-block" type="submit">Finalizar pagamento</button>
          </form>
        </div>
        <br/>
        <br/>
        </>
    )
}
 
export default Pagamento;