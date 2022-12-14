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
ng g c ui/components/link --flat --standalone
# Import the LinkComponent at AppComponent
# CSS optional framework
npm install @picocss/pico
```

## 3️⃣ Add routing

```bash
ng g c routes/home --type=page --skip-selector
# Create a new app.routes.ts file
# Add router providers on main.ts
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
ng g c routes/contact --type=form --selector=lab-contact-form
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
ng g s core/api
# get author information
```

## 1️⃣1️⃣ Http post

```bash
# post the contact request data
```

## 1️⃣2️⃣ core layout sections

```bash
ng g c core/header --flat --selector=lab-header-section  --type=section
ng g c core/footer --flat --selector=lab-footer-section  --type=section
```

## 1️⃣3️⃣ error interceptor

```bash
api.interceptor.ts
main
```

## 1️⃣4️⃣ inject function token

```bash
api.interceptor.ts
main
```
