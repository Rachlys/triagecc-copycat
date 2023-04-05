import { useEffect, useState } from "react"
import { Global } from './global/global'

import { ThemeProvider } from "styled-components"
import { GlobalStyles } from './global/global.styled'
import { Bloque, Button, Columna, Columnas, Download, Grid, Icono, Img, Info, LoadingPage, Logo, LogoLoading, Movil, Parrafo, Popup, Row, Seccion, Titulo, Wrapper } from "./App.styled"

const App = () => {

  let [datos , setDatos           ] = useState([])
  let [ bloques  , setBloques     ] = useState([])
  let [ info     , setInfo        ] = useState([])
  let [ columnas , setColumnas    ] = useState([])

  let [ show , setShow    ] = useState(true)
  let [ loading, setLoading ] = useState(true)

  useEffect(()=>{
      fetch('https://app-triage.onrender.com/')
      .then( res => res.json())
      .then(data =>{
        console.log(data)
        setDatos(data)
        setBloques(data[0])
        setColumnas(data[1])
        setInfo(data[2])
        setLoading(false)
      })
  },[] )


  let closePop = () =>{
    setShow(!show)
  }
  return (
    <Global.Provider value={ datos }>
    <ThemeProvider theme={ {} }>
      <GlobalStyles />
      <div className="App">

      { loading && <LoadingPage>
          <LogoLoading/>
         </LoadingPage>}

      { show &&  <Popup>
                  <Button onClick={() =>{ closePop()}}>X</Button>
                  This is a copycat of Triage CC made by Romina just for educational purposes.
      </Popup>}


         { !loading && columnas.map( ({ titulo , parrafo , icono , movil, color, download } , i )=>          
          
          <Columnas key={i} bg={ color }>
            <Row className={ i % 2 ? 'right' : ''}>
              <Columna>
                <Logo src={ icono } alt={ titulo }/>
                <Titulo  size='2em' weight='700' color={color === 'rgb(255, 184, 0)' ? 'black' : 'white' }  >{ titulo }</Titulo>
                <Parrafo color={color === 'rgb(255, 184, 0)' ? 'black' : 'white' }>{ parrafo }</Parrafo>              
                { download && <Download  src={ download } alt="Download App Store"/> }
              </Columna>
              <Columna>
                <Movil className={ movil.tipo } src={ movil.src }  alt={ titulo } />
              </Columna>
            </Row>

          </Columnas>

        )} 
      

        {!loading && < Seccion bg='rgb(242, 242, 242)'>
          <Wrapper>
            <Grid>
              
              { info.map( ( cadaInfo , i )=> 
               
                <Info key={i} bg={ cadaInfo.color }>
                  <Icono src={cadaInfo.icon} />
                  <Titulo 
                    weight='600'
                    color={ cadaInfo.colorTexto}
                    size='1em'>{ cadaInfo.texto }</Titulo>
                </Info>

              )}
              
            </Grid>
          </Wrapper>
        </Seccion> } 


        {!loading && <Seccion>
          <Wrapper>
            <Titulo weight='600' size='1.5em'>Praise for Triage 1</Titulo>
            <Grid>
              
              { bloques.map( ( cadaBloque , i ) =>
              
                <Bloque key={i}>
                  <Parrafo>{ cadaBloque.texto }</Parrafo>
                  <Img src={ cadaBloque.src } />
                </Bloque>
                
              )}

            </Grid>
          </Wrapper>
        </Seccion>} 

      </div>
    </ThemeProvider>
    </Global.Provider>
  )
}
 
export default App