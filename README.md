httpies
===

```bash
npm install -g httpies
```

httpie with extra headers

Make a `$HOME/.httpies` file like this:

```
X-Access-Token:foo.bar.baz
```

and then just make regular requests but instead of `http` use `https`

```bash
#old way
http GET https://apiserver.com/users X-Access-Token:foo.bar.baz

#new way
https GET https://apiserver.com/users
```