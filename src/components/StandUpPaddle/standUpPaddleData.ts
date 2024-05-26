import { OpenDaysInterface, PricesInterface } from "@/libs/definitions";

export const standUpPaddlePrices: PricesInterface = {
    rows: [
        {
            label: "1 heure",
            prices: ["10 €"],
        },
        {
            label: "2 heures",
            prices: ["18 €"],
        },
        {
            label: "Demi-journée",
            prices: ["25 €"],
        },
        {
            label: "Journée",
            prices: ["40 €"],
        },
        {
            label: "Semaine",
            prices: ["Se renseigner à l'accueil"],
        },
    ],
} as const;

export const standUpPaddleOpening: OpenDaysInterface = {
    rows: [
        {
            label: "lundi",
            openHours: [{ from: "10h00", to: "19h00" }],
        },
        {
            label: "mardi",
            openHours: [{ from: "10h00", to: "19h00" }],
        },
        {
            label: "mercredi",
            openHours: [{ from: "10h00", to: "19h00" }],
        },
        {
            label: "jeudi",
            openHours: [{ from: "10h00", to: "19h00" }],
        },
        {
            label: "vendredi",
            openHours: [{ from: "10h00", to: "19h00" }],
        },
        {
            label: "samedi",
            openHours: [{ from: "10h00", to: "19h00" }],
        },
        {
            label: "dimanche",
            openHours: [{ from: "10h00", to: "19h00" }],
        },
    ],
} as const;
