# Haarakajo (testirepo)

Haarakajo on suunnitteilla oleva palvelu, joka tekee riippuvuuspäivityksistä helpompia ohjelmistotiimeille. Tämä repositorio on pieni testiprojekti, jossa kokeillaan ideaa. Siinä on tarkoituksella vanhentunut kirjasto (lodash), jotta päivityksiä on mitä tutkia.

Etusivu: https://haarakajo.polsia.io

## Ongelma

Dependabotin ja Renovaten kaltaiset työkalut ehdottavat päivityksiä, mutta jättävät sinulle selvitettäväksi:

- rikkooko päivitys jotain juuri sinun projektissasi?
- koskeeko tietoturvakorjaus koodia, jota käytät?
- mitä pitää tehdä, ja kuinka kiireellistä se on?

Tuloksena on paljon pull requesteja, joita kukaan ei uskalla yhdistää.

## Idea

Haarakajon tavoite on kertoa vastaus valmiiksi:

1. seuraa riippuvuuksien uusia versioita,
2. kokeile päivitys erillisessä haarassa,
3. aja projektin testit,
4. avaa pull request, jossa on selkeä yhteenveto: onko päivitys turvallinen juuri sinun projektillesi.

## Esimerkki

Tämä on suunniteltu esimerkki. Haarakajo ei vielä tee tätä, ja testitulokset ovat keksittyjä havainnollistamista varten.

```
Päivitä lodash 4.17.15 -> 4.18.1

Yhteenveto
Turvallinen päivittää. Testit menivät läpi, eikä muutos koske koodia,
jota projektisi käyttää.

Miksi päivitys kannattaa
- Sisältää tietoturvakorjauksia.

Vaikuttaako tämä sinuun?
- Projektisi käyttää lodashista vain: chunk
- Korjatut toiminnot eivät ole käytössäsi.
- Riski: matala.

Testit
- Ajettu erillisessä haarassa ennen tämän PR:n avaamista.
- Tulos: läpi.

Mitä sinun pitää tehdä
- Tarkista yhteenveto ja yhdistä PR, kun olet valmis.
```

Vertailuksi: tämän repon oikea Dependabot-PR (#1) näyttää pitkän englanninkielisen muutoslistan, mutta ei kerro, vaikuttaako päivitys tähän projektiin.

## Tilanne

Haarakajo on vasta idea-asteella. Mitään ei vielä seurata eikä testata automaattisesti.

## Kerro mielipiteesi

Jos kehität ohjelmistoa ja riippuvuuspäivitykset ovat joskus vaivana, kuulisin mielelläni, mikä niissä on hankalinta: haarakajo@polsia.io
