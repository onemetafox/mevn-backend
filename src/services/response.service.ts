export default class ResponseService{
    public static success(data:any) {
        return {
            status: 'Success',
            errorCode: 0,
            data
        };
    }

    public static failure(error: any){
        return {
            status: 'Failure',
            errorCode: typeof error === 'number'? error : 1,
            data: error
        };
    }

    public static unauthorize (error: any){
        return {
            status: 'Unauthorized',
            errorCode: -1,
            data: error
        }
    }
}