import React from 'react'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'
import PropTypes from 'prop-types'

const Formulario = ({guardarCategoria}) => {

    const OPCOES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimento'},
        {value: 'health', label: 'Saúde'},
        {value: 'science', label: 'Ciência'},
        {value: 'sports', label: 'Esportes'},
        {value: 'technology', label: 'Tecnologia'},
    ]

    // Utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCOES) // Vai começar com noticiais mais lidas e depois vai poder escolher as opções de noticia

    // Submit o formulario, para passar a categoria a App.js
    const buscarNoticias = e => {
        e.preventDefault()

        guardarCategoria(categoria)
    }

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className='col s12 m8 offset-m2'>
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encontre Noticias por Categoria</h2>

                        <SelectNoticias />

                    <div className='input-field col s12'>
                        <input 
                            type='submit'
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value='Buscar'
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}


Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;