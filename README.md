# NgWebConsole
Display console.log statements in your web page.

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
