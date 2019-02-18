export interface Environment {
    request: {
        apiVersion: string,
        avoidQueryString: boolean,
        fileFormatValue: number
    }
    response: {
        nestedResponse: boolean
    };
}

export const environment: Environment = {
    request: {
        apiVersion: '5.1.2.13973',
        avoidQueryString: true,
        fileFormatValue: 20
    },
    response: {
        nestedResponse: true
    }
}