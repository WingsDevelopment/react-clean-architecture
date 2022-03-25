import { NotificationRepository } from "../../../common/infrastracture/notification/NotificationRepository";

export const IDomainNotificationRepository = {
    notifySuccess: NotificationRepository.notifySuccess,
    notifyError: NotificationRepository.notifyError
}