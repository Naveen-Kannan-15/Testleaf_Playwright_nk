export interface Payment{
    cashOnDelivery(): void
    upiPayments(): void
    cardPayments(): void
    internetBanking(): void
}