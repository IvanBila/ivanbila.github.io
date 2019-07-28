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


## Taking user input as is

Not sanitizing user input extremely dangerous, if your don't sanitise user input your app might be suggested to SQL or XSS.
Suppose I have a banking that can allow me to make transfers and I have an input that sends it to the api




## Using deprecated libraries/frameworks with widely knows vulnerabilities



## Recklessly adding libraries or framework without proper inspection



NOTES:

- Https
Give http example with plain text
send data over a secure origin/https allow access to apis such 
as web-cam, geolocation, service workers, pwa


- Setting Inner HTML risks
- CSS password sniffing(it allows you to get the value of any attribute in the DOM)
    How can you steal text from an input element, using the starts with selector
    write for every possible starting caracter

- Third party javascript and CSS
- XSS using css
- IE7 And css Expressions(you have access to them dom and all browser methods)
internet explorer has something called browser mode latest 3 ie versions shipped with features
that emulated all the older ie versions of browsers
you can easily switch between, you can trigger the modes by using http header or a meta tag
<meta http-equiv="x-ua-compatible" content="IE=edge">
<meta http-equiv="x-ua-compatible" content="IE=7">
your document will be rendered in the latest available mode/tells ie to use the best engine
ie10 ie11

- using doctype html triggers ie to disable css expressions

- Internet explorer 5 javascript in css
- noopener noreferr
- outdated or libraries with known vulnerabilities
- security through obscurity
- never trust data that comes from the client
(unexpected that in a string XSS, any thing on the client side can be changed an will be changed)

- http only cookies(not accessible via javascript)
- calculate the price on the client and on the server side if you own a ecommerce app
- Don't put non secure api keys on javascript code
- restrict credit/debit card data in apis
- Cross Site Request Forgery
- Forms
  Put a method on a form, for html defaults to get, get puts the inputs with a name attribute in the url bar
  which will be on users history, and server logs. don't put name attribute in sensitive fields


LINKS:
- https://github.com/thedaviddias/Front-End-Checklist
- https://securityheaders.com/
- https://observatory.mozilla.org/