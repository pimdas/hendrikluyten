# Straatfeest Hendrik Luytenstraat

Nederlandstalige website voor zaterdag 8 mei 2027 vanaf 15:00, met aanmeldformulier en automatische bijdrageberekening.

## Railway

De Dockerfile bouwt Next.js standalone op Node 24. Koppel een permanent Railway-volume aan `/data`. Aanmeldingen worden alleen server-side opgeslagen in `/data/registrations.sqlite`; de database wordt niet openbaar aangeboden. `/api/health` controleert de databaseverbinding. Deploy één replica met dit volume.

De bedragen worden op de server berekend: volwassenen/12+ €25, kinderen jonger dan 12 €12,50. Er is geen online betaling of automatische e-mail gekoppeld.

## Lokaal

`npm ci`, `npm run build`, `npm start`. Zonder `DATA_DIR` wordt `./data` gebruikt. Gebruik Node 24 of hoger.

Eventuele aanmeldingen van de eerdere Sites-publicatie zijn niet automatisch naar deze database overgezet.
