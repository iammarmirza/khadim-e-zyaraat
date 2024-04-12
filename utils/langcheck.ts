export const hasEnglishText = (text: string) => {
    return text.match(/([\u0041-\u005A]|[\u0061-\u007E])+/g);
}