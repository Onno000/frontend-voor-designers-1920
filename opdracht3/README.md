# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.


## Werkwijze
Schets eerst hoe de functionaliteit er uit komt te zien. Maak daarna een breakdown-schets hoe de verschillende componenten technisch moeten gaan werken...

Werk daarna je ontwerp uit in HTML, CSS en JavaScript.


## Planning
1. Les 5: Briefing opdracht 3, API uitzoeken, tutorial doorlopen, schetsen en beginnen met coderen
2. Les 6: Eerste versie testen. Meenemen: breakdown-schets, JSON laden in de console, daarna in Javascript HTML elementen aanmaken, de data koppelen en toevoegen aan de DOM
3. Les 7: Demo presenteren
4. Les 8: Oplevering en beoordeling


## Criteria
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
2. De data wordt van een externe bron ingeladen met Javascript.
3. Een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) worden opgevangen en zijn vormgegeven.
4. In de demo maak je gebruik van meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen.
5. In de demo dien je rekening te houden met de interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).
6. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github


## Resources
- Gebruik verschillende [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) om de functionaliteit mee te bedienen.
- Met behulp van [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) of [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) kan een [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) file worden geladen. Daarna kun je de HTML elementen aanmaken, de juiste content koppelen en aan de DOM toevoegen.
- Hier staat een [tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) voor het laden van JSON data en het aanmaken van HTMl elementen.
- Bij het laden van externe data kan de server verschillende [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) doorgeven, die kun je gebruiken om feedback te tonen.

## Het idee
Het idee is een platform wat laat zien aan surfers of het hard genoeg waait. Zo niet dan wordt hen een filmtrailer aangeboden. Op die manier hoeft de surfer zich niet te vervelen. Iedere keer dat de surfer op de website wordt hem/haar een nieuwe trailer aangeboden. Mocht het nou wel waaien dan wordt dat natuurlijk als eerst getoond. Hierbij zijn drie spots ingeladen waar de windkracht en de afwijking van de ideale windrichting wordt aangegeven. Zo weten de surfers direct waar zij naar toe moeten gaan.

## Wat nog niet gelukt is
Door de vertraging die dit vak heeft opgelopen valt mijn stage tegelijkertijd met de deadline van Front-end. Ik had echter wel nog een paar dingen willen fixen, helaas heb ik hier op dit moment geen tijd meer voor.

- De autoplay op het moment dat het niet waait, ondanks de hulp op discord is dit mij nog niet gelukt. Ik denk dat het te maken heeft met dat een film gemuted moet zijn omdat het anders op een advertentie lijkt en dat is verboden volgens mij.
- Het gekleurde vak om de spot met de beste combinatie tussen harde wind en afwijking van de ideale windrichting. Op dit moment staat hij altijd op de laatste section, ik heb een beetje valsgespeeld voor het idee. Het idee was om hier een nieuwe berekening voor te maken maar doordat je de gegevens drie keer door dezelfde functie stuurt is het lastig om dan weer de juiste eruit te pakken. Hier liep ik een beetje bij vast.
- Het toewijzen van de afwijking aan de section en niet aan het artikel, hiervoor geldt hetzelfde probleem als hierboven.