import { OpenDaysInterface, PricesInterface } from "@/libs/definitions";

export const swimmingSchoolPrices: PricesInterface = {
    colLabels: ["", "Membre externe au club", "Membre du club"],
    rows: [
        {
            label: "séance unique",
            prices: ["20 €", "18 €"],
        },
        {
            label: "stage de 6 leçons",
            prices: ["115 €", "110 €"],
        },
        {
            label: "stage de 10 leçons",
            prices: ["175 €", "170 €"],
        },
        {
            label: "stage de 15 leçons",
            prices: ["220 €", "210 €"],
        },
    ],
} as const;

export const swimmingSchoolOpenDays: OpenDaysInterface = {
    rows: [
        {
            label: "lundi",
            openHours: [
                { from: "09h00", to: "13h00" },
                { from: "14h00", to: "19h00" },
            ],
        },
        {
            label: "mardi",
            openHours: [
                { from: "09h00", to: "13h00" },
                { from: "14h00", to: "19h00" },
            ],
        },
        {
            label: "mercredi",
            openHours: [
                { from: "09h00", to: "13h00" },
                { from: "14h00", to: "19h00" },
            ],
        },
        {
            label: "jeudi",
            openHours: [
                { from: "09h00", to: "13h00" },
                { from: "14h00", to: "19h00" },
            ],
        },
        {
            label: "vendredi",
            openHours: [
                { from: "09h00", to: "13h00" },
                { from: "14h00", to: "19h00" },
            ],
        },
        {
            label: "samedi",
            openHours: [
                { from: "09h00", to: "13h00" },
                { from: "14h00", to: "19h00" },
            ],
        },
        {
            label: "dimanche",
            openHours: [{ from: "09h00", to: "13h00" }, false],
        },
    ],
} as const;
