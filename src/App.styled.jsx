import styled from 'styled-components'


export const Popup = styled.div`
    width           : 15em;
    background      : white;
    color           : black;
    border-radius   : 1em;
    padding         : 2em ;
    position        : fixed;
    left            : 2em;
    top             : 5em;
    display         : flex;
    flex-flow       : column nowrap;

`
export const LogoLoading = styled.div`
  width: 48px;
  height: 48px;
  position: relative;

  &::after, &::before{
    content: '';  
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 2px solid #FFF;
  position: absolute;
  left: 0;
  top: 50vh;
  animation: animloader 2s linear infinite;
  }

  &::after {
  animation-delay: 1s;
}

@keyframes animloader {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
  
`
export const LoadingPage = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-content: center;
`


export const Button = styled.div`
    width: 2.5em;
    height: 2.5em;
    background-color: #0000001f;
    color: black;
    border-radius: 100%;
    font-size: smaller;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 1em 0;
    cursor: pointer;
`

export const Seccion = styled.div`
    width       : 100%;
    background  : ${ ({ bg })=> bg } ;
    padding     : 2em 0;
`
export const Wrapper = styled.div`
    width       : 90%;
    max-width   : 1200px;
    margin      : auto;
`
export const Titulo  = styled.h2`
    margin      : 0 0 1rem;
    font-weight : ${ ({ weight })=> weight};
    font-size   : ${ ({ size })=> size    };
    color       : ${ ({ color })=> color  };
    line-height : 1em;
`
export const Grid    = styled.div`
    width       : 100%;
    display     : grid;
    grid-template-columns : repeat( auto-fit , minmax( 300px, 1fr ) );
    gap         : 1em;
`
export const Bloque  = styled.div`
    background      :rgb(242, 242, 242);
    padding         : 1em;
    border-radius   : 1em;
`
export const Parrafo = styled.p`
    min-height  : 5em;
    margin      : 0 0 1em;
    font-weight : ${ ({ weight })=> weight};
    font-size   : ${ ({ size })=> size    };
    color       : ${ ({ color })=> color  };
    line-height : 1.4em;
`
export const Img     = styled.img`
    max-width  : 10em;
    min-height : 2em;
    object-fit : scale-down;
`
export const Info    = styled.div`
    height          : 10em;
    background      : ${ ({ bg })=> bg };
    border-radius   : 1em;
    padding         : 0 1em;

    display         : flex;
    flex-flow       : column nowrap;
    justify-content : center;
    align-items     : flex-start;
`
export const Icono   = styled.img`
    width       : 3em;
    height      : 3em;
    margin      : 0 0 1em;
`



export const Columnas = styled.div`
    width       : 100%;
    background  : ${ ( {bg} )=> bg};
    font-size: 1.5em;
`
export const Row      = styled.div`
    width           : 90%;
    max-width       : 1262px;
    margin          : auto;
    display         : flex;
    flex-flow       : row nowrap;
    justify-content : space-around;
    align-items     : center;

    &.right{
        flex-direction    : row-reverse;
    }
    @media screen and (max-width:800px){
        & , &.right{
            flex-direction: column;
        }
    }
`
export const Columna  = styled.div`
    flex-basis:40%;
    max-width: 400px;
    color:white;

    @media screen and (max-width:800px){
        width:90%;
        max-width: 20em;
    }
`
export const Movil    = styled.img`
    max-height  : 38rem;
    object-fit: scale-down;

    &.top{    margin:10.6vh 0 0  }
    &.bottom{ margin: 0 0 10vh }
`
export const Logo     = styled.img`
    width       : 3.4em;
    height      : 3.4em;
    margin      : 0 0 1em;

    @media screen and (max-width:700px){
        margin:2em 0 1em;
    } 
`
export const Download = styled.img`
    max-width   : 8em;
    min-height  : 2em;
` 