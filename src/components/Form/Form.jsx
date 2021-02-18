import React, {useState} from 'react'


export default function Form() {
    const [conta, setConta] = useState()
    const [porcentagem, setPorcentagem] = useState(10)
    const [pessoas, setPessoas] = useState(1)
    const convertido = (porcentagem/100)* conta
    let arredondado = (conta + convertido) / pessoas

    return (
        <div>
            <div className="Header"><h1>Calculadora de Gorjetas</h1>
                <div className="Divider"></div>
            </div>
                    <div className="Content">
                        <label>Valor da conta: R$ {conta},00 </label>
                        
                        <input type="number" value={conta} onChange={(e)=>setConta(parseFloat(e.target.value))}></input>

                        <label>Porcentagem da gorjeta: {porcentagem}%</label>
                        
                        <input type="number" value={porcentagem} onChange={(e)=>setPorcentagem(parseFloat(e.target.value))}></input>

                        <label>Quantas pessoas pagarão a conta ?</label>
                        <label>{pessoas}</label>
                        
                        <input type="number" value={pessoas} onChange={(e)=>setPessoas(parseInt(e.target.value))}></input>
                        

                        <div className="Buttons">

                            {conta > 0 &&
                                <>
                                    <h3>Total R$ {arredondado.toFixed(2)}{pessoas > 1 && <span> por pessoa</span>}</h3>
                                    
                                </>
                            }
                                                          
                        </div>          
                </div>
        </div>
    )
}
