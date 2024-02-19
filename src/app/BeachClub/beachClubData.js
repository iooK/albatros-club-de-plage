const beachClubFullDayPrices = [[
    '', 'journée', '1 sem.', '2 sem.', '3 sem.', '4 sem.',
], [
    '1 enfant', '25 €', '120 €', '210 €', '270 €', '340 €',
], [
    '2 enfants', '40 €', '216 €', '370 €', '470 €', '576 €',
], [
    '3 enfants', '54 €', '280 €', '470 €', '640 €', '756 €',
], [
    '4 enfants', '65 €', '330 €', '540 €', '750 €', '900 €',
], [
    '5 enfants', '75 €', '360 €', '600 €', '810 €', '690 €',
]];

const beachClubHalfDayPrices = [[
    '', 'demi-journée', '1 sem.', '2 sem.', '3 sem.', '4 sem.',
], [
    '1 enfant', '18 €', '100 €', '170 €', '230 €', '280 €',
], [
    '2 enfants', '33 €', '175 €', '270 €', '390 €', '480 €',
], [
    '3 enfants', '48 €', '225 €', '390 €', '565 €', '700 €',
], [
    '4 enfants', '60 €', '280 €', '475 €', '690 €', '860 €',
], [
    '5 enfants', '70 €', '300 €', '525 €', '760 €', '950 €',
]];

const beachClubOpening = [[
    'lundi', { 'from': '10h00', 'to': '12h30' }, { 'from': '16h00', 'to': '18h30' },
], [
    'mardi', { 'from': '10h00', 'to': '12h30' }, { 'from': '16h00', 'to': '18h30' },
], [
    'mercredi', { 'from': '10h00', 'to': '12h30' }, { 'from': '16h00', 'to': '18h30' },
], [
    'jeudi', { 'from': '10h00', 'to': '12h30' }, { 'from': '16h00', 'to': '18h30' },
], [
    'vendredi', { 'from': '10h00', 'to': '12h30' }, { 'from': '16h00', 'to': '18h30' },
], [
    'samedi', { 'from': '10h00', 'to': '12h30' }, { 'from': '16h00', 'to': '18h30' },
], [
    'dimanche', 'Fermé', '',
]];

export {beachClubOpening as default, beachClubFullDayPrices, beachClubHalfDayPrices};
