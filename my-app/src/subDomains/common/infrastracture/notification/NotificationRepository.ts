
const notifySuccess = (message: string) => {
    window.alert(message);
}
const notifyError = (message: string) => {
    window.alert(message);
}

export const NotificationRepository = {
    notifySuccess,
    notifyError
}