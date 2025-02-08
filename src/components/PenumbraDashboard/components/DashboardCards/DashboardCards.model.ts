export interface DashboardCardsProps {
    cards: ICard[];
}

export interface ICard {
    background: string,
    icon: string,
    title: string,
    data: string,
    cornerInfo: string
    chart: string;
}