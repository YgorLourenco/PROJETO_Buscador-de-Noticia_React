import React, {useState} from 'react'

const useSelect = (stateInicial, opcoes) => {

    // State do Custom Hook
    const [state, atualizarState] = useState(stateInicial);

    const SelectNoticias = () => {
        return (
            <select
                className='browser-default'
                value={state} // Armazena o estado inicial que é a categoria 'General'
                onChange={e => atualizarState(e.target.value)} // Atualizar o hooks se mudar de noticia
            >
                {opcoes.map(opcao => (
                    <option key={opcao.value} value={opcao.value}>{opcao.label}</option> // Vai tratar cada valor das opções de noticia individualmente
                ))}
            </select>
        )
    };
    return [state, SelectNoticias];
}

export default useSelect;