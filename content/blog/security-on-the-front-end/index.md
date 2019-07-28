---
title: Security on the frontend
date: ""
description: ""
draft: true
---

## Use HTTPS

When you use http all data sent from the client to the server and vice-versa is unencrypted that implies that
your users sensitive information such as credit cards number and CVC (if your site supports payment) is exposed 
to anyone connected to the network(it gets even more dangerous if the network is public) and sniffing packages
and might get the sensitive data and use it for personal gain at the expense of your users.

Currently there's two options for installing https or getting the ssl certificate, you can either buy from a 
vendor/provider such as Digi-cert or get the free ssl certificate with let's encrypt.

The down side of using let's encrypt is browser support, you can only get the Domain Validation ssl 
certificate and you have to renew it every three months.

Having https also allows us to access browser apis that would not be available if the domain origin does not 
have a valid ssl certificate such as Service workers, Push Api, and Location, you can check the full list here:
https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts

Not having access to Service workers means that your app cannot qualify as a PWA, and the worst thing is that browsers
will label your site as being unsecured.


## Taking user input as is(not sanitizing)

Not sanitizing user input extremely dangerous, if your don't sanitise user input your app might be suggested to SQL or XSS.
Suppose I have a banking that can allow me to make transfers and I have an input that sends it to the api.

The bank app contains this input

## Don't use deprecated libraries/frameworks with widely knows vulnerabilities

## Inspect frameworks or libraries before deploying to production or using it

## Don't send sensitive data using get requests

## Add adding noopener noreferer to external links

## use doctype

## Force internet explorer to use it's best rendering engine

## Don't sensitive data or apis keys to javascript code

## Prefer http only cookies for sensitive data

## Preferably do business logic on the backend