import { authService } from "../_services/auth.service";

export function handleResponse(response: { text: () => Promise<any>; ok: any; status: number; statusText: any; }) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                if (window.location.pathname != '/login') {
                    authService.logout()
                }
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }        
        return data;
    });
}