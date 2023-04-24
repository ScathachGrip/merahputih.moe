[![merahputihmoe](https://cdn.discordapp.com/attachments/1046495201176334467/1100040309485883452/aku_petrus.jpg)](https://merahputih.moe/)
## Merahputih.moe

Taking inspiration from the generous [JS.ORG](https://github.com/js-org/js.org) project and [Merahputih.id](https://merahputih.id/)'s vibes we at [@ScathachGrip](https://github.com/ScathachGrip) thought of giving something back to the weeb developers: a free, sleek, and the most important is "moh-ay" URL where you can host a free website or documentation for your project UwU

- [Merahputih.moe](https://merahputih.moe)
  - [How to get one](#how-to-get-one)
  - [Add a CNAME to your repo](#add-a-cname-to-your-repo)
- [For advanced users](#for-advanced-users)
- [No proxied rules](#no-proxied-rules)
- [Closing Remarks](#closing-remarks)

----

## How to get one?
Make a pull request in this repository, go to [src/cnames.ts](https://github.com/ScathachGrip/merahputih.moe/edit/master/src/cnames.ts) and add your subdomain.

```ts
import { ICnames } from "./interfaces";

export const data: ICnames = {
  active: {
    "bar": "scathachgrip.github.io/bar",
    "foo": "scathachgrip.github.io/foo", // noProxied
    // add here as alphabetical order
  }
};
```
Read the [CONTRIBUTING.md](https://github.com/ScathachGrip/merahputih.moe/blob/master/CONTRIBUTING.md) for more details If you haven't Create and statically host a website, once pull request is merged your site will be live immediately.

## Add a CNAME to your repo
Add a file named "CNAME" to your root directory of your repository (or in the
"gh-pages" branch, if you use that) with a single line matching the domain you
have chosen (e.g. "foo.merahputih.moe" without quotes). For more info about this step
you can follow the [Custom URLs](https://docs.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site) section at GitHub Pages Help.

```diff
+ foo.merahputih.moe
```

## For advanced users
Our subdomain are `CNAME` records which map one domain name to another. You can
actually point your merahputih.moe to many different services that allow custom domain.

## No proxied rules
If your site throwing an error such as `ERR_TOO_MANY_REDIRECTS` kindly disable proxied by marking your cnames with `//noProxied` comment.

## Closing Remarks
[CLOSING_REMARKS.md](https://github.com/ScathachGrip/merahputih.moe/blob/master/CLOSING_REMARKS.md)