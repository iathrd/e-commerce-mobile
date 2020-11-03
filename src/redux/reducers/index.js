import {combineReducers} from 'redux'

const authState = {
    isLogin:false,
    token:'',
    isLoading:false,
    isError:false,
    alertMsg:""
}

export default combineReducers({
    auth:(state = authState,action)=>{
        switch (action.type){
            case 'LOGIN_PENDING':{
                return{
                    ...state,
                    isLoading:true,
                    isError:false,
                    alertMsg:"Login ..."

                }
            }
            case 'LOGIN_FULFILLED':{
                return {
                    ...state,
                    isLoading:false,
                    isLogin:true,
                    isError:false,
                    token:action.payload.data.token
 
                }
            }
            case'LOGIN_REJECTED':{
                return{
                ...state,
                isLogin:false,
                isError:true,
                alertMsg:"Wrong email or password"
            }
            }
            default:{
                return state
            }
        }
    }
})