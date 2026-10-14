# Tower Defense

Egy egyszerű tower defense játékot készítünk. A 6×6-os tábla egyes cellái egy utat alkotnak, amin ellenségek (👾) vonulnak végig. Az út melletti üres telkekre tornyokat (🏰) építhetünk, amik lövik a közelükbe érő ellenségeket. Ha egy ellenség végigér az úton, egy életet veszítünk.

## Kiindulás

Az `index.html` és a `style.css` adott, ezekhez nem kell hozzányúlni. A feladat a JavaScript rész: az `index.js`.

- A tábla: `#board`. A benne lévő cellák csak minták, a tábla tartalmát az `index.js` generálja.
- Az arany kiírása: `#gold`, az életeké: `#lives`.
- Az indítógomb: `#start`, a játék végét jelző felirat: `#game-over` (kezdetben `hidden`).
- Egy cella HTML-je ilyen (az `index.html`-ben a `#board` mintacellái):

  ```html
  <div class="cell"></div>
  <div class="cell path"></div>
  <div class="cell tower"></div>
  <div class="cell path enemy" data-hp="3"></div>
  ```

  Sorrendben: üres telek, út, torony, ellenség az úton. A 🏰-t, a 👾-t és az ellenség életerejét (`data-hp`) a CSS rajzolja ki, a cellák tartalmához nem kell hozzányúlni.

- Az út cellái sorrendben, `[sor, oszlop]` párokként, 0-tól számozva. Ezt másold be az `index.js`-be:

  ```js
  const PATH = [
    [1, 0], [1, 1], [1, 2], [1, 3], [1, 4],
    [2, 4], [3, 4], [3, 3], [3, 2], [3, 1],
    [4, 1], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5],
  ];
  ```

## 1. Tábla

1. A tábla 6×6-os, a cellák soronként balról jobbra, a fenti minta szerinti osztályokkal jelennek meg. Kezdetben egy adott útvonal cellái utak, az összes többi üres telek.
2. Kezdetben 30 aranyunk és 10 életünk van, a kiírás ennek megfelelő.

## 2. Építés

3. Üres telekre kattintva oda torony épül 10 aranyért. A tábla és a kiírás is azonnal frissül.
4. Ha nincs 10 aranyunk, az üres telekre kattintva nem történik semmi. Az arany soha nem lehet negatív.
5. Útra, toronyra vagy a cellák közötti résre kattintva nem történik semmi.
6. Építeni a játék indítása előtt és közben is lehet.

## 3. Ellenségek

7. A „Start” gombra kattintva indul a játék, a gomb ezután tiltott (`disabled`).
8. A játék körökben halad: az első kör a gombra kattintás után egy másodperccel jön, utána másodpercenként egy újabb. Minden körben ebben a sorrendben történik:
    1. minden ellenség egy cellával előrelép az úton,
    2. a páratlan sorszámú körökben (1., 3., 5., …) új ellenség jelenik meg az út első cellájában, 3 életerővel.
9. Az ellenség cellája út marad, csak megkapja az `enemy` osztályt és a `data-hp` attribútumot (lásd a mintát).
10. Ha egy ellenség az út utolsó cellájáról lépne tovább, eltűnik a tábláról, és egy életet veszítünk.
11. Ha az életek száma 0-ra csökken, a játék véget ér: a körök leállnak, megjelenik a `#game-over` felirat, és építeni sem lehet tovább.

## 4. Harc

12. Minden kör végén (a lépések és az új ellenség megjelenése után) minden torony lő egyet: egy hatótávolságán belüli ellenség életerejét 1-gyel csökkenti. Ha nincs ilyen ellenség, a torony nem lő.
13. A torony hatótávolsága a körülötte lévő 8 cella (az átlósan szomszédosak is).
14. Ha több ellenség is hatótávon belül van, a torony azt lövi, amelyik a legmesszebb jutott az úton.
15. Ha egy ellenség életereje 0-ra csökken, eltűnik a tábláról, és 5 aranyat kapunk érte. Ugyanabban a körben a többi torony már nem lövi.
16. A tábla és a kiírások minden kör végén frissülnek, a kiírt életerő mindig az aktuális.

