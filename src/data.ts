interface Data {
    report: {
        id: number | string;
        source: string;
        amount: number;
        created_at: Date;
        updated_at: Date;
        type: ReportType;
    }[]
}
export enum ReportType {
    INCOME = 'income',
    EXPENSE = 'expense',
}

export const data: Data = {
    report: [
        {
            id: 1,
            source: 'Salary',
            amount: 500,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 2,
            source: 'YouTube',
            amount: 800,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        },
        {
            id: 3,
            source: 'Instagram',
            amount: 1200,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 4,
            source: 'YouTube',
            amount: 3000,
            created_at: new Date(),
            updated_at: new Date(),
            type: ReportType.EXPENSE
        }]
}

