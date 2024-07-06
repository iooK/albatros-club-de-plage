import { OpenDaysInterface, PricesInterface } from "@/libs/definitions";

const colLabels = ["", "journée", "1 sem.", "2 sem.", "3 sem.", "4 sem."];

export const beachClubFullDayPrices: PricesInterface = {
    colLabels: colLabels,
    rows: [
        {
            label: "1 enfant",
            prices: ["25 €", "120 €", "210 €", "270 €", "340 €"],
        },
        {
            label: "2 enfants",
            prices: ["40 €", "216 €", "370 €", "470 €", "576 €"],
        },
        {
            label: "3 enfants",
            prices: ["54 €", "280 €", "470 €", "640 €", "756 €"],
        },
        {
            label: "4 enfants",
            prices: ["65 €", "330 €", "540 €", "750 €", "900 €"],
        },
        {
            label: "5 enfants",
            prices: ["75 €", "360 €", "600 €", "810 €", "960 €"],
        },
    ],
} as const;
export const beachClubHalfDayPrices: PricesInterface = {
    colLabels: colLabels,
    rows: [
        {
            label: "1 enfant",
            prices: ["18 €", "100 €", "170 €", "230 €", "280 €"],
        },
        {
            label: "2 enfants",
            prices: ["33 €", "175 €", "270 €", "390 €", "480 €"],
        },
        {
            label: "3 enfants",
            prices: ["48 €", "225 €", "390 €", "565 €", "700 €"],
        },
        {
            label: "4 enfants",
            prices: ["60 €", "280 €", "475 €", "690 €", "860 €"],
        },
        {
            label: "5 enfants",
            prices: ["70 €", "300 €", "525 €", "760 €", "950 €"],
        },
    ],
} as const;

export const beachClubOpenDays: OpenDaysInterface = {
    rows: [
        {
            label: "lundi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "mardi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "mercredi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "jeudi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "vendredi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "samedi",
            openHours: [
                { from: "10h00", to: "12h30" },
                { from: "16h00", to: "18h30" },
            ],
        },
        {
            label: "dimanche",
            openHours: [false, null],
        },
    ],
} as const;
