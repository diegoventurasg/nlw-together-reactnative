## 💻 Projeto
Projeto desenvolvido durante a 6ª edição do NLW. É um aplicativo que possui autenticação com Discord e ajuda a organizar grupos para jogar seus games favoritos com seus amigos.

## :hammer_and_wrench: Features 

-   [ ] Autenticação Social OAuth2 com servidor do Discord.
-   [ ] Obtém perfil do usuário cadastro no Discord (username e avatar);
-   [ ] Lista os servidores do Discord que o usuário faz parte;
-   [ ] Permite realizar o agendamento de partidas;
-   [ ] Permite filtrar as partidas por categoria;
-   [ ] Exibe se a partida foi agendada em um servidor próprio (anfitrião) ou em servidores de outros (convidado);
-   [ ] Compartilha o convite para ingressar no servidor do usuário;
-   [ ] Permite redirecionar o usuário para o seu próprio servidor;
-   [ ] Disponibiliza a função de Logout.


## ✨ Tecnologias

-   [ ] React Native
-   [ ] Typescript
-   [ ] Expo
-   [ ] Context API
-   [ ] Async Storage
-   [ ] Vector Icons
-   [ ] React Native Svg e Svg Transform
-   [ ] Axios
-   [ ] Gradient colors
-   [ ] OAuth2 Discord 
-   [ ] Expo Google Fonts
-   [ ] React Navigation Stack
-   [ ] React Native Gesture Handler
-   [ ] Expo Authentication
-   [ ] React Native Share
-   [ ] Deep Link


## 🔖 Layout

![layout](https://user-images.githubusercontent.com/79009385/139664521-91ed0a45-6f5d-4e31-8329-1c21241c2cc9.png)

## Executando o projeto

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o projeto.

```cl
expo start
```

Lembre-se de criar o seu App no servidor do Discord para obter as credencias de autenticação. Em seguida, defina no arquivo .env as configurações do seu App (remova o example do arquivo .env.example).
 
 ```cl
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```