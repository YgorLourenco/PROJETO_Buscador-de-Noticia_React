import React, {Fragment, useState, useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  // Definir a categoria e noticia
  const [categoria, guardarCategoria] = useState('') // Esse State guarda a categoria da noticia no hooks
  const [noticias, guardarNoticias] = useState([]) // Vai guadar o array de objetos da requisição em formato JSON

  // useEffect(() => {
  //   const consultarAPI = async () => {
  //     const API = '81673cba4b934873953af1db871a6ac7'
  //     const url = `https://newsapi.org/v2/top-headlines?country=br&category=${categoria}&apiKey=${API}`
  //     const resposta = await fetch(url)
  //     const noticias = await resposta.json()

  //     guardarNoticias(noticias.articles)
  //     // console.log(noticias.articles)
  //   }
  //   consultarAPI()
  // }, [categoria]) // Vai usar esse State para mudar as informações da API
  useEffect(() => {
    const consultarAPI = async () => {
      const API = '81673cba4b934873953af1db871a6ac7';
      const url = `https://newsapi.org/v2/top-headlines?country=br&category=${categoria}&apiKey=${API}`;
  
      try {
        const resposta = await fetch(url);
        // console.log(resposta)
        if (!resposta.ok) {
          throw new Error('Network response was not ok');
        }
        const noticias = await resposta.json();
        guardarNoticias(noticias.articles);
      } catch(error) {
        // handle fetch failure or any other thrown errors
        console.log(error)
      }
    }
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header 
        titulo='Buscador de Noticias'
      />
      <div className='container white'>
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
