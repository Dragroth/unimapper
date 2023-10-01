
export function countThreshold(exams: any): number {
    let result: number = 0;
    for (const exam of exams) {
        if (exam.extended) {
            result += exam.value * 2;
        } else {
            result += exam.value;
        }
    }
    return result;
}