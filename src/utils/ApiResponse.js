class ApiResponse {
    constructor(statusCode, data = null, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;

        return {
            statusCode: this.statusCode,
            data: this.data,
            message: this.message,
            success: this.success,
        };
    }

    
}

module.exports = ApiResponse;