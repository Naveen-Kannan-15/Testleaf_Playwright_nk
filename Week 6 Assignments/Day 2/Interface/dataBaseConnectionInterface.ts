export interface DataBaseConnection{
    connect(): void
    disconnect(): void
    executeUpdate(): void
}