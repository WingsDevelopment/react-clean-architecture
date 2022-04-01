import { IDomainNotificationRepository } from "../../../counter/domain/repositoryInterfaces/IDomainNotificationRepository";

const notifySuccess = (message: string) => {
    window.alert(message);
}
const notifyError = (message: string) => {
    window.alert(message);
}

export class NotificationRepository implements IDomainNotificationRepository {
    notifySuccess = (message: string) => notifySuccess(message)
    notifyError = (message: string) => notifyError(message);
}