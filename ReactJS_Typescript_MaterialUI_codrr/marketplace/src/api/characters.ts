import { instance } from "./base.api";

const endpoint = "character";

export const characters = {
    getAll: function ({ page = 1 }: { page?: number }) {
        // instance contiene la url base
        return instance.get(endpoint, {
            params: { // paginacion
                page
            }
        })
    },
    getById: function ({ id }: { id: string | undefined }) {
        return instance.get(`${endpoint}/${id}`)
    }
}