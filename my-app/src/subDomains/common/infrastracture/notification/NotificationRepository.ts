import { IDomainNotificationRepository } from "../../../counter/domain/repositoryInterfaces/IDomainNotificationRepository";
import { injectable } from 'inversify';

const notifySuccess = (message: string) => {
    window.alert(message);
}
const notifyError = (message: string) => {
    window.alert(message);
}

@injectable()
export class NotificationRepository implements IDomainNotificationRepository {
    notifySuccess = (message: string) => notifySuccess(message)
    notifyError = (message: string) => notifyError(message);
}