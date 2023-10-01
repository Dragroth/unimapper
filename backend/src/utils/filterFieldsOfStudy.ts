export function filterFieldsOfStudy(fieldsOfStudy: any, cities: any, userThreshold: any) {
    return fieldsOfStudy.filter((field: any): any => {
        if (cities.length) {
            return (field.threshold * 0.6 < userThreshold) && cities.includes(field.location);
        } else {
            return field.threshold * 0.6 < userThreshold;
        }
    });
}