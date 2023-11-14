

class Table {
    static countThreshold(exams: Array<Object>): number {
        return exams.reduce((exam: any, count: number = 0): number => {
            exam.extended ? count += exam.value * 2 : count += exam.value;
            return count;
        });
    }

    static filterFieldsOfStudy(
        fieldsOfStudy: Array<Object>,
        cities: Array<string>,
        userThreshold: number,
        displayThreshold: number
    ): Array<Object> {
        return fieldsOfStudy.filter((field: {location: string, threshold: number}): Array<Object> => {
            if (cities.length) {
                return (field.threshold * displayThreshold < userThreshold) && 
                    cities.includes(field.location);
            } else {
                return field.threshold * displayThreshold < userThreshold;
            }
        });
    }
} 


export default Table;
