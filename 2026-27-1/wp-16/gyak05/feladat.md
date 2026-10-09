# Whack-a-mole

Egy egyszerű vakondütögető játékot készítünk. Egy négyzet alakú táblán vakondok bukkannak fel hol itt, hol ott, és rájuk kattintva pontot szerzünk. A vakondok nem várnak sokáig: ha nem találjuk el őket időben, maguktól átugranak egy másik lyukba.

## Kiindulás

Az `index.html` és a `style.css` adott. A `style.css`-hez nem kell hozzányúlni, az `index.html`-hez csak a 4. részben. A feladat a JavaScript rész: az `index.js`.

- A tábla: `#board`, kezdetben egy 5×5-ös táblázat, minden cellája (`td`) egy lyuk.
- A pontszám kiírása: `#score`.
- A vakond egy osztály a cellán: amelyik `td`-n rajta van a `mole` osztály, abban a lyukban látszik a vakond. A 🐹-t a CSS rajzolja ki, a cella tartalmához nem kell hozzányúlni:

  ```html
  <td class="mole"></td>
  ```

## 1. Ütés

1. Kezdetben a pontszám 0, a vakond a középső cellában van (3. sor, 3. oszlop).
2. A vakondos cellára kattintva eggyel nő a pontszám, és a kiírás azonnal frissül.
3. Találat után a vakond azonnal átugrik egy véletlenszerűen választott másik cellába. Az új cella sosem egyezik meg a régivel, a többi 24 cella mindegyike egyforma eséllyel jöhet.
4. A táblán mindig pontosan egy vakond van.

## 2. Mellé ütés

5. Üres cellára kattintva eggyel csökken a pontszám. A pontszám soha nem lehet negatív.
6. Mellé ütés után a vakond a helyén marad.
7. A cellák közötti résre (a táblázatra, de nem cellára) kattintva nem történik semmi.

## 3. Időzítés

8. Ha a vakondot nem találják el, másodpercenként magától átugrik egy véletlenszerű másik cellába (ugyanazzal a szabállyal, mint a 3. pontban).
9. Találat után az időzítés újraindul: az új helyén is teljes egy másodpercig látszik a vakond, mielőtt továbbugrik.
10. Mellé ütés nem indítja újra az időzítést.

## 4. Generált tábla

11. A tábla mérete (a továbbiakban N) egy konstansban legyen megadva, a cellákat pedig az `index.js` generálja a `#board` táblázatba. Ehhez töröld a táblázat sorait az `index.html`-ből, a `#board` elem maradjon üres.
12. A játék bármilyen méretre működjön (pl. 3, 5, 8): minden korábbi szabály érvényes marad, a 3. pontban a „többi 24 cella” helyett a többi N×N − 1 cellával.
13. A vakond kezdetben a középső cellában van, páros N esetén a középső négy cella egyikében.

## 5. Több vakond

14. A vakondok száma (a továbbiakban M, legfeljebb N×N − 1) is egy konstansban legyen megadva, és a táblán mindig pontosan M vakond van (a 4. pont helyett).
15. Kezdetben az egyik vakond a középső cellában van (a 13. pont szerint), a többi véletlenszerű, egymástól különböző cellákban.
16. Egy cellában legfeljebb egy vakond lehet: ugráskor a vakond csak olyan cellába kerülhet, ahol nincs vakond (a saját régi cellája sem jöhet), és ezek mindegyike egyforma eséllyel jöhet.
17. Minden vakondnak saját időzítése van: találatkor csak az eltalált vakond ugrik el, és csak az ő időzítése indul újra, a többi vakond a helyén marad.
18. M = 1 esetén a játék pontosan úgy működjön, mint az 1–4. részben.

## Ellenőrzés

- [ ] Betöltéskor egy vakond középen van, a pontszám 0.
- [ ] Találatkor nő a pontszám, és a vakond máshová ugrik, sosem ugyanabba a cellába.
- [ ] Mellé ütéskor csökken a pontszám, de sosem lesz negatív.
- [ ] A cellák közötti résre kattintva semmi sem változik.
- [ ] Kattintás nélkül a vakond másodpercenként odébb ugrik.
- [ ] A tábla N = 3 és N = 8 esetén is helyesen generálódik és működik.
- [ ] A táblán mindig pontosan M vakond van, egy cellában legfeljebb egy.
- [ ] Találatkor csak az eltalált vakond ugrik el, a többi a helyén marad.

## Szorgalmi feladatok

A szorgalmi feladatokhoz a HTML és a CSS is módosítható.

- Legyen a játéknak vége 30 másodperc után: az oldalon látszódjon a hátralévő idő (másodpercenként frissül), a végén jelenjen meg egy „Game over” felirat a végső pontszámmal, és a tábla ne reagáljon tovább a kattintásokra. Egy „New game” gombbal lehessen újrakezdeni.
- A legjobb eredmény (rekord) maradjon meg az oldal újratöltése után is, és látszódjon a pontszám mellett.
- A játék gyorsuljon: minden 5. találat után a vakondok 10%-kal rövidebb ideig maradjanak egy helyen, de legalább 400 ms-ig.
- Találatkor a cellában rövid ideig jelenjen meg egy 💥, mielőtt a vakond továbbugrik.
- Kombó: egymás utáni találatokért egyre több pont járjon (1, 2, 3, …), mellé ütés vagy elszalasztott vakond után a szorzó visszaáll 1-re. Az aktuális kombó látszódjon az oldalon.
- Aranyvakond: minden ugrásnál 10% esély van rá, hogy a vakond aranyként (🌟) bukkan fel, ilyenkor fele annyi ideig látszik, de 5 pontot ér.
- Bomba: időnként egy 💣 is megjelenik egy üres cellában. Ha rákattintanak, 5 pont levonás jár (a pontszám ekkor sem lehet negatív).
- Az egérmutató a tábla felett legyen egy kalapács (pl. `cursor` egy 🔨 képpel), ami kattintáskor rövid animációval „lecsap”.
