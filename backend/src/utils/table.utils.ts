

class Table {
    static countThreshold(exams: Array<Object>): number {
        let result: number = 0;
        for (const exam of exams) {
            // @ts-ignore
            if (exam.extended) {
            // @ts-ignore
                result += exam.value * 2;
            } else {
            // @ts-ignore
                result += exam.value;
            }
        }
        return result;
    }

    static filterFieldsOfStudy(fieldsOfStudy: Array<Object>, cities: Array<string>, userThreshold: number) {
        return fieldsOfStudy.filter((field: Object): any => {
            if (cities.length) {
                // @ts-ignore
                return (field.threshold * 0.6 < userThreshold) && cities.includes(field.location);
            } else {
                // @ts-ignore
                return field.threshold * 0.6 < userThreshold;
            }
        });
    }
} 


export default Table;
