export interface PartnerDataInterface {
    image: string;
    link: string;
    name: string;
}

export interface TeamDataInterface {
    description: string;
    image: string;
    name: string;
}

const DayEnum = {
    lundi: "lundi",
    mardi: "mardi",
    mercredi: "mercredi",
    jeudi: "jeudi",
    vendredi: "vendredi",
    samedi: "samedi",
    dimanche: "dimanche",
} as const;
type dayEnumKeys = (typeof DayEnum)[keyof typeof DayEnum];
export interface OpenHourInterface {
    from: string;
    to: string;
}
export interface OpenDayInterface {
    label: dayEnumKeys;
    openHours: Array<OpenHourInterface | false | null>;
}
export interface OpenDaysInterface {
    colLabels?: Array<string>;
    rows: Array<OpenDayInterface>;
}

export interface PriceInterface {
    label?: string;
    prices: Array<string>;
}
export interface PricesInterface {
    colLabels?: Array<string>;
    rows: Array<PriceInterface>;
}
