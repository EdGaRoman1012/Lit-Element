# Lit-Element
Proyecto desarrollado con la libreria Lit-Element, HTML, CSS, JS

GitHub no soporta el Hosting de los Web Components, asi que de mostrare los pasos para ejecuarlo tu mismo en un Servidor de Desarrollo Web

1.- npm init -y
2.- Instale el servidor de desarrollo
     npm i --save-dev @web/dev-server
     Luego agregue lo siguiente a la "scripts" sección en package.json:
     
     Quedara de esta manera
     "scripts": {
      "start": "web-dev-server --node-resolve --open --watch"
     },
3.- Corra el servidor con la sentencia 
    npm run start
