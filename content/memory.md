# Memoryspel
Jag har gjort [memoryspel](http://82.102.5.98:8001/). Än så länge kan man inte möta någon dator. Men det kommer kanske längre fram.

I nuläget finns ett fungerande Memoryspel där man kan spela mot varandra (max 9 st just nu). Det finns i dagsläget 12 memorykort med djurtema.

Jag använder Express, pug och less.

På serversidan finns en Gamebrain som håller koll på spelregler och vad som bör hända härnäst samt Memorycard som håller koll på kortens positioner och innehåll. Servern reagerar på spelarnas agerande och rådfrågar därefter Gamebrain och Memorycard om vad som bör hända och hur spelbrädet bör uppdateras. Klassen Gameboard delges resultatet av vad Gamebrain och Memorycard gett. Därefter skickas Gameboard till alla spelarna som tar emot Gameboard för att kunna rita upp spelbrädet i sin webbläsare efter de nya förutsättningarna.
