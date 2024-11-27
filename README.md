## Intro

Mi intento de resolver AoC 2024. Voy a tratar de definir cómo setear esto manualmente para quien quiera revisar y tratar de seguir mi idea.
No quiero automatizar todo y que sólo se tenga que correr un comando para arrancar la cosa como he visto en otros repos. Me interesa que sea visible el proceso para setear el proyecto porque de paso se pueden aprender cosas sobre cómo levantar código en X lenguaje.

## Contents

*   [Getting started](#getting-started)
*   [Languages and Technologies](#languages-and-technologies)
*   [Requirements](#requirements)
*   [Install](#install)
*   [Usage](#usage)
*   [Testing](#testing)
*   [References](#references)

## Getting Started


### Languages and Technologies

*   [Typescript](https://www.typescriptlang.org)
*   [Deno](https://deno.land)
*   [Lua](https://www.lua.org)

#### Typescript & Deno

Typescript ya sabemos que es JS con tipos, etc. Lo importante acá es usarlo para practicar tipado en vez de valerse solo del clásico Javascript. Peeero, no planeo perderme en el tipado tampoco, porque sé que la inferencia de TS es bastante buena. No voy a andar creando interfaces o cosas extras si no hacen falta.
Deno por otro lado interpreta Typescript nativo y me llama la atención su *standard library*. Así no tengo que andar traspilando a JS y peleando con archivos al pedo. Además un solo comando me sirve para todo y me parece super cómodo para un repo de AoC donde no querés tener 40 archivos por cada día del mes.

#### Lua (maybe LuaRocks)

Lua es un lenguaje super simple y bastante dinámico. Es muy fácil de integrar como lenguaje secundario en un montón de cosas por eso muchos juegos lo tienen para permitir mods. Todo Roblox está pensado para Lua, Minecraft, Stalker y mi favorito de chico World of Warcraft.
Mis configs de NeoVim se escriben en Lua también XD
LuaRocks es el manejador de paquetes para Lua, pero puede que no lo necesite. Lo dejo para el Fran del futuro.

### Requirements

Para Typescript:
- Deno 2.0. `winget install DenoLand.Deno` ò `curl -fsSL https://deno.land/install.sh | sh`

Para Lua:
- Lua interpreter `winget install "Lua for Windows"` ò `sudo pacman -S lua`
- LuaRocks (maybe, es opcional)


### Usage

Cada día va a estar numerado del 01 al 25. El *día 00* va a ser el template para el resto. Planeo generarlos día a día por si se me ocurre hacer cambios o mejoras sobre la marcha. Voy a empezar sin tests y mejorar en el camino porque no quiero meterme a explorar documentación de más y perderme de lo importante.

#### Typescript

Hay un `deno.json` y un `deno.lock` igual que con npm. Ahí se instalan los paquetes necesarios. Todos los paquetes necesario están en [JSR](https://jsr.io/)

Instalar paquetes
```bash
#Deno install (igual que con npm)
deno i
```

El propio Deno tiene un modo _watch_ que corre el código de nuevo luego de cambiarlo. Perfecto para desarrollo.

```bash
deno run --watch a.ts
```

*Datazo*: Deno pide permisos para acceder a la carpeta del proyecto. Esto se puede evitar con `deno run --allow-read .`

#### Lua

Creo que nada

```bash
lua 00/a.lua
```

### Testing


## Sources


## References

