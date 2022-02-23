# debugging-exercises

Ebben a repositoryban több kisebb, szándékosan hibás, egymástól független program van. A cél, a  debugolás (egy tapasztalt hibás működés okának megtalálása és megjavítása) gyakorlása. 

A gyakorlatok elérhetőek a következő weboldalról: https://techtabor.agondolkodasorome.hu/debugging-exercises/

Ha a saját gépeteken szeretnétek kipróbálni, megjavítani a kódokat, akkor töltsétek le magatokhoz a repositoryt. A gyökérmappában levő index.html fájlt ha megnyitjátok böngészőben, akkor egy táblázatot láttok az összes elérhető feladatról. 

A feladatok nagyjából nehézségi sorrendben vannak, de ez szubjektív, nem kell követni. A feladat része a hibák megtalálása is, de nem ez a fókusz, ha nem találtok hibát, kérdezzetek!

## Hogyan debugolj?

Processing: https://processing.org/environment/#debug-1

Tutorial javascript debugolásról Chrome böngésző segítségével: https://developer.chrome.com/docs/devtools/javascript/

Hasznos lehet a tudományos módszer: legyen egy hipotézised, majd tervezz egy kísérletet, azt hajtsd végre, és értékeld ki a hipotézist, majd ezt ismételd. Ez hatékonyabb tud lenni, mint csak a kódot nézve gondolkozni, megpróbálni fejben megtalálni a hibát, vagy különösebb rendszer nélkül megnézni részeredményeket, köztes változókat.

- hipotézis: pl egy változónak már hibás az értéke, mire egy adott függvényhez érsz
- kísérlet: pl egy adott bemenettel lefuttatva a programot az adott változó értéke az első kiértékelésnél ez és ez
- kiértékelés: igaz/hamis/inkonklúzív

## Hiba kategóriák

- syntax hiba (el sem indul a program futás)
- futás közbeni, nem kezelt hiba: tipikusan van hibaüzenet, leáll a programfutás
- logikai hiba: rossz az eredmény / működés, de nincs hibaüzenet
- ...

## Általános gondolatok

- A debugolás ott kezdődik, ha valaki észrevesz egy hibás működést. A hibás működés gyökere azonban sokszor távol van a megjelenéstől, sok változó és függvény eredménye lehet hibás, mire lesz egy olyan, amit észrevesz valaki.
- sokat segít a debugolásban egy minimális, reprodukálható példa készítése
- érdemes időt és energiát fektetni a hibák megelőzésébe, de a leggondosabb eljárás esetén is lesznek hibák, ezért érdemes fejlődni a hibák megtalálásában is
- minden hibának van racionális magyarázata, és sokkal gyakoribb, hogy a te általad írt kódban van, mint hogy egy libraryben, vagy magában a programozási nyelvben etc.
- egy adott működés egy programtól elvárt viselkedéssel szemben lehet hiba, önmagában egy program nem bugos
- print statements are the poor man's debugger :) A legt0bb fejlesztői környezetben és programnyelvhez van egy hasonló elveken működő debugger, de ha ez nem elérhető, vagy nem kényelmes, akkor print parancsokkal is lehet debugolni, az alapvető gondolkodásmód elsajátítása a fontos, nem a használt eszköz.
- hibaüzeneteket érdemes elolvasni, azonosítani a releváns részt, egy kereső sokszor gyors megoldásra vezet