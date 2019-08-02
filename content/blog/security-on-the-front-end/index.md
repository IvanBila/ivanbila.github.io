---
title: Security on the frontend
date: ""
description: ""
draft: false
---


It's getting increasingly likely to have security problems on the frontend due to access to all apis akin to native
applications one.

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

Not having access to Service workers and other apis means that your app cannot qualify as a PWA, and the worst thing
is that browsers will label your site as being unsecured which can damage your business reputation and SEO.


## Taking user input as is(not sanitizing)

Not sanitizing user input extremely dangerous, if your don't sanitise user input your app might be suggested to SQL or
XSS. Suppose I'm building an app that allows you to share about development meets.

The app contains this input
```html
<input type="text" name="share_input" placeholder="Thought">
```
If I take the text inputed into that field and append to markup without saniziting the user can fill it with the following:
```javascript
`
let evilScript = document.body.appendChild(document.createElement("script"));
evilScript.type = "text/javscript"
evilScript.src = "https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.esm.js"
`
```

And the browser will execute the following instructions if the input text is appended using innerHtml method, with that the attack perpetruator
can:
- request css
- request images
- make calls to your api
- control the browser
- open another page
- open another tab

It's pretty much game over for you application, the hacker can do as he wishes how he wishes.
The best thing to do in such situation is to escape the text before appending to the DOM, or even better you can use javascipt's
built in innerText if you want append what's typed as text.

## Don't use deprecated libraries/frameworks with widely knows vulnerabilities

Using deprecated libraries with with widely knows vulnerabilities it's almost like asking to be hacked, hoping that hackers
will not find out that your website's library or framework has known vulnerabilities is not a good strategy.
Making a habit of inspecting the libary versions and if it has vulnerabilities can be life saving to your application.

## Inspect frameworks or libraries before deploying to production or using it

Sometimes the libraries might not be deprecated or have know vulnerabilities because no one can understand the code behind it
but, it always better to be safe than sorry, when house builders look for tools to aid them in their work they don't choose the lastest
fanciest tool that only a hanful of cratsman use, they always in search for tools that stood the test of time, and that's what I think
developers should do, use tools that many developers have tried and didn't not find any intersting code, I also think that from time to time
you should check what code is in your library


## Don't send sensitive data using get requests
Suppose we have the following form for getting users payment credit card number and CVC for issuing a payment to a service
your application.

```html
<form method="GET">
    <input type="number" name="credit_card_number" placeholder="Credit card number">
    <input type="number" name="credit_card_cvc" placeholder="Credit Card CVC">
    <button type="submit">pay</button>
</form>
```

Seemingly this form looks okay, but there is a security vulnerability, after submiting a form using a get request the
browser stores the request url and all the input fields containing a name in it will be in the url and hence in
the users browser's history and url bar here is how it looks like:
[browser bar image]

Accordingly the url will the in users history:
[history image]

If you have an access log here's what your server log will look like:
[server log]

Given the vulnerabilities pointed above it's important for us developers to always use post requests for sensitive data,
browsers tend to fallback to get requests if the method is not specified, that means we have to remain vigilant when dealing
with forms that contains sensitive data.

## Add adding noopener noreferer to external links

## use doctype

### Force internet explorer to use it's best rendering engine

## Don't sensitive data or apis keys to javascript code


## Prefer http only cookies for sensitive data

Http only cookies are like the name itself, are only accessible via http, that way evil scripts cannot
read your users sensitive cookies and use them for their own interests.

## Preferably do business logic on the backend

Doing bussiness logic on the frontend is a mistake, because the data on the frontend is subject to
changes and checks



NOTES:
- TLS SSL
- cve details
- XSS
- owasp top 10
- .env



