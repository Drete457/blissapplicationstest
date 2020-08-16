export default function randomKey(): string {
    const current_date = (new Date()).valueOf().toString();
    const random = Math.random().toString();
    return current_date + random;
};