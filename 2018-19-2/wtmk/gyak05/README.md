# SCSS fordítás

```bash
node-sass scss/index.scss css/style.css
```

# Firebase telepítés és beállítás

```bash
# Firebase parancssori eszköz telepítése
#   Szükséges hozzá NodeJs a gépen (https://nodejs.org)
npm i -g firebase-tools
# Bejelentkezés a Firebase konzolba
#   Javasolt alapértelmezett böngésző: Chrome
firebase login
# Firebase projekt inicializálása
#   Szükséges: Hosting, Storage, Database
#   A `public` mappa helyett használjuk a `.` mappát
firebase init
# Ha a projektek között nem sorolta fel azt,
# amit használni szerettünk volna, akkor később
# ezzel a paranccsal tudjuk hozzárendelni
firebase use --add
```

```bash
# Fájlok feltöltése a Firebase szerverre
firebase deploy
```
