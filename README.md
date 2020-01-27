# Modular React MobX Typescript Boilerplate

![React MobX Typescript](/docs/images/react_mobx_typescript.png)

A modular boilerplate suitable for large and complex applications built with latest stack React, Typescript, MobX, Webpack, Storybook, Styled Components, Cypress and followed industry standard practices like ✔️Clean Code, 🧪TDD

## Table of Contents

1. [Introduction](#introduction)
2. [Quick Start](#quick-start)
3. [Tech Stack](#tech-stack)
4. [Folder Structure](#folder-structure)
5. [Best Practices](#best-practices)

   5.1 [Clean Code](#clean-code)

   5.2 [Test-driven Development](#test-driven-development)

6. [Contributing](#contributing)

> Please note that this boilerplate is **production-ready and not meant for beginners**! If you're just starting out with react or redux, please refer to https://github.com/petehunt/react-howto instead. If you want a solid, battle-tested base to build your next product upon and have some experience with react, this is the perfect start for you.

### Introduction

Most of the react developers might have spent more than 6+ hours of time to create a development-ready repo to start the development. Thanks to react community 🙏 for creating a bunch of awesome [starter-kits](https://ku.reactjs.org/community/starter-kits.html).

I've worked on 15+ complex and feature-rich projects developed with React and React Native. For all of the projects, below things are must to achieve all _-abilities_.

-  Test cases environment
-  Linting (eslint)
-  Code formatter (prettier)
-  Hooks (Ex: Pre-commit hook)
-  Internationalization (I18n)
-  Storybook
-  Build environments and npm scripts

If your project has many modules, then I suggest you to follow the [folder structure](#folder-structure) followed in this repo.

### Quick start

1. Make sure that you have Node.js >=12.6.0 and npm >=5.6.0 or yarn >=1.17.3
2. Clone this repo using `git clone https://github.com/0xc0d3r/modular-react-typescript-boilerplate.git <YOUR_PROJECT_NAME>`
3. Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.<br />
4. Run `yarn setup` in order to install dependencies and clean the git repo.<br />
   _At this point you can run `yarn start` to see the output at `http://localhost:3000`._

Now you're ready to rumble!

### Tech stack

This boilerplate is built with modern frontend tools. There are community opinionated tools like Typescript and MobX. Trust me, these two adds a lot of value to the development in terms of less type errors/bugs, less boilerplate with MobX and leveraging Object oriented principles.

-  [React](http://github.com/facebook/react)
-  [Typescript](https://github.com/microsoft/typescript)
-  [MobX](https://github.com/mobxjs/mobx)
-  [Webpack](https://github.com/webpack/webpack)
-  [Styled Components](https://github.com/styled-components/styled-components)
-  [Jest](https://github.com/facebook/jest), [react-testing-library](https://github.com/testing-library/react-testing-library)

Below tools/libraries provide best developer experience in a team

-  [husky](https://github.com/typicode/husky)
-  [yarnhook](https://github.com/frontsideair/yarnhook)
-  [lint-staged](https://github.com/okonet/lint-staged)
-  [madge](https://github.com/pahen/madge)

### Folder Structure

```
COMMON
    components
    constants
    fixtures
    i18n
    images
    navigation
    routes
    services
    stores
    styleGuide
    themes
    utils


MODULE1
    components
    constants
    fixtures
    routes
    services
    stores
    themes
    utils

MODULE2
    components
    constants
    fixtures
    routes
    services
    stores
    themes
    utils
```

### Best Practices

Developers are often tempted to consider their work complete when the application operates as expected. And We often forget to refactor the code as per clean code guidelines, not following the suitable design patterns, not writing the test cases, etc.

If we do not follow the best practices, your code will become messy and developers resist to modify or add new features. Below are some of the practices I follow while developing

-  [7 architectural attributes of a reliable react component](https://dmitripavlutin.com/7-architectural-attributes-of-a-reliable-react-component/)
-  [Clean code by Robert C Martin](https://www.amazon.in/Clean-Code-Robert-C-Martin/dp/8131773388/)
-  [Test-driven Development (TDD) by Kent Beck](https://www.amazon.in/Test-Driven-Development-Kent-Beck/dp/8131715957)
-  [Clean architecture by Robert C Martin](https://www.amazon.in/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164)

#### Clean Code

![Clean Code Image](https://camo.githubusercontent.com/0607e034aee88cce40b832367d44265e01b42654/68747470733a2f2f7777772e6f736e6577732e636f6d2f696d616765732f636f6d6963732f7774666d2e6a7067)
_(above image used from https://github.com/ryanmcdermott/clean-code-javascript)_

> Programming is the art of telling another human what one wants the computer to do.
> Donald Knuth

Clean code is about recognizing that your audience isn't just a computer, it's real-live humans! Let's keep this in our mind and develop quality software.

Thanks to [ryanmcdermott](https://github.com/ryanmcdermott) for creating [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript).

#### Test-driven Development

The Test Driven Development (TDD) is a software engineering practice that requires unit tests to be written before the code they are supposed to validate.

![TDD Cycle](https://hackernoon.com/hn-images/1*2IVfvMKBCcwHJYO7-HZRDA.png)
_(above image used from https://hackernoon.com/introduction-to-test-driven-development-tdd-61a13bc92d92)_

Check the implementation of the [Todo App](https://github.com/0xc0d3r/todo-app-with-tdd) following TDD and I committed for each state. You can see Red, Green, and Refactor commits.

### Contributing

Anyone and everyone is welcome to contribute to this project. The best way to start is by checking our open issues, submit a new issue or feature request, participate in discussions, upvote or downvote the issues you like or dislike, send pull requests.
