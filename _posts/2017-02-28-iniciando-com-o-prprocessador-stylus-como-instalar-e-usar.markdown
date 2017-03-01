---
layout: post
title: "Iniciando com o Pré-processador Stylus: como instalar e usar!"
date: "2017-02-28 18:45:10 -0300"
---


Com certeza você que trabalha com desenvolvimento web já ouviu falar sobre, e pode até já ter brincado um pouco com pré-processadores css. Hoje vou falar um pouco sobre o Stylus e algumas features dessa belezinha.

Há algum tempo estava procurando uma maneira de agilizar a maneira que escrevia minhas folhas de estilo, logo de cara conheci o tão famoso [Sass][sass], por algum motivo adiei o estudo no assunto, e neste período ouvi falar sobre um tal de Stylus, fui dar uma olhada na sintaxe e foi amor a primeira vista.

## Preparando o ambiente:

Bom, se você leu até aqui está interessado em como o stylus funciona. Ele roda com javascript, então vá logo instalando o [nodeJS][nodeJS] e inicie um projeto node.

```sh
npm init
```

Você vai precisar de um automatizador de tarefas para efetuar a compilação, utilizaremos o gulp, instale o [gulp][gulp] globalmente em sua maquina:

```sh
npm install gulp-cli -g
```

Agora crie uma pasta para o projeto e instale o [gulp][gulp] e o [stylus][stylus-gulp] como dependências de desenvolvimento:

```sh
npm install gulp gulp-stylus --save-dev
```

Agora precisamos configurar nosso gulpfile, aqui vai as configurações da tarefa que o gulp irá automatizar:



```sh
  {
    var gulp = require('gulp');
    var stylus = require('gulp-stylus');

    gulp.task('compile', function () {
      return gulp.src('estilo.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./'));
    });

    gulp.task('default', ['compile']);
  }
```
Obs.: lembre-se sempre de executar a tarefa "gulp compile" no terminal. Para automatizar isto leia sobre o [gulp-watch][gulp-watch].

Agora que temos tudo configurado vamos ao que interessa, crie um arquivo chamado "estilo.styl" e vamos as dicas:



### Sintaxe:
No stylus você pode esquecer de vez as "{}", ":" e ";".
- "Beleza Marcelo, mas como ele vai saber se o bloco acabou?" Simples: Indentação! Dê uma olhada na declaração abaixo:

```sh
.classe
      color #000

.outra-classe
      color #fff
```
Lindo, né?



### Variáveis:
Um ótimo exemplo sobre onde usar variáveis seria quando você quer definir uma cor principal para o seu projeto, para que você não precise digitar aquele hexadecimal/rgb enorme toda vez que você for atribuir tal cor a uma propriedade, basta armazenar o valor em uma variável e chamá-la quando necessário.

```sh
// Definindo
cor-principal = #4B0082

// Usando
header
     background cor-principal
```



### Mixins:
Com mixins você pode otimizar muito seu tempo, você pode usá-los para fazer cross-browser por exemplo, sua sintaxe é bem parecida com as funções, mas não retornam nada, apenas aplicam o valor que você passou como parâmetro nas propriedades que você quiser, exempĺo:

```sh
// Usando:
box-shadow()
     -webkit-box-shadow arguments
     -moz-box-shadow arguments
     box-shadow arguments

footer
     box-shadow(0 0 5px #000)


// compila para:
footer {
     -webkit-box-shadow: 0 0 5px #000;
     -moz-box-shadow: 0 0 5px #000;
     box-shadow: 0 0 5px #000;
}
```



### Herança:
No stylus podemos herdar as propriedades definidas em uma classe escrita anteriormente com o uso do "@extend", funciona de maneira muito simples, segue exemplo:

```sh
.classe
     font-size 18px
     color #000

.classeQueHerda
     @extend .classe
     text-transform uppercase


// compila para:
.classeQueHerda {
     font-size: 18px;
     color: #000;
     text-transform: uppercase;
}
```


### Continue descobrindo:
Citei apenas coisas básicas do stylus aqui, se você quiser se aprofundar mais na linguagem, recomendo que leia a [documentação][stylus] dela.

Deixe um comentário dizendo o que achou do post, críticas construtivas são bem vindas! :)

[stylus]: http://stylus-lang.com/
[nodeJS]: https://nodejs.org/en/
[sass]: http://sass-lang.com/
[gulp]: http://gulpjs.com/
[stylus-gulp]: https://www.npmjs.com/package/gulp-stylus
[gulp-watch]: https://www.npmjs.com/package/gulp-watch
