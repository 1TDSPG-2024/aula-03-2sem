/**
 * Regras para um componente funcional do React.
 * 1 - Ser uma função JavaScript.
 * 2 - Esta função deve ter como uma boa prática o mesmo nome do arquivo em questão.
 * 3 - Ter um instrução return com corpo. Ex return( ... )
 * 4 - Utilizar as directivas de exportação: export default antes do nome function.
 * 5 - Criar uma estrutura dentro do return com elementos de blocos HTML do tipo PAI Ex: DIV,HEADER, MAIN, SECTION...
 * 6 - Opcional utilizar o "import React from 'react';", somente se utilizar alguma funcionalidade do pacote 'react'.
**/

import Cabecalho from "./Cabecalho/Cabecalho";

export default function App() {
  return (
    <div>
      <Cabecalho/>
    </div>

  );
}