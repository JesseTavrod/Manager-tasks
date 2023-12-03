# Projeto com estrutura para ReactJS apps


## Portfolio

`assets`: Armazenar imagens (leves, pesadas é melhor em uma CDN), icones, etc.

`components`: Components reutilizáveis da aplicação. Componentes que unidades, pequenas partes, button, modal entre outros.

`hooks`: armazenar hooks generecos (useScreenSize, useLocalStore..) geralmente possivel usar em qualquer projetos.

`pages`: As pages são as páginas que usam vários components. É essa a página que o usuário vai ver.

`services`:  Configurações de HTTP clientes.

`store`: Definições de state managers, context api, zustand, redux entre outros.

`types`: Armazena as tipagens de typescript (types e interfaces) que são comuns em várias áreas do projeto.

`utils`: Funções utilizatias como formatCurrency, formatPhone, convertTimeZone, parsePhone. (Js puro)


