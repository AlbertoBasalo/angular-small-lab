# Small App Architecture

## Single project

The small app architecture is a single project that contains all the code for the app. This is the simplest architecture and is suitable for small apps that don't need to be split into multiple projects.

## Main folder structure

The main folder structure is the following:

```bash
├── cypress
│   ├── app
├── src
│   ├── app
│   │   ├── domain
│   │   ├── layout
│   │   ├── router
│   │   ├── service
│   │   ├── ui
│   │   ├── app.routes.ts
│   ├── assets
```

## The Layout folder

Contains the layout components for the app. Those are the components that are always visible in the app like the header, the footer, the sidebar, the main content or a pup up dialog...

```bash
├── src
│   ├── app
│   │   ├── layout
│   │   │   ├── header.block.ts
│   │   │   ├── footer.block.ts
```

### The routes files

The routes files are the following:

```bash
├── src
│   ├── app
│   │   ├── app.routes.ts
│   ├── routes
│   │   ├── lazy-route
│   │   │   ├── lazy-route.routes.ts
│   │   ├── ├── routes
```

> From now on, each route folder will be called `lazy-route` and the main app folder will be called `main-app`.

## The router folder

Contains a folder for each `lazy-route` in the `main-app`. Each route folder contains the same structure as the `main-app`:

```bash
├── src
│   ├── app
│   ├── router
│   │   │   ├── lazy-route
│   │   │   │   ├── domain
│   │   │   │   ├── router
│   │   │   │   ├── service
│   │   │   │   ├── ui
│   │   │   │   ├── lazy-route.routes.ts
```

### The domain folder

Contains the model interfaces, types definitions, enums, for the `lazy-route` or for the `main-app`. Could also contain functions for validating or transforming data

> Heads up! The domain folder is empty right now.

```bash
├── src
│   ├── app
│   │   ├── domain
│   │   │   ├── app.interface.ts
│   │   │   ├── app.type.ts
│   │   │   ├── app.enum.ts
│   │   │   ├── app.validation.ts
│   │   │   ├── app.transform.ts
```

### The service folder

Contains the services for the route or for the main app. The services are injected in the components of the route or in other services. There are subtypes of services like interceptors and providers.

```bash
├── src
│   ├── app
│   │   ├── service
│   │   │   ├── api.service.ts
│   │   │   ├── api.interceptor.ts
│   │   │   ├── token.provider.ts
│   │   │   ├── utils.service.ts
```

### The ui folder

Contains the components for the route or for the main app. Those are dumb components that receive data as `@Input()` properties and emit modifications as `@Output()` events.

There are several types like forms, lists, tables, views...

```bash
├── src
│   ├── app
│   │   ├── ui
│   │   │   ├── app.form.ts
│   │   │   ├── app.list.ts
│   │   │   ├── app.table.ts
│   │   │   ├── app.view.ts
```
