export interface FlightModel {
    id: number;
    type: {
        id: number,
        name: string
    }
    flightKey: string;
    flightNumber: string;
    destination: string;
    scheduledAt: string;    // iso date format - lako se prenosi putem apija i konvertuje kasnije
    estimatedAt: null | string;
    connectedType: string;
    connectedFlight: string;
    plane: string;
    gate: null | string;
    terminal: string;
}


