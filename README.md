## How to get one?

Pretty simple.

### Step 1 - Create and statically host a website

Find a static site hosting service **GitHub Pages**, **Vercel**, **Netlify**, and create your site.

### Step 2 - Choose your subdomain

According to the existing GitHub Pages URL (for http://foo.github.io/bar, either "foo.merahputih.moe" or "bar.merahputih.moe" would be
possible).

### Step 3 - Add a CNAME to your repo

Add a file named "CNAME" to your root directory of your repository (or in the
"gh-pages" branch, if you use that) with a single line matching the domain you
have chosen (e.g. "foo.merahputih.moe" without quotes). For more info about this step
you can follow the [Custom URLs](gh-custom-urls) section at GitHub Pages Help.

```diff
+ foo.merahputih.moe
```

### Step 4 - Claim your subdomain

To finish the procedure, make a pull request in our [GitHub repository][repo]
that adds your subdomain to the list of existing merahputih.moe domains. Your new URL
should go live within 24 hours (keep an eye on your pull request in case of a
naming conflict or a question from our side).

```ts
import { ICnames } from "./interfaces";

export const data: ICnames = {
  active: {
    "bar": "scathachgrip.github.io/bar",
    "foo": "scathachgrip.github.io/foo", // noProxied
    // add here as alphabetical order keys
  }
};
```
If your site throwing an error such as `ERR_TOO_MANY_REDIRECTS` kindly disable proxied by marking your cnames with `//noProxied` comment.

## For advanced users

Our subdomain are _CNAME_ records which map one domain name to another. You can
actually point your merahputih.moe to many different services that allow custom domain.

## Important

As the owner of the repository, you keep complete control over your published
content. That also means that all rights and duties that come along with
publishing a GitHub Page (e.g. GDPR) remain in your responsibility.