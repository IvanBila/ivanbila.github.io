---
title: PHP Multi-byte strings
date: "2019-05-04"
description: ""
draft: true
---

## Problem definition and setting the why

Do you know why these two results are different? Have you heard of multi-byte functions?

```shell
strlen('')
```

```shell
mb_strlen()
```

## How to install php multi byte extension

Linux

```shell
sudo apt-get install php<version>-mbstring
```

Mac

```shell
brew install php<version>-mbstring
```

## Enable Multibytestring on extensions

```shell
;extensions=mbstring
;extensions=mbstring
```

## Enable using the CLI

NOTE:
phpenmod moduleName enables a module to php7 (restart apache after that sudo service apache2 restart)
phpdismod moduleName disables a module to php7 (restart apache after that sudo service apache2 restart)
php -m lists the loaded modules

If you have several php versions intalled you can also use this syntax:

```shell
phpenmod -v 5.6 <modulename>
phpenmod -v 7.1 <modulename>
```

```shell
php7.2enmod pdo_mysql
```

## PHP timestamp is in seconds whereas javascript is in miliseconds

## Comparision of muti byte functions with normal functions

### REFERENCES

[PHP Modules](https://tecadmin.net/enable-disable-php-modules-ubuntu/)
[INSTALLING PHP EXTENSIONS](https://www.sitepoint.com/install-php-extensions-source/)
[WHY USE MULTIBYTE FUNCTIONS](https://stackoverflow.com/questions/6722277/why-use-multibyte-string-functions-in-php)
[ENCONDING](http://kunststube.net/encoding/)
[ASCII](https://deliciousbrains.com/how-unicode-works/)
[CHAR ENCONDING](https://www.baeldung.com/java-char-encoding)
[WHAT IS MBR](https://www.interserver.net/tips/kb/what-is-mbstring-and-how-to-enable/)
[WORKING WITH MULTIBYTE STRINGS](https://www.sitepoint.com/working-with-multibyte-strings/)
[REF MULTIBYTE](http://www.alejandro.codina.nom.br/php-manual-br/ref.mbstring.html)
[MULTIBYTE STRING HANDLING](https://www.slideshare.net/Daniel_Rhodes/multibyte-string-handling-in-php)
