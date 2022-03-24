import { NotificationRepository } from "../../../common/infrastracture/notification/NotificationRepository";

export const INotificationRepository = {
    notifySuccess: NotificationRepository.notifySuccess,
    notifyError: NotificationRepository.notifyError
}