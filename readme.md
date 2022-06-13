# Good Beers
Projeto para criação da solução para exibição das informações recuperadas da api
<div float="left">
<img src="https://i.imgur.com/IsktKbE.png" alt="drawing" width="200"/>
<img src="https://i.imgur.com/3z3vvsz.png" alt="drawing" width="200"/>
<img src="https://i.imgur.com/nYz0kyc.png" alt="drawing" width="200"/>
<img src="https://im.ezgif.com/tmp/ezgif-1-f0ebc5f0b5.gif" alt="drawing" width="200"/>
</div>


# Iniciando
- Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste. Consulte implantação para obter notas sobre como implantar o projeto em 
um sistema ativo.

- O objetivo do projeto é fazer o consumo da api https://punkapi.com/documentation/v2, aplicando conceitos de listagens, filtros, paginação cache de imagens, ordenação, organização da arquitetura do projeto, componentização e testes.



## Pré-requisitos:
Para execução e desenvolvimento do projeto é necessário, ou que tenha instalado:
- nodejs
- yarn ou npm
- Ambiente com Android studio para Android / Ambiente com xcode para IOS



## Desenvolvido com
 - NodeJs
 - JavaScript
 - Typescript
 - [React Native](https://reactjs.org/)
 - Jest
 - [React Native net info](https://github.com/react-native-netinfo/react-native-netinfo)
 - [Axios](https://github.com/axios/axios)
 - [React Native Fast Image](https://github.com/DylanVann/react-native-fast-image)
 

## Configuração do ambiente
- Para configuração do ambiente de desenvolvimento no android, é necessário que o usuario tenha instalado o NodeJs LTS, seguir os passos para configuração do ambiente para o react native cli (https://reactnative.dev/docs/environment-setup).

## Execução pro projeto
 - Para executar o projeto pelo navegador executando na própria máquina basta baixar os pacotes do package.json 
 utilizando o comando ``` yarn ou npm install ``` e logo após o download terminar, utilizar o comando ``` yarn start```.
 - Deve ter instalado o android studio com uma avd disponível para execução, ou disponibilizar modo desenvolvedor de um smartphone android conectado via usb.
 - Se o usuário estiver desenvolvendo com ios, é necessário navegar até o diretório /ios, e executar o comando ```pod install``` (atenção, esse passo só funcionará após configurado o ambiente para o ios)
 

## Executar os testes 
- Para executar os testes unitários basta rodar o comando ``` yarn test ou npm run test``` no terminal no diretório raiz.


## Git
- Para o git tentei usar ao máximo os padrões do [gitflow](https://danielkummer.github.io/git-flow-cheatsheet/).




## Pontos de melhoria:
- Diversos pontos de melhoria para seguir:
    - Aumentar a cobertura de testes (é possível verificar a cobertura de testes com o Jest).
    - Melhorar parte da componentização e aplicar React.memo em mais componentes para melhorar o desempenho.
    - Adicionar mais filtros inclusos na PunkApi.


## Autores
- Adriano Martins de Oliveira Sousa.
