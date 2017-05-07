const beachClubFullDayPrices = [[
    '', 'journée', '1 sem.', '2 sem.', '3 sem.', '4 sem.',
], [
    '1 enfant', '20 €', '96 €', '180 €', '259 €', '336 €',
], [
    '2 enfants', '36 €', '172 €', '311 €', '466 €', '604 €',
], [
    '3 enfants', '49 €', '235 €', '423 €', '635 €', '823 €',
], [
    '4 enfants', '60 €', '288 €', '518 €', '777 €', '1008 €',
], [
    '5 enfants', '70 €', '336 €', '604 €', '907 €', '1176 €',
], [
    '6 enfants', '76 €', '634 €', '656 €', '984 €', '1276 €',
]];

const beachClubHalfDayPrices = [[
    '', 'demi-journée', '1 sem.', '2 sem.', '3 sem.', '4 sem.',
], [
    '1 enfant', '15 €', '72 €', '135 €', '194 €', '252 €',
], [
    '2 enfants', '27 €', '129 €', '243 €', '349 €', '453 €',
], [
    '3 enfants', '40 €', '192 €', '360 €', '518 €', '672 €',
], [
    '4 enfants', '50 €', '240 €', '450 €', '648 €', '840 €',
], [
    '5 enfants', '55 €', '264 €', '495 €', '712 €', '924 €',
], [
    '6 enfants', '60 €', '288 €', '540 €', '777 €', '1008 €',
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
