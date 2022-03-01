export const state ={
    users:[]
}

export const actions = {
    async getUsers({ commit }){
        try{
            const users = await this.$axios.get('https://jsonplaceholder.typicode.com/users')
            commit('SET_USERS', users)
        }
        catch(error){
            console.log(error)

        }
        
    }
    
}

export const mutations ={
    SET_USERS(state,payload) {
        console.log(payload.data)
        state.users = payload.data
    }
}