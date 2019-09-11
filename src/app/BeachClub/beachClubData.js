const beachClubFullDayPrices = [[
    '', 'journée', '1 sem.', '2 sem.', '3 sem.', '4 sem.',
], [
    '1 enfant', '20 €', '100 €', '180 €', '259 €', '336 €',
], [
    '2 enfants', '36 €', '180 €', '311 €', '466 €', '604 €',
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
    '1 enfant', '15 €', '85 €', '140 €', '200 €', '252 €',
], [
    '2 enfants', '27 €', '145 €', '250 €', '360 €', '455 €',
], [
    '3 enfants', '40 €', '200 €', '370 €', '530 €', '675 €',
], [
    '4 enfants', '50 €', '250 €', '460 €', '660 €', '840 €',
], [
    '5 enfants', '55 €', '270 €', '500 €', '725 €', '925 €',
], [
    '6 enfants', '60 €', '295 €', '550 €', '790 €', '1010 €',
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
