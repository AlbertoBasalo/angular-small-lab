# 📋 Command Line Interface journal

## 1️⃣ Bootstrap application

```bash
ng new angular-small-lab -p=lab -S -s -t
# remove app.module.ts
# modify main.ts
# modify app.component.ts
```

## 2️⃣ Add Standalone Components

```bash
ng g c ui/link --flat --standalone
# Import the LinkComponent at AppComponent
# CSS optional framework
npm install @picocss/pico
```

## 3️⃣ Add routing

```bash
ng g c routes/home --type=page --skip-selector
# Create a new app.routes.ts file
# Add it to router providers on main.ts
```

## 4️⃣ Add lazy component

```bash
ng g c routes/about --type=page --skip-selector
# Add the lazy imported component to app.routes.ts file
# Add router links on app.component.ts
```

## 5️⃣ Add a service

```bash
# declare any model you need
ng g i routes/about/author --type=interface
# create local services
ng g s routes/about/about
# provide and inject the service on the component
```

## 6️⃣ Presenter component with Input

```bash
# generate a typed presenter with a custom selector
ng g c routes/about/author --flat --type=view --selector=lab-author-view

```

## 7️⃣ Presenter component with Output

```bash
# generate a page and a form presenter component for a contact route
ng g c routes/contact --type=page --skip-selector
ng g c routes/contact --flat --type=form --selector=lab-contact-form
# add the model interface and the service
ng g i routes/contact/contact --type=interface
ng g s routes/contact/contact
```

## 8️⃣ Reactive forms

```bash
# import ReactiveFormsModule at ContactForm
```

## 9️⃣ Validate forms

```bash
# declare validation rules
# give feedback to the user
```

## 1️⃣0️⃣ Http client

```bash
# provide httpClient on main bootstrap
ng g s services/api
# get author information
```

## 1️⃣1️⃣ Http post

```bash
# post the contact request data
```

## 1️⃣2️⃣ component clocks for core layout sections

```bash
ng g c ui/header --flat --selector=lab-header-block  --type=block
ng g c ui/footer --flat --selector=lab-footer-block  --type=block
```

## 1️⃣3️⃣ error interceptor

```bash
api.interceptor.ts
main
```

## 1️⃣4️⃣ inject function token

```bash
services/api.interceptor.ts
main
```

## 1️⃣5️⃣ auth routes nested branch

```bash
ng g c routes/auth/routes/register --flat --type=page --skip-selector
ng g c routes/auth/routes/login --flat --type=page --skip-selector
auth.routes.ts
app.routes.ts
```

## 1️⃣6️⃣ add data model and the same form for both routes

```bash
ng g c routes/auth/ui/credentials --flat --selector=lab-credentials-form --type=form
ng g i routes/auth/services/credentials --type=interface
```

## 1️⃣6️⃣ auth service

```bash
npm i json-server-auth
ng g s routes/auth/services/auth
```

## 1️⃣7️⃣ typescript utility types

```bash

```

## 1️⃣8️⃣ rxjs pipes

```bash

```

## 1️⃣9️⃣ no common module

```bash

```

## 2️⃣0️⃣ Navigation menu

```bash
ng g c routes/admin --type=page --skip-selector
ng g i routes/auth/services/userToken --type=interface

```

## 2️⃣1️⃣ guards

```bash
# src\app\routes\auth\services\auth.guard.ts
```

## 2️⃣2️⃣ auth interception on api interceptor

```bash

```

## 2️⃣3️⃣ folder tiering

```bash
# 🚗 ui
# 🛣️ routes
# ⚙️ services
```

## 2️⃣4️⃣ cypres e2e tests

```bash
ng add @cypress/schematic
npm run e2e
npm test
```

---

## 2️⃣5️⃣ feature activity editor

```bash
ng g c routes/activities/routes/activities --type=page --skip-selector
ng g c routes/activities/routes/activity-create --type=page --skip-selector
ng g c routes/activities/routes/activity-update --type=page --skip-selector


ng g c routes/activities/ui/activity --flat --selector=lab-activity-form --type=form
ng g c routes/activities/ui/activity --flat --selector=lab-activity-view --type=view

ng g s routes/activities/services/activities
ng g i routes/activities/services/activity --type=interface
```

## 2️⃣6️⃣ refactor with utils service and api

```bash
ng g s services/utils
```

## 2️⃣7️⃣ feature activity details

```bash
ng g c routes/activities/routes/activity-details --type=page --skip-selector
```

## 2️⃣8️⃣ feature activity list

```bash
ng g c routes/activities/ui/activities-list --flat --selector=lab-activities-list --type=list
```

---

By [Alberto Basalo](https://twitter.com/AlbertoBasalo)
