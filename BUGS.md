# Buggrapport

Fem buggar har rapporterats i appen av användare. Er uppgift:

1. Läs symptomet nedan.
2. Reproducera det i appen (`npm run dev`) om du vill se det med egna ögon.
3. Skriv ett test i motsvarande komponents testfil som **fångar buggen** — testet ska bli **rött** eftersom koden fortfarande är trasig.
4. Fixa koden i komponenten tills testet blir **grönt**.

Buggarna pekar inte ut fil eller rad — det är en del av uppgiften att lokalisera dem.

---

### Bugg 1 — Fel antal i statistiken

> "Räknaren längst ner i att-göra-listan visar fel antal när jag bockar av eller lägger till uppgifter. Den verkar visa tvärtom mot vad jag förväntar mig."

### Bugg 2 — Fel uppgift markeras som klar

> "När jag bockar av en uppgift i listan är det ofta en helt annan uppgift än den jag klickade på som markeras som klar. När vi markerar en uppgift som klar borde vi kolla så att det är rätt uppgift"

### Bugg 3 — Filtret 'Klara' visar fel uppgifter

> "Om jag klickar på filtret 'Klara' förväntar jag mig bara se avklarade uppgifter, men listan visar uppgifter som inte är avklarade."

### Bugg 4 — Tomma uppgifter går att lägga till

> "Om jag råkar trycka på 'Lägg till' utan att skriva något (eller bara mellanslag) läggs det ändå till en tom rad i listan."

### Bugg 5 — Fel inlägg visas

> "Jag har två inläggskort på sidan som ska visa olika inlägg, men båda visar exakt samma titel och text oavsett vilket inlägg som efterfrågas."
