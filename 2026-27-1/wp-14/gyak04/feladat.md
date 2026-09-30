# Cookie Clicker

Egy egyszerű „Cookie Clicker” játékot készítünk. A süti gombra kattintva sütiket gyűjtünk, amiből fejlesztéseket vásárolhatunk:

- **Kurzor (👆):** minden megvásárolt kurzor eggyel növeli egy kattintás értékét.
- **Nagymama (👵):** minden megvásárolt nagymama másodpercenként egy sütit süt automatikusan.

## Kiindulás

Az `index.html` és a `style.css` adott, ezekhez nem kell hozzányúlni. A feladat a JavaScript rész: az `index.js` és a `template.js`.

- A süti gomb: `#cookie`, a sütik számának kiírása: `#clicker output`.
- A fejlesztések a `#upgrades` elembe kerülnek. Egy fejlesztés HTML-je ilyen (az `index.html`-ben ki van kommentelve mintának):

  ```html
  <div class="upgrade" id="pointers">
    <span>👆👆👆</span>
    <button type="button" class="buy">Buy (10 🍪)</button>
  </div>
  ```

- A CSS ezekre az osztályokra épül, és a tiltott (`disabled`) „Buy” gombnak is van stílusa.

## 1. Kattintás

1. Kezdetben 0 sütink van, a kiírás: „You have 0 cookies.”
2. A süti gombra kattintva eggyel nő a sütik száma, és a kiírás azonnal frissül.

## 2. Kurzor

3. Amikor a sütik száma először eléri a 10-et, megjelenik a kurzor fejlesztés (`id="pointers"`, 👆, „Buy (10 🍪)”). Ezután akkor is látható marad, ha a sütik száma 10 alá csökken.
4. A „Buy (10 🍪)” gombra kattintva 10 süti levonódik, és eggyel több kurzorunk lesz.
5. A kártyán annyi 👆 látszik, ahány kurzorunk van.
6. A „Buy” gomb tiltott, ha nincs elég sütink a vásárláshoz. A sütik száma soha nem lehet negatív.
7. Minden kurzor eggyel növeli egy kattintás értékét: kurzor nélkül 1, 3 kurzorral 4 sütit ér egy kattintás.

## 3. Nagymama

8. Amikor a sütik száma először eléri a 100-at, a kurzor alatt megjelenik a nagymama fejlesztés (`id="grandmas"`, 👵, „Buy (100 🍪)”). Ez is látható marad, ha a sütik száma később 100 alá csökken.
9. A „Buy (100 🍪)” gombra kattintva 100 süti levonódik, és eggyel több nagymamánk lesz. A kártyán annyi 👵 látszik, ahány nagymamánk van. A gomb tiltott, ha nincs elég sütink.
10. A két „Buy” gomb egymástól függetlenül működik: mindegyik a saját fejlesztését vásárolja meg.
11. Minden nagymama másodpercenként egy sütit süt. A kiírás ennek megfelelően kattintás nélkül is frissül.
12. A fejlesztések akkor is megjelennek, és a „Buy” gombok akkor is engedélyezetté válnak, ha a sütik a nagymamáktól gyűlnek össze, nem kattintásból.

## Ellenőrzés

- [ ] 10 sütinél megjelenik a kurzor, 100-nál a nagymama.
- [ ] Ha nincs elég süti, a „Buy” gomb tiltott, és a sütik száma sosem negatív.
- [ ] 3 kurzorral egy kattintás 4 sütit ér.
- [ ] 2 nagymamával másodpercenként 2 süti jön magától.
- [ ] Egy fejlesztés akkor sem tűnik el, ha a sütik száma az ára alá csökken.

## Szorgalmi feladatok

A szorgalmi feladatokhoz a HTML és a CSS is módosítható.

- A nagy számok legyenek könnyen olvashatók: ezres tagolással (1 234 567), egymillió felett rövidítve (1,2 M).
- Az oldalon látszódjon, hány sütit ér egy kattintás, és hány süti jön másodpercenként.
- Legyen egy statisztika panel: összesen hány sütit sütöttünk (az elköltötteket is beleszámolva), hányszor kattintottunk a sütire, és mióta tart a játék (másodpercenként frissül).
- Minden vásárlás után nőjön az adott fejlesztés ára 15%-kal (egész sütire felfelé kerekítve), és a gombon mindig az aktuális ár látszódjon.
- Shift + kattintás a „Buy” gombra egyszerre 10 darabot vásároljon, ha van elég sütink mind a 10 árára. Ha nincs, ne történjen semmi.
- Minden kattintáskor az egérmutató helyéről egy „+N” felirat (N a kattintás értéke) ússzon felfelé és halványuljon el, majd tűnjön el az oldalról.
- Adj hozzá további fejlesztéseket (pl. Farm 🌾: 1000 süti, másodpercenként 8 sütit termel). A fejlesztések dinamikusan generálódjanak a metaadataik alapján (szimbólum, ár, id).
- Az állás (sütik és fejlesztések) maradjon meg az oldal újratöltése után is.
- Aranysüti: 30–60 másodpercenként az oldal egy véletlenszerű pontján megjelenik egy aranysüti, és 10 másodperc után eltűnik, ha nem kattintanak rá. Rákattintva 10 másodpercig minden kattintás hétszer annyit ér. Amíg a bónusz tart, látszódjon, hogy aktív, és mennyi idő van még hátra.
- Teljesítmények (pl. „Első süti”, „100 süti”, „Első nagymama”): amikor a játékos elér egyet, felugrik egy értesítés, ami néhány másodperc múlva eltűnik. Minden teljesítmény csak egyszer jelenik meg, és a megszerzettek listája megtekinthető.
