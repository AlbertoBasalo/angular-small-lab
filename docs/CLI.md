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
# Import the LinkComponent at Appcomponent
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
ng g c routes/about--type=page --skip-selector
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
