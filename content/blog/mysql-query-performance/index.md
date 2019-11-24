---
title: "Mysql Query performance"
date: "2019-07-06"
description: ""
draft: true
---

## Introducao

Recentemente tive de melhorar a performance de uma das paginas do [emprego.co.mz](https://www.emprego.co.mz), durante
esse processo aprendi a fazer profiling e melhorar a performance das queries do mysql.

Neste blog post nao irei falar ou mencionar outras tecnicas usadas para melhorar a performance do mysql como usar memcahed
ou redis ou um servidor de pesquisa ou qualquer ferramenta externa ao mysql que serve para fazer cache ou indexacao, irei
adressar somente como fazer o profiling e melhorar as queries usando somente as ferramentas disponiveis no mysql.

> Measre twice cut once

O primeiro passo antes de procurar melhorar as queries do mysql é analisar realmente se existe uma necessidade de passar
um tempo analisando as queries para melhorar, isto é profiling. Outro ponto importante a levantar é que melhorar a despende
tempo que as vezes o resultado desse trabalho todo pode ser 3s ou 2s a menos na nossa query...

Profiling é a fase onde verificamos quais as queries que gastam mais recursos ou que levam mais tempo sendo executadas e
eventualmente enviado o resultado para a aplicacao.

Para ligar/activar profiling temos de correr o seguinte comando:

```mysql
SET profiling = 1
```

é importante firsar que devemos correr a instrucao acima depois de escolher a base de dados na qual vamos executar as queries, para escolher a base de dados
a ser usada corremos o seguinte comando:

```
use <base_de_dados>
```

Depois de escolher a base de dados e
