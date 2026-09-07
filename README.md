# Find Those Bugs 🐛

En liten att-göra-app byggd med React, TypeScript och Vite — och fem inbyggda buggar.

## Uppgiften

Appen innehåller fem buggar som beskrivs som användarrapporter i [`BUGS.md`](./BUGS.md).
För varje bugg ska du:

1. Skriva ett test med Vitest och React Testing Library som fångar buggen (testet ska bli **rött**).
2. Fixa buggen i koden.
3. Se testet bli **grönt**.

Buggrapporterna pekar inte ut fil eller rad i koden — att lokalisera problemet är en del av övningen.

## Kom igång

```bash
npm install
npm run dev      # starta appen på http://localhost:5173
npm test         # kör testerna i watch-läge
npm run test:run # kör testerna en gång (t.ex. i CI)
```

## Projektstruktur

```
src/
  components/
    TodoApp.tsx      # container: state, filtrering
    TodoForm.tsx      # lägg till uppgift
    TodoList.tsx      # renderar listan
    TodoItem.tsx       # en uppgift (bocka av / ta bort)
    TodoFilter.tsx    # filterknappar (Alla / Aktiva / Klara)
    TodoStats.tsx      # "X kvar av Y"
    Post.tsx          # hämtar och visar ett inlägg från ett externt API
    TodoApp.test.tsx  # exempeltest — visar mönstret render -> interagera -> assert
```

## Testverktyg

Redan installerat och konfigurerat:

- [Vitest](https://vitest.dev/) — testrunner
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) — rendera och interagera med komponenter
- [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom) — extra matchers, t.ex. `toBeInTheDocument()`
- [`@testing-library/user-event`](https://testing-library.com/docs/user-event/intro/) — simulera användarinteraktion

`describe`, `it`, `expect` och `vi` är globalt tillgängliga (ingen import behövs) tack vare `globals: true` i `vite.config.ts`.

Post-komponenten hämtar data med `fetch`. I era tester ska ni mocka `fetch` själva, t.ex.:

```ts
beforeEach(() => {
  globalThis.fetch = vi.fn()
})

afterEach(() => {
  vi.resetAllMocks()
})
```

## Inlämning

1. Forka det här repot till ditt eget GitHub-konto.
2. Jobba med buggarna i din fork — en commit per bugg (test + fix) rekommenderas.
3. Lämna in länken till din fork.
