# RAPPORTER

### KMOM01
#### Berätta utförligt om din syn på Express och Pug och hur de samverkar. Relatera till andra ramverk du jobbat med. Lyft fram de fördelar och eventuellt nackdelar du finner, eller bara notera skillnader och likheter.
Pug har jag aldrig hört talas om förut. Men det verkar inte allt för svårt att sätta sig in i. Likaså hade Express bra förklaringar hur man kommer igång med det mest grundläggande. Övningsartikeln och de kodexempel som fanns var även till stor hjälp.

Tycker inte det är så lätt att göra en större analys när jag inte rikigt hunnit sätta mig in i express och pug än. Men efter att ha arbetat igenom 'Ramverk 1' så ser man ju helt klart likheter. Så som uppdelningen och arbete mot vyer och layouter.

Det har ju diskuterats en hel del på Gitter Chatten om olika alla möjliga olika extra tillägg som används. Dels har jag inte haft tiden och dels tar jag det varligt för att få fotfäst först innan jag gör det för stort.

#### Berätta om din katalogstruktur och hur du organiserade din kod, hur tänkte du?
Det var svårt att tänka ut en strukur, då jag ännu inte kan den nya tekniken. Gick därför, som sagt, på tipset som gavs att kolla på vad express själv bygger upp. Fick bli så sålänge.

Har en folder content med markdownfiler som kan inkluderas. Har en folder routes som samlar alla dylika för sig. Vyerna finner man i foldern views. Public innehåller js, bilder och styling.

#### Använde du någon form av scaffolding som Express erbjuder?
Ja. Det kändes bäst så. Dels för att få hjälp med strukturen och sen fick man en hel del bra med som underlättade förståelsen för vad man kan göra och vad som händer i koden.

#### Jobbar du med Markdown för innehållet, eller annat liknande?
Ja, jag har en content-folder som innehåller markdownfiler. Dessa inkluderas för respektive sida index, about och reports.


---

### KMOM02
#### Har du jobbat med Docker eller andra virtualiseringstekniker innan?
Nej, inte Docker. Däremot har jag kollat in det, läst om det och så. Men aldrig testat det. Det ända jag testat är VM-box som vi använde under tidigare kurs. Men det är så långt min erfarenhet sträcker sig.

#### Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?
Tror det kan vara ett bra verktyg. Men samtidigt tycker jag tester är väldigt krångligt och svårt att få till. Fick lite avsmak från förra ramverkskursen där jag hade stora problem och jag fick lägga ner oproportionerligt många timmar för att få till några ynka tester att visa upp. Så tanken på att lägga till ytterligare ett lager är inget jag hurrar för just nu. Det är inte så att jag vill vara utan tester eller att jag inte förstår vikten av dem. Men jag sakner helt enkelt kunskaperna och tycker det är svårt. Hoppas att nästa kursmoment hjälpa mig ur detta, och att jag kan få koll på även denna biten.

#### Gick allt smidigt eller stötte du på problem?
Både och. Jag har haft stora problem på Windows och Cygwin. Det finns tydligen välkända men ouppklarade buggar, så som att man exempelvis inte kan starta upp flera olika kontainrar via en docker-compose hur som helst. Det slutade med att jag nu gett upp Cygwin när det kommer till Docker och nöjt mig med att det fungerar på min VPS som jag lägger upp allt på. Även det enklaste testet som `$ docker run -it ubuntu bash` funkar ju inte. Jag försökte med att installera winpty, och lyckades med det efter mycket om och men. Men när det efter att ha plöjts ner fleratalet timmar på detta och det ändå inte fungerade så anser jag inte Cygwin i kombination med Docker är värt besväret. Tur att jag har VPS:en i detta läget, där allt bara flyter på istället. Inte första gången det blir problem blott och enbart på grund av Cygwin. Har tröttnat rejält på det. Får bli en linuxdatorn snart.

#### Skapade du din egen image, berätta om den?
Nej. Anser mig behöva tiden till nästa Kmom03 bättre. Dessa tester skola göra mig mycket besvär.
