---
title: "Como desenvolvedores podem melhorar a UX"
date: "2019-04-27"
description: ""
draft: true
---

Existem algumas coisas que os desenvolvedores podem fazer para melhorar a experiência geral do utilizador em um aplicativo;
ele/ela pode não precisar fazer um curso de experiência de utilizador para aprender.

No entanto, quando passadas despercebidas, podem danificar a experiência da aplicação, por outro lado, se voce passar
algum tempo e corrigi-los, pode melhorar significativamente a experiência do utilizador no aplicativo.

### Prove o valor do seu aplicativo

Imagine ser solicitado a sua cópia de identidade / cartão de crédito antes de entrar em uma loja? Como você se sentiria?
É assim que os utilizadores se sentem quando você pede seus dados antes mesmo de usar seu aplicativo, o que estou dizendo
é que devemos deixar o utilizador fazer algo em nossa aplicativos sem exigir que ele se inscreva. Não é suficiente colocar
uma tela inicial ou um breve tutorial sobre como o aplicativo funciona para determinar se seu aplicativo vale a pena ou não.

> "Se você me pedir meus dados antes de oferecer qualquer valor, isso significa que você está mais preocupado com
meus dados do que com a solução meu problema. ” utilizador apressado

Eu acho que a afirmação acima resume tudo. Seria melhor se você não solicitasse que um utilizador fizesse login ou
fornecesse dados (dele) antes mesmo de mostrar a ele por que seu aplicativo merece (atenção) ou dados.
Eu sei que alguns aplicativos precisam saber sobre o utilizador antes dele usá-lo, mas acho que você sempre pode dar
um jeito de dar valor antes de pedir.

> Valorize seus utilizadores antes de solicitar.

### Prefira o OAuth sobre a senha tradicional de e-mail

Quando um utilizador se cadastra usando o tradicional senha e e-mail, ele tem que memorizar a senha para seu aplicativo
específico ou, pior ainda, em alguns casos ele pode reutilizar uma senha (a menos que ele use um aplicativo gerador / gerenciador de senhas).

Alguns utilizadores tendem a reutilizar ou criar senhas fracas para a maioria dos aplicativos que usam, para evitar
trabalhos difíceis de memorizar ou salvar em um gerenciador de senhas.

Ter que memorizar as coisas é trabalhoso, exaustivo e demorado, geralmente os utilizadores têm muitas coisas para
acompanhar (tarefas, nomes de família, números de telefone), então é improvável que eles memorizem a senha da sua app,
eles têm zilhões de apps , você quer tornar seu aplicativo fácil de usar sem o incômodo de lembrar senhas e e-mails.
Para evitar isso, você pode usar o OAuth.

Com o OAuth, o utilizador não precisa memorizar uma senha ou nome de utilizador
(em suma, ele permite login / logout sem senha), o login ou a inscrição é apenas um “clique / toque”, o que significa
que ele só precisa permitir que seu aplicativo acesse seus dados.

Esse fluxo tende a ser menos trabalhoso/exaustivo para o utilizador porque ele não precisa memorizar uma senha e verificar
se o email foi preenchido corretamente. Usar o fluxo OAuth significa que você não precisa implementar a lógica para
redefinir a senha (a menos que você tenha utilizadores usando a senha de e-mail) que o utilizador provavelmente esquecerá
várias vezes até parar de usar seu serviço.

Ao usar o OAuth, além de ter a conveniência de fazer login do utilizador sem exigir uma senha, você também terá acesso
à informação (nome, sobrenome, idade e mais) que o utilizador já preencheu em sua conta.

Se você deve usar o Google, o Twitter, o Facebook, o Linkedin ou o provedor GitHub OAuth pode depender de suas necessidades,
no entanto, na maioria das vezes, você usará mais de um provedor OAuth.

Como o Facebook e o Google são os provedores com mais utilizadores, vou comparar os dois e no fim concluir o por que de
usar um ao inves do outro.

O Google e o Facebook permitem que você obtenha quase as mesmas informações para um determinado utilizador, mas o uso
de um ou outro pode ter implicações diferentes na experiência do utilizador para seu aplicativo.

Normalmente, o fluxo é o quase o mesmo e você clica para registrar ou entrar, então você é redirecionado para uma
página onde você pode aceitar, recusar ou aceitar mas personalizar (eu só posso ver esse recurso no Facebook)
que informações app pode obter da sua conta.

No celular mais especificamente Android, quando você faz login ou se inscreve no Facebook, ele geralmente abre uma
guia do navegador da Web que pode ser cara para o utilizador.

Abrir o navegador ou aplicativos externos usa RAM e capacidade de processamento, o que não é o que você quer que seu
aplicativo faça, porque a maioria dos dispositivos tem pouca RAM e a capacidade de processamento é escassa, mesmo que
tenham bom poder de processamento. outros aplicativos além do seu.

Outra desvantagem de abrir um navegador / aplicativo para entrar / sair é a perda da atenção do utilizador, porque ele
é levado para um lugar diferente, onde pode encontrar distrações e quem sabe se ele retornará?

O Google disponibilizou alguns recursos interessantes para acelerar o fluxo de sinal usando, para a Web, um chamado
"registro de toque" ou "auto login", que permite fluxos de login e inscrição contínuos e ininterruptos com
um sinal -no ecrã ou inscrever-se.

### Não peça que eles convidem seus amigos nem avaliem você

Sério, eu não acho que os utilizadores convidem outras pessoas para usar um aplicativo. Ninguém faz isso. É estranho, se
eu quiser que meu amigo use este aplicativo X, eu digo a ele para fazer o download e explicar os benefícios e dizer a
ele como eu sou legal porque estou usando ou como isso mudou, melhorou ou me ajudou a fazer isso.
Boca a boca é o tipo de convite ou recomendação que as pessoas querem, não receber uma mensagem ou um e-mail dizendo
que o utilizador X convidou você para usar este aplicativo, como o aplicativo deve resolver meu problema se já estiver
criando um novo me enviando por spam. ?

### Use a linguagem apropriada

Ao contrário de outros campos extremamente formais como arquitetura e direito, no software, ninguém virá e suspenderá
seu aplicativo porque a linguagem não está gramaticalmente correta (há alguns casos extremos em que a linguagem tem que
seguir estritamente as regras da gramática e assim por diante), ou usou palavras que não existem no dicionário.

Ao criar seu aplicativo, prefira um idioma fácil de entender e no contexto. (Não precisa ser gramaticalmente correto,
embora isso não seja um apelo para ignorar totalmente a gramática, há pequenas coisas que você pode fazer ou alterar
em seu idioma para facilitar o entendimento para seus utilizadores específicos).

O uso inadequado da linguagem pode causar dúvida, incerteza, hesitação, ambigüidade, desinformação.

Textos longos podem prejudicar a experiência do utilizador, pois ele pode estar usando um dispositivo móvel que
não possui uma tela grande.

Aqui estão alguns exemplos de mau uso da linguagem que resultaram em confusão, desinformação:

Há muito mais coisas que você pode fazer para melhorar a experiência do utilizador, mas decidi me concentrar apenas
naquelas que eu acho que quando ignoradas podem prejudicar a experiência do utilizador no seu aplicativo significativamente.

Espero que você tenha encontrado algo que possa ser aplicado no seu projecto actual ou em projetos futuros e que
tenhas aprendido tanto quanto eu ao escrever este post, que seu próximo / atual projeto tenha a melhor experiência
possível.

Obrigado e até a próxima.
