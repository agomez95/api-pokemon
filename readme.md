## Instalacion

```bash
$ npm i
```

## Importante 1

* Para este proyecto, la ejecucion de variables de entonor se da por medio de scripts por lo que es imperativo ejecutar los siguientes comandos en un terminal bash de Window:

```bash 
# este es el comando que debe ser ejecutado antes que el del servidor y usado de igual forma en la ejecucion del comando principal
$ source scripts/env.sh
```
* Este es el comando de Mac:
```bash
# este es el comando que debe ser acompañado en el script de ejecución del servidor nodemon 
$ . ./scripts/sh.sh
```

## Importante 2

* Al ser un api que sera importando data de una api externa en un contenedor se debe consider lo siguiente:
```bash
# comando para borrar cualquier carpeta de mongo(base de datos elegida para propositos demostrativos de este proyecto) 
$ rm -r mongo
```
* Ejecutado el comando de borrado, ejecutamos el comando para crear el contenedor Docker con la base de datos de mongo
```bash
# este es el comando que debe ser acompañado por un node o nodemon a su costado 
$ npm run docker
```

## Ejecutar

* Los comandos para ejecutar el servidor es:

```bash
# Window - Git Bash
$ npm run local:win
```
* En MacOs seria así

```bash
# MacOS - Bash
$ npm run local:mac
```