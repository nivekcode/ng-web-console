# NgWebConsole
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

![](https://raw.githubusercontent.com/kreuzerk/ng-web-console/main/docs/logo.webp)
![](https://raw.githubusercontent.com/kreuzerk/ng-web-console/main/docs/preview.png)

> Display console.log statements in your web page.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [NgWebConsole](#ngwebconsole)
  - [Installation](#installation)
  - [Usage](#usage)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->


## Installation

```bash
npm install ng-web-console
```

## Usage
1. Register the console providers:

```typescript
import { provideNgWebConsole} from "ng-web-console";

// inside your app module or app component
providers: [
    provideNgWebConsole()
]
```

2. Add the console component to the imports array of your module or component:

```typescript
import { NgWebConsoleComponent } from "ng-web-console";

// inside your app module or app component
imports: [
    NgWebConsoleComponent
]
```

3. Start using the console component in your template:

```html
<ng-web-console/>
```

4. Start logging:

```typescript
// use console.log somewhere in your codebase 
console.log("Hello World");
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://medium.com/@kevinkreuzer"><img src="https://avatars.githubusercontent.com/u/5468954?v=4?s=100" width="100px;" alt="Nivek"/><br /><sub><b>Nivek</b></sub></a><br /><a href="https://github.com/kreuzerk/ng-web-console/commits?author=kreuzerk" title="Code">💻</a> <a href="https://github.com/kreuzerk/ng-web-console/commits?author=kreuzerk" title="Documentation">📖</a> <a href="#example-kreuzerk" title="Examples">💡</a> <a href="#ideas-kreuzerk" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-kreuzerk" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-kreuzerk" title="Maintenance">🚧</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!