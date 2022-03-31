
export interface IDomainNotificationRepository {
    notifySuccess: (message: string) => void;
    notifyError: (message: string) => void;
}