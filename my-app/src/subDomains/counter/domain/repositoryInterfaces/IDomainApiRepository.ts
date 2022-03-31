
export interface IDomainCounterRepository {
    fetchAmountAsync: () => Promise<{ amount: number }>,
}