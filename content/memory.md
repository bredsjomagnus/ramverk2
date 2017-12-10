# Memoryspel
Jag har gjort [memoryspel](http://82.102.5.98:8001/). Än så länge kan man inte möta någon dator. Men det kommer kanske längre fram.

I nuläget finns ett fungerande Memoryspel där man kan spela mot varandra (max 9 st just nu). Det finns i dagsläget 12 memorykort med djurtema.

Jag använder Express, pug och less.

På serversidan finns en Gamebrain som håller koll på spelregler och vad som bör hända härnäst samt Memorycard som håller koll på kortens positioner och innehåll. Servern reagerar på spelarnas agerande och rådfrågar därefter Gamebrain och Memorycard om vad som bör hända och hur spelbrädet bör uppdateras. Klassen Gameboard delges resultatet av vad Gamebrain och Memorycard gett. Därefter skickas Gameboard till alla spelarna som tar emot Gameboard för att kunna rita upp spelbrädet i sin webbläsare efter de nya förutsättningarna.

#### Databas
Tänker använda databas för att kunna logga in och för att spara bästa/kortaste klarade omgången (eller liknande) som man kan jämföra sig och tävla mot.

Jag har inte implementerat något av detta denna gång, utan det får bli nästa kursmoment istället.

#### Modul
Det är skapat en modul som går under namnet [memorytest](https://www.npmjs.com/package/memorytest#gameboard).

Man finner den även på [Github](https://github.com/bredsjomagnus/memorytest).

Det som lyfts ut är de tre klasserna *Gameboard*, *Gamebrain* och *Memorycard*. I README finns förklaring och beskrivning av klasserna tillsammans med förklaring vad mer som behövs läggas till för att få det att fungera. All övrig kod och bilder finns samlat i repot.

#### Nya tillägg
##### Kmom06
Nu kollas connection och koden hanterar ofrivilligt bruten kontakt. `wss.clients.size` jämförs med hur många som anses vara inloggade; `usersobject.length`. Skiljer de sig åt har något gått fel och den felande länken kopplas bort, vilket även meddelas de klienter som fortfarande är uppkopplade.
