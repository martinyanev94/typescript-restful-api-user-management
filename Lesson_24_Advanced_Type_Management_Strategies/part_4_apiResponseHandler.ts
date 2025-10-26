interface ApiResponse<T> {
    data: T;
    error?: string;
}
function handleApiResponse<T>(response: ApiResponse<T>): void {
    if (response.error) {
        console.error(`Error occurred: ${response.error}`);
        return;
    }
    
    console.log("Data received:", response.data);
}
const userResponse: ApiResponse<User> = {
    data: { id: 1, name: "John", email: "john@example.com", isActive: true }
};

handleApiResponse(userResponse);
const productResponse: ApiResponse<{ id: number; title: string }> = {
    data: { id: 1, title: "New Phone" }
};

handleApiResponse(productResponse);
