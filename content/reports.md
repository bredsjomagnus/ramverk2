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

#### Allmänt
Ändrade min struktur lite efter vad vi använt i ramverk1. Lägger router i config-foldern, använder configfil för navbaren och använder mig av controllers och moduler. Det finns  även påbörjat en lekplats/sandlåda för att kunna testa sig fram och få grepp om hur man går tillväga i denna miljön. Innan det blir bygga av på riktigt.

Är ännu sugen på att gå över till react för vyn. Men tog inte det steget denna gången (heller).

En annan förändring är att jag skrotade stylelinten då jag använder less. Har istället installerat lesshint och lagt in den i 'Makefilen'.
#### Har du jobbat med Docker eller andra virtualiseringstekniker innan?
Nej, inte Docker. Däremot har jag kollat in det, läst om det och så. Men aldrig testat det. Det ända jag testat är VM-box som vi använde under tidigare kurs. Men det är så långt min erfarenhet sträcker sig.

#### Hur ser du på möjligheterna att använda dig av Docker för att jobba med tester av ditt repo?
Tror det kan vara ett bra verktyg. Men samtidigt tycker jag tester är väldigt krångligt och svårt att få till. Fick lite avsmak från förra ramverkskursen där jag hade stora problem och jag fick lägga ner oproportionerligt många timmar för att få till några ynka tester att visa upp. Så tanken på att lägga till ytterligare ett lager är inget jag hurrar för just nu. Det är inte så att jag vill vara utan tester eller att jag inte förstår vikten av dem. Men jag saknar helt enkelt kunskaperna och tycker det är svårt. Hoppas att nästa kursmoment hjälpa mig ur detta, och att jag kan få koll på även denna biten.

#### Gick allt smidigt eller stötte du på problem?
Både och. Jag har haft stora problem på Windows och Cygwin. Det finns tydligen välkända men ouppklarade buggar, så som att man exempelvis inte kan starta upp flera olika kontainrar via en docker-compose hur som helst. Det slutade med att jag nu gett upp Cygwin när det kommer till Docker och nöjt mig med att det fungerar på min VPS som jag lägger upp allt på. Även det enklaste testet som `$ docker run -it ubuntu bash` funkar ju inte. Jag försökte med att installera winpty, och lyckades med det efter mycket om och men. Men när det efter att ha plöjts ner fleratalet timmar på detta och det ändå inte fungerade så anser jag inte Cygwin i kombination med Docker är värt besväret. Tur att jag har VPS:en i detta läget, där allt bara flyter på istället. Inte första gången det blir problem blott och enbart på grund av Cygwin. Har tröttnat rejält på det. Får bli en linuxdatorn snart.

#### Skapade du din egen image, berätta om den?
Jag gjorde ett försök som jag däremot inte är helt säker på om det är hundra procent rätt. Jag kan skapa en image från min 'Dockerfile' via `docker build` och sen använder imagen i docker-compose och starta upp allt med `docker-compose up -d`. Därmed antar jag att syntaxen stämmer och jag ser även via `docker container ls` att den kontainer som innehåller min egenskapade image är igång. Men det är i det sista steget jag går bet. Jag kan inte få fram appen i webbläsaren efter uppstart, vilken port jag än testar mot. Vet inte vad som är fel, om det är en enkel liten miss eller, ett större, mer grundläggande fel. Men tänkte att min 'Dockerfile' och 'docker-compose.yml' får ligga kvar som de ser ut i nuläget. Hoppas och tror detta skall klarna lite längre fram.

---

### KMOM03

#### Berätta vilka tekniker/verktyg du valde för enhetstester och kodtäckning och varför?
Då jag inte känner mig allt för säker när det kommer till enhetstestning ville jag inte sväva ut allt för mycket, utan lät mig guidas av artikelns teknikval. Det blev således Mocha och Istanbul för testning och kodtäckning.

Tror detta var ett bra val för min del, då jag kunde sätta igång med själva testerna relativt snart och få lite mer träning på den biten.

#### Berätta om din CI-kedja och reflektera över de valen du gjorde?
För byggen används Travis och Scrutinizer. Via Travis fås även kodkvalitét och kodtäckning från Code Climate och Codeacy. Kodtäckning fås även via Scrutinizer och Codecov.

Jag tycker mycket om Scrutnizier som ju har lite av allt i ett paket. Men det var kul att testa lite nytt också och jag gillade Coveralls sida och Codecovs sätt att visa kodtäckningen över tid. Det verkar finnas hur många sådan här tjänster som helst att koppla upp sig mot. Sen kan README blir nästa allt för belamrad av badges, så man måste sätta en gräns någonstans.

En sak som stör mig är att jag inte fick Code Climates 'Test Coverage' att fungera. Varken för redovisningsrepot eller apprepot. Försökte hitta vad som saknades på deras hemsida och hörde mig för i Gitterchatten. Men utan lycka. Kanske att det klarnar lite längre fram, men tog bort den badgen från apprepot så länge.

