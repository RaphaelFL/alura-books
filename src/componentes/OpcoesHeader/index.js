import styled from "styled-components";

const textoOpcores=['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

const Opcao = styled.li`
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`

const Opcoes = styled.ul`
  display: flex;
  cursor: pointer;
  align-items: center;
`

function OpcoesHeader(){
    return (
        <Opcoes>
          {textoOpcores.map((texto)=>
                <Opcao><p>{texto}</p></Opcao>)}
       </Opcoes>
    )
}

export default OpcoesHeader;