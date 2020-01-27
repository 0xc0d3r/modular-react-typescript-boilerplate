# Build

We follow the modular pattern while developing features and we export them in multiple files. We can't send all these files to browser to load the output. We have to bundle all these files including assets into a single file. We use [Webpack](https://github.com/webpack/webpack) to achieve this.

## Environments

You can build the application in five different environments. Each environment has a specific purpose and build pipelines can be setup for each environment to save the deployment time.

### Alpha environment

This environment is internal to frontend team only. Usually, I integrate backend alpha REST APIs if available otherwise we will integrate fixtures to test application UI and layout.

Run below command to generate build in `alpha` environment

```
yarn build
```

### Beta environment

This environment is internal to tech team (frontend and backend teams) only. Usually, backend developers can test their APIs with this build and report issues if any.

Run below command to generate build in `beta` environment

```
yarn build:beta
```

### Gamma environment

This environment is specifically for following purposes.

-  Run e2e test cases, UI visual regression tests

-  Cross browser testing will be done

-  Fix SEO & performance related issues

Run below command to generate build in `gamma` environment

```
yarn build:gamma
```

### Staging environment

This environment is production-like environment and it is **production-ready**. We can test the application in production mode with this environment.

Run below command to generate build in `staging` environment

```
yarn build:staging
```

### Production environment

This is the build which we push to `production` environment. Run below command to generate build in `production` environment

```
yarn build:master
```

If you want to customize any of the above build commands, you need to modify npm scripts written in `package.json`.

```
{
    "build": "GENERATE_SOURCEMAP=false react-scripts build",
    "build:beta": "set \"CI=false\" && env-cmd -f .env.beta yarn build",
    "build:gamma": "set \"CI=false\" && env-cmd -f .env.gamma yarn build",
    "build:staging": "set \"CI=false\" && env-cmd -f .env.staging yarn build",
    "build:master": "set \"CI=false\" && env-cmd -f .env.production yarn build",
}
```
