const beachClubFullDayPrices = [[
    '', 'journée', '1 sem.', '2 sem.', '3 sem.', '4 sem.',
], [
    '1 enfant', '22 €', '115 €', '200 €', '270 €', '340 €',
], [
    '2 enfants', '40 €', '200 €', '320 €', '470 €', '610 €',
], [
    '3 enfants', '55 €', '240 €', '430 €', '640 €', '830 €',
], [
    '4 enfants', '65 €', '295 €', '520 €', '790 €', '1020 €',
], [
    '5 enfants', '75 €', '340 €', '610 €', '910 €', '1190 €',
], [
    '6 enfants', '80 €', '650 €', '660 €', '1000 €', '1290 €',
]];

const beachClubHalfDayPrices = [[
    '', 'demi-journée', '1 sem.', '2 sem.', '3 sem.', '4 sem.',
], [
    '1 enfant', '16 €', '90 €', '145 €', '210 €', '260 €',
], [
    '2 enfants', '30 €', '150 €', '255 €', '370 €', '460 €',
], [
    '3 enfants', '45 €', '210 €', '375 €', '550 €', '680 €',
], [
    '4 enfants', '55 €', '260 €', '465 €', '680 €', '850 €',
], [
    '5 enfants', '60 €', '280 €', '510 €', '740 €', '930 €',
], [
    '6 enfants', '65 €', '300 €', '560 €', '800 €', '1020 €',
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
