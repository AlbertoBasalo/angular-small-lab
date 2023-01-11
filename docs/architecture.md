# Small Lab Architecture

## Single project

The small lab architecture is a single project that contains all the code for the app. This is the simplest architecture and is suitable for individual developers or small teams.

## Patterns and practices

- [x] SURD folder system (Service, UI, Routes, Domain)
- [x] Container - Presentational pattern for components
- [x] Subtyped components
- [x] Root and route services

## Main folder structure

The main folder structure is the following:

```bash
├── cypress
│   └── e2e
├── src
│   ├── app
│   │   ├── domain
│   │   ├── routes
│   │   ├── service
│   │   ├── ui
│   │   ├── app.component.ts
│   │   └── app.routes.ts
│   ├── assets
```

## The cypress folder

Contains the end-to-end tests for the app. Those tests are written in Cypress and are located in the `e2e` folder.

```bash
├── cypress
│   ├── e2e
│   │   ├── about.cy.ts
│   │   ├── home.cy.ts
│   │   ├── routes.cy.ts
```

## Main app

The main app is the app shell. It is the first thing that is loaded when the user opens the app. It contains the layout components and the router-outlet with the configuration for the lazy routes.

### The routes files

There are one main routes file (the old _forRoot_) and another one for each complex lazy route (the old _forChild_) :

```bash
├── src
│   ├── app
│   │   ├── routes
│   │   │   └── lazy-route-1
│   │   │       ├── domain
│   │   │       ├── routes
│   │   │       ├── service
│   │   │       ├── ui
│   │   │       └── lazy-route-1.routes.ts
│   │   └── app.routes.ts
```

> From now on, each route folder will be called `lazy-route` and the main app folder will be called `main-app`.

### The routes folder

Contains a folder for each `lazy-route` defined at the `app.routes.ts` file. Each `lazy-route` folder contains the same structure as the `main-app`:

```bash
├── src
│   ├── app
│   ├── routes
│   │   │   ├── lazy-route-1
│   │   │   │   ├── domain
│   │   │   │   ├── routes
│   │   │   │   ├── service
│   │   │   │   ├── ui
│   │   │   │   └─── lazy-route-1.routes.ts
```

### Recursive route structure

Each route can contain other routes. In such cases the structure is recursive

```bash
├── src
│   ├── app
│   ├── routes
│   │   │   ├── lazy-route-1
│   │   │   │   ├── domain
│   │   │   │   ├── routes
│   │   │   │   │       └── lazy-route-1-1
│   │   │   │   │           ├── domain
│   │   │   │   │           ├── router
│   │   │   │   │           ├── service
│   │   │   │   │           ├── ui
│   │   │   │   │           └─── lazy-route-1-1.routes.ts
│   │   │   │   ├── service
│   │   │   │   ├── ui
│   │   │   │   └─── lazy-route-1.routes.ts
```

## The domain folder

Contains the model interfaces, types definitions, enums, for the `lazy-route` or for the `main-app`. Could also contain functions for validating or transforming data.

> Heads up! Validation and transformation are samples placeholder for future features.

```bash
├── src
│   ├── app
│   │   ├── domain
│   │   │   ├── notification.interface.ts
│   │   │   ├── notification-category.type.ts
│   │   │   ├── user-response.type.ts
│   │   │   ├── app.validation.ts
│   │   │   ├── app.transform.ts
```

## The service folder

Contains the injectable services for the `lazy-route` or for the `main-app`. The services are injected in the components of the route or in other services.

There are subtypes of services like interceptors and providers.

Also used plain TypeScript classes (not injectable) for utility functions.

```bash
├── src
│   ├── app
│   │   ├── service
│   │   │   ├── api.interceptor.ts
│   │   │   ├── api.service.ts
│   │   │   ├── auth.storage.ts
│   │   │   ├── error-handler.service.ts
│   │   │   ├── instrumentation.service.ts
│   │   │   ├── token.providers.ts
│   │   │   ├── user-token.service.ts
│   │   │   ├── utils.service.ts
```

## The ui folder

Contains the components for the `lazy-route` or for the `main-app`. Those are dumb components that receive data as `@Input()` properties and emit modifications as `@Output()` events.

There are several types, I am using `--type` value for the `ng g c` command with `form`, `list` , `table` or `view`:

```bash
├── src
│   ├── app
│   │   ├── ui
│   │   │   ├── app.form.ts
│   │   │   ├── app.list.ts
│   │   │   ├── app.table.ts
│   │   │   ├── app.view.ts
```

### The layout folder

Contains the layout components for the app shell. Those are the components that are always visible in the app like the header, the footer, the sidebar, the main content or a pup-up dialog...

They are smart components that consumes injectable services to get or modify data. The `--type` value for the `ng g c` command is `block` or `dialog`:

```bash
├── src
│   ├── app
│   │   ├── ui
│   │   │   ├── layout
│   │   │   │   ├── header.block.ts
│   │   │   │   ├── footer.block.ts
│   │   │   │   └── notification.dialog.ts
```

> Heads up! The layout folder content is usually eager loaded. Because the components are imported by the root component when the app starts.
