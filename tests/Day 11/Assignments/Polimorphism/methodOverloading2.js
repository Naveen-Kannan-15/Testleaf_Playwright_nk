"use strict";
class APIClient {
    sendRequest(endpoint, requestBody, requestStatus) {
        if (requestBody && requestStatus !== undefined) {
            console.log(`Endpoint: ${endpoint}, Request Body: ${requestBody}, Request Status: ${requestStatus}`);
        }
        else {
            console.log(`Endpoint: ${endpoint}`);
        }
    }
}
const apiClient = new APIClient();
apiClient.sendRequest("Users");
apiClient.sendRequest("Users", "{name: 'John'}", true);
