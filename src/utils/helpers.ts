export const _truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
};

export function formatNumberWithDots(num: number): string {
    return num.toLocaleString("de-DE"); // 'de-DE' uses dot as thousand separator
}