#### Reflektera över hur det gick att integrera enhetstesterna i olika Docker-kontainerns och om du ser någon nytta med detta.
Det gick väldigt smidigt, tack vare övningsartikeln och exempelkoden i exempelmappen. Men som vanligt fungerar det inte på Cygwin utan jag kör allt som har med Docker att göra i min VPS istället.

Absolut kan jag se nyttan av detta i testsammanhang. Det tar sin lilla tid att få igenom ett test på detta sätt. Men samtidigt blir det ett kraftfullt verktyg att kunna testa kod mot flera olika miljöer och versioner.

Det jag funderar på är om man inte även kan leverera ett projekt i en Docker kontainer så att den kör i samma miljö som den utvecklats i, vilken dator som än startar upp koden? Har för mig jag läste lite detta någonstans. Är det så anser jag nog jag att Docker har ett större användningsområde än själva testningen. Då blir det inte lika viktigt att det fungerar för många olika versioner samtidigt.

#### Hur väl lyckades du utvärdera TDD-konceptet och vilka är dina reflektioner?
Trots att jag har ett stort motstånd inför tester på grund av att jag upplever det svårt och att det tar mycket tid så tilltalar arbetssätten TDD och ännu mer BDD mig väldigt mycket.

I detta fallet valde jag att först fundera ut vad som skulle krävas av min memoryCard-klass och skrev testfallen för detta. Sen testade jag mig fram, skrev om och ändrade tills testfallen gick igenom. Det var väldigt bra, och jag vet med mig att jag hade missat minst saker i koden som inte upptäckts annars. Det känns verkligen som att detta sätt att arbeta ger en stabil grund att arbeta vidare på. Att kunna känna mig relativt trygg med att nuvarande kod håller innan när man går vidare är mycket trevligt.

Det känns verkligen som ett bra arbetssätt. Även om det just i stunden kan kännas som frustrerande mycket extraarbete så får man en annan trygghet i att koden håller. Man kan förmodligen även tjäna in tid på grund av detta när ett projekt växer sig större. Framför allt lär det bli färre buggar som dyker upp i efterhand. Jag märkte skillanden under förra ramverkskursen, att det blev mycket lättare att ringa in en bugg när man hade tester att utesluta med.

#### Berätta om tankarna kring din klient/server applikation och nämn de tekniker du använder.
Jag är så himla osäker på hur jag skall gå tillväga, så mina tankar är mest en massa funderingar om det mest grundläggande; hur jag skall få en klient att kunna prata med en server eller var lägger man koden för klienten. Jag har för lite kött på benen helt enkelt för att kunna lägga ut en strategi eller några välformulerade tankar kring olika val av tekniker eller annat. Tyvärr.

Men i dagsläget har min app/ samma struktur som på min redovisningssida. Det är Express och Pug för vyn. Sen har jag strukturerat enligt MVC med 'Controllers' och så småningom med moduler i src/. Så är tanken i alla fall. Men jag behöver får ta det ett kursmoment i taget och vara öppen för att ändra - att göra om och göra rätt, under arbetets gång.

---

### KMOM04

#### Är du ny på realtidsprogrammering eller har du gjort liknande tidigare?
Jag har gjort en chatt i Java, men det känns som hundra år sedan ungefär, så i princip är jag ny vad gäller detta.

När jag startade hade jag ingen aning hur jag skulle börja ens, så dessa dagarna har varit lärorika med tanke på vad jag hunnit med fram tills redovisning. Det blev en chat och ett Memoryspel.

#### Hur gick det att jobba med konceptet realtidsprogrammering i webben, några reflektioner?
Tycker nog det gått rätt så bra, så länge det bara varit det mest grundläggande. Jag har exempelvis inte lagt in något om koll av uppkoppling eller liknande, utan bara att skicka json fram och tillbaka mellan server och klient.

En begränsning för min del är att jag enbart fått det att fungera med json som subprotokoll. Tvingas jag till annat blir det nog som att behöva börja om från början igen. Det är tack vare json som meddelanden kan riktas till rätt plats mellan server och klient.

En annan reflektion är att det är väldigt roligt och öppnar upp för möjligheter när man vill ge sig på andra projekt.

#### Berätta om din chatt som du integrerade i redovisa-sidan.
Detta var det första jag gjorde och höll mig till det mest grundläggande för att kunna lära mig tillvägagångssättet ett steg i taget.

Man måste ange ett nickname för att kunna ansluta sig till chatten och som ansluten får man upp alla klienter, inklusive sig själv, som är inloggade. Meddelandena landar mitt på sidan som egna gråfärgade divs med info om tid och nickname utöver själva meddelandet.

#### Berätta om den realtidsfunktionalitet du väljer att integrera i din klient/server applikation.
Här jag har tagit med chatten från redovisningssidan och uppgraderat den lite. Liksom på redovisasidan måste man ange ett nickname för att kunna koppla upp sig. Detta är ju, utöver chatmöjligheten, ett Memoryspel, så varje ansluten klient tilldelas då en färg och varje nickname blir unikt. Om två med samma nickname loggar in läggs siffra till på den senast anslutna. Ens egna nickname är fetstilt i listan över klienterna. Nu hamnar även meddelandena i en begränsad div som får en scrollbar som landar längst ner vid nya meddelanden.

