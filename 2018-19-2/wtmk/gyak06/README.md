# Csomag készítése, kiszolgálás

A Parcel az `index.html`-től kezdve feltérképezi a függőségeket és mindent a megfelelő átalakítással előkészít a végső csomaghoz (bundle).

Hogy jól működjön a firebase deploy, meg kell adni a `firebase.json` fájlban, hogy a `public` mappa a `dist`.

```bash
npm install -g parcel # Parcel bundler eszköz telepítése
```

```bash
parcel index.html # Csomag készítése a dist mappába
```

```bash
firebase deploy # Feltöltés a Firebase-re
```