## 5. Fejlesztés

17. Minden toronynak saját sebzése van, kezdetben 1. Lövéskor a torony a sebzésének megfelelő életerőt vesz le (a 12. pontban leírt 1 helyett).
18. Toronyra jobb gombbal kattintva 15 aranyért a torony sebzése eggyel nő, legfeljebb 3-ig.
19. Ha nincs 15 aranyunk, vagy a torony sebzése már 3, a jobb kattintásra nem történik semmi.
20. A táblán jobb gombbal kattintva ne jelenjen meg a böngésző helyi menüje.
21. A torony sebzése a cellán is látszódjon a `data-damage` attribútummal (a CSS kirajzolja):

    ```html
    <div class="cell tower" data-damage="2"></div>
    ```

## Ellenőrzés

- [ ] Betöltéskor a tábla 6×6-os, az útvonal szerint látszik, 30 arany és 10 élet van.
- [ ] Üres telekre kattintva torony épül 10 aranyért; három torony után a negyedik már nem épül meg.
- [ ] Útra és a cellák közötti résre kattintva semmi sem változik.
- [ ] „Start” után másodpercenként lépnek az ellenségek, és kétkörönként jön egy új.
- [ ] Az út végére érő ellenség eltűnik, és egy élet levonódik; 0 életnél vége a játéknak.
- [ ] A torony csak a szomszédos cellákban lévő ellenségeket lövi, és mindig a legelőrébb járót.
- [ ] A legyőzött ellenség eltűnik, és 5 arany jár érte.
- [ ] Toronyra jobb gombbal kattintva 15 aranyért nő a sebzése; 3-as sebzésnél vagy 15 arany alatt nem történik semmi.

## Szorgalmi feladatok

A szorgalmi feladatokhoz a HTML és a CSS is módosítható.

- Hullámok: az ellenségek hullámokban érkezzenek (pl. 5, 7, 9, … ellenség), minden hullámban 1-gyel több életerővel. Két hullám között legyen szünet, a következőt egy „Next wave” gomb indítsa, és látszódjon, hányadik hullámnál tartunk.
- Sima mozgás: az ellenségek ne ugorjanak, hanem folyamatosan csússzanak át egyik cellából a másikba.
- Fejlesztő panel: a jobb kattintás helyett toronyra (bal gombbal) kattintva az kijelölődik, és a tábla mellett megjelenik egy panel a torony adataival és a fejlesztésekkel (+sebzés, +hatótávolság). Mindegyik fejlesztéshez saját gomb és ár tartozzon, a gomb legyen tiltott, ha nincs elég aranyunk. Egyszerre legfeljebb egy torony lehet kijelölve, a kijelölt toronyra újra kattintva a kijelölés megszűnik, és a panel eltűnik.
- Hatótáv megjelenítése: a kijelölt torony, illetve építés előtt az egér alatti telek hatótávjába eső cellák legyenek kiemelve.
- Eladás: a kijelölt torony eladható legyen az építési és fejlesztési költségei feléért.
- Lövés effekt: a megsebzett ellenség cellája rövid ideig villanjon fel, a legyőzött helyén pedig jelenjen meg egy 💥.
- Többféle torony (pl. 🔥 nagyobb sebzés, de ritkábban lő; ❄️ lelassítja az ellenséget). Az építendő torony típusa egy panelen legyen választható.
- Vezérlés: szünet és „2×” gyorsítás gomb a körök időzítésére.
- Pályák: lehessen több, eltérő méretű és útvonalú pálya közül választani.
- A legtöbb túlélt hullám (rekord) maradjon meg az oldal újratöltése után is.
