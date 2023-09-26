const CallApi = () => {
    const callMockApi = async () => {

        const response = fetch('https://64f732e69d775408495348ae.mockapi.io/api/v1/authmock', { method: "GET" });
        console.log(response);

    }
}

export default CallApi