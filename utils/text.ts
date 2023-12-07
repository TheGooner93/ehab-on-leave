import CONFIG from "@/config";

export const getStatusText = () => {
    if (CONFIG.status.isOnline) return 'online';
    if (CONFIG.status.isOnVacation) return 'on vacation';
    if (CONFIG.status.isSick) return 'having a sick day';

    return 'online'
}