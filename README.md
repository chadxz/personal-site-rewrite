#personal-site-rewrite

I'm trying to learn some backbone, so I decided to just rewrite the jquery mess on chadmcelligott.com to use backbone instead.

To make development easier, I also decided to try out require.js and gulp. I'm using require.js to structure my code in a more modular fashion, and gulp as a replacement for grunt because I'm not a huge fan of the way gruntfiles are a huge messy configuration file.

###installing dependencies

To install the dependencies needed to build/run the site:

```shell
npm install
bower install
```

###running

To run the site in development mode:

```shell
gulp
```
To run the site in production mode: 

```shell
gulp serve-dist
```

Production assets will be placed in app-dist/. To only build the production assets without running the site:

```shell
gulp build
```