När alla anslutit sig som vill vara med kan vem som av klienterna klicka 'Starta spel' och 12 memorykort läggs ut. Nu slumpas också ut vem som börjar av spelarna och detta syns bredvid dennes namn i klientlistan. Den som börjar får vända två kort (det är enbart den spelare vars tur det är som kan vända kort). Är det inte ett par kan inga fler kort vändas och det dyker upp en knapp, 'Nästa spelare' (synlig enbart för den spelare som nyligen vände de två korten), som avslutar turen och ger den till spelaren under i spelarlistan. Detta uppdaterar spelarlistan så att '- din tur' visar på vem som skall agera härnäst. Spelkorten vänds också tillbaka i detta läget.

Får man ett par markeras dessa med spelarens färg och man får fortsätta lyfta kort. Paren vänds inte tillbaka utan ligger rättvända med spelarensfärg som markerar vems paret är. Tillslut är alla kort vända och man kan räkna via färgerna på korten vem som fick flest par.

Det som inte är gjort är en poängsammanställning för vilka par respektive spelar lyckats få ihop. Skulle även kunna läggas in en knapp 'Starta nytt spel' eller liknande när ett spel är klart och man vill börja om. Dessutom är det, som sagt, ytterst känsligt mot att en spelare blir fel bortkopplad och man måste starta om servern när så sker. Detta kan göra det svårt att testa. Men jag har det liggandes på min VPS och om ni vill testa det där och det blir knas så meddela mig så jag starta om det.

En annan sak är att jag gärna skulle vilja kunna starta upp flera olika spelrum. Men det känns som något som kanske kommer längre fram. Det allra viktigaste i nuläget att att få den stabil med hantering av icke frivilligt bortkopplade klienter.

---

### KMOM05
#### Hur gick det att komma igång med databasen MongoDB?
Det är ju lite nya begrepp och ett nytt tillvägagångssätt som måste arbetas in. Men det var inte alltför svårt att komma igång, så det gick smidigare än befarat måste jag säga. Testade både mot dockerservern och mot mlab och kunde rätt så snart få det att fungera som tänkt mot båda två. Kollade runt lite efter bra klienter men kom mig inte för att testa någon. Inte än i vilket fall.

Det var lite intressant att jämföra docker kontainer mot mlab då det var märkbarskillnad på snabbheten när man ville lägga till eller uppdatera information i databasen, till docker kontainers favör. Sen kan det ju klart vara en fördel med mlabs tillgänglighet.

Mitt MongoDB inlägg för detta kursmoment ligger under CRUD i navbaren och redigering/uppdatering av databasen görs genom att klicka i tabellen för att kunna skriva in ny informaiton.

#### Vilken syn har du på databaser inom konceptet NoSQL?
Det är första gången jag stöter på det så jag vet inte riktigt. Det är alltid kul att testa nytt och jag gillar konceptet att arbeta mot annat än tabeller. Det gör det så mycket friare. Sen finns trade offs på grund av det. Smidigt också att man kan använda JSON hela vägen i och med MongoDB.

#### Reflektera över skillnader och likheter mellan relationsdatabaser och databaser inom NoSQL.
Om jag förstått rätt så är relationsdatabas bättre vad gäller stabilitet vid mycket trafik. Relationsdatabaser stödjer också mer komplexa frågor och har en standard kring dessa som NoSQL saknar. Antar att man bör använda sig av relationsdatabaser om man har data av mer känslig natur och som ställer höga krav på databasens tillförlitlighet. NoSQL-databaser är däremot bra om man vill spara en stor massa data och att man dessutom kan spara den i en hierarkisk ordning.

#### Vilka är dina tankar om asynkron programmering med JavaScript?
För mig är det som något som måste besegras. Jag tycker just nu att det är komplicerat och svårt att verkligen förstå allt vad det innebär och vad som händer med promises och annat. Men samtidigt är det något som inte kan undgås. Kapitel 5 i *Exploring js* var bra för förståelsen, men att det var bitar även där som jag måste kolla vidare på, som jag inte riktigt hängde med på vad som menades. Exemplevis skickandet av promises och vad det innebär. Men det får ta lite tid och kollar man vidare och arbetar mer med det så litar jag på att förståelsen kommer på köpet.

#### Hur känner du för Docker och det sättet vi jobbar med tjänster i kontainrar?
Så länge jag arbetar i Linux är det bara en fröjd. Hade lite problem med att den först ville starta upp en annan node än vad som stod i dockerfilen. Men när jag rensade cache och tog bort alla gamla images så fick jag det slutligen att fungera. Därefter var det inga problem och nu har jag både redovisningssidan, appsidan och matmodsidan via docker på min vps. Hur smidigt som helst. Detta underlättar mycket när man skall starta om också. Innan fick jag hitta processerna och döda dem för att kunna lägga upp på nytt. Nu sköts allt enkelt via docker-compose, vilket gör det så mycket lättare.
