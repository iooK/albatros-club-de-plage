import { OpenDaysInterface, PricesInterface } from "@/libs/definitions";

export const fitnessPrices: PricesInterface = {
    colLabels: ["Tarif séance"],
    rows: [
        {
            prices: ["10 €"],
        },
    ],
} as const;
export const paddleFitnessPrices: PricesInterface = {
    colLabels: ["Tarif séance de 9h à 9h45"],
    rows: [
        {
            prices: ["15 €"],
        },
    ],
} as const;

export const fitnessOpenDays: OpenDaysInterface = {
    rows: [
        {
            label: "lundi",
            openHours: [
                { from: "10h15", to: "11h15" },
                { from: "11h30", to: "12h15" },
            ],
        },
        {
            label: "mardi",
            openHours: [
                { from: "10h15", to: "11h15" },
                { from: "11h30", to: "12h15" },
            ],
        },
        {
            label: "mercredi",
            openHours: [
                { from: "10h15", to: "11h15" },
                { from: "11h30", to: "12h15" },
            ],
        },
        {
            label: "jeudi",
            openHours: [
                { from: "10h15", to: "11h15" },
                { from: "11h30", to: "12h15" },
            ],
        },
        {
            label: "vendredi",
            openHours: [
                { from: "10h15", to: "11h15" },
                { from: "11h30", to: "12h15" },
            ],
        },
        {
            label: "samedi",
            openHours: [
                { from: "10h15", to: "11h15" },
                { from: "11h30", to: "12h15" },
            ],
        },
        {
            label: "dimanche",
            openHours: [false, null],
        },
    ],
} as const;
