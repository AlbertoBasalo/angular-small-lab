# 📋 Command Line Interface journal

## 0️⃣ Bootstrap application

```bash
ng new angular-small-lab -p=lab -S -s -t
# remove app.module.ts
# modify main.ts
# modify app.component.ts

ng g c ui/components/link --flat
# CSS optional framework
npm install @picocss/pico
```

## 1️⃣ Add routing

```bash
# add app.routes.ts
# modify main.ts
# generate a component to be eager loaded
ng g c routes/home --type=page --skip-selector
# generate a component to be lazy loaded
ng g c routes/about --type=page --skip-selector
```
