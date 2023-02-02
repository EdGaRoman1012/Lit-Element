# Lit-Element
Proyecto desarrollado con la libreria Lit-Element, HTML, CSS, JS

GitHub no soporta el Hosting de los Web Components, asi que de mostrare los pasos para ejecuarlo tu mismo en un Servidor de Desarrollo Web
1. Descargar el proyecto
2. Ejecutarlo en un IDE de preferencia en Visual Studio Code
3. Una vez abierto abre una terminal y ejecuta los siguientes comandos

## Dev Server

1. npm init -y
2. Instale el servidor de desarrollo
    > npm i --save-dev @web/dev-server
3. Luego agregue lo siguiente a la "scripts" sección en package.json:    
    >" scripts": {"start": "web-dev-server --node-resolve --open --watch"}
4. Corra el servidor con la sentencia 
    > npm run start
