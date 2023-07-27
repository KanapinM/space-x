export class Api {
    #onResponce(responce) {
        if (responce.ok) {
            return responce.json();
        }
        return Promise.reject(console.error(`Возникла ошибка, код - ${responce.status}`));
    }

    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }

    getInitialLaunches() {
        return fetch(`${this._url}`, {
            method: 'GET',
            headers: this._headers,
        })
            .then((responce) => {
                return this.#onResponce(responce);
            })
    };

}