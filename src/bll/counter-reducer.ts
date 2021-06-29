export type ChangeCounterActionType = ReturnType<typeof changeCounter>
export type SetCounterValueActionType = ReturnType<typeof setCounterValue>
export type ChangeMaxValueActionType = ReturnType<typeof changeMaxValue>
export type ChangeStartValueActionType = ReturnType<typeof changeStartValue>
export type SetValuesFromLocalStorageActionType = ReturnType<typeof setValuesFromLocalStorage>
type ActionType =
    ChangeCounterActionType
    | SetCounterValueActionType
    | ChangeMaxValueActionType
    | ChangeStartValueActionType
    | SetValuesFromLocalStorageActionType
type InitialStateType = typeof initialState

const initialState = {
    maxValue: 1,
    startValue: 0,
    currentValue: 0
}

export enum ACTIONS_TYPE {
    CHANGE_COUNTER = 'CHANGE_COUNTER',
    SET_COUNTER_VALUE = 'SET_COUNTER_VALUE',
    CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
    CHANGE_START_VALUE = 'CHANGE_START_VALUE',
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_COUNTER:
            return {
                ...state, currentValue: ++state.currentValue
            }
        case ACTIONS_TYPE.SET_COUNTER_VALUE:
            return {
                ...state, currentValue: state.startValue
            }
        case ACTIONS_TYPE.CHANGE_MAX_VALUE:
            return {
                ...state, maxValue: action.value
            }
        case ACTIONS_TYPE.CHANGE_START_VALUE:
            return {
                ...state, startValue: action.value
            }
        case 'SET-VALUE-FROM-LOCAL-STORAGE':
            return {
                ...state
            }
        default:
            return state
    }
}

export const changeCounter = () => ({type: ACTIONS_TYPE.CHANGE_COUNTER} as const)
export const setCounterValue = () => ({type: ACTIONS_TYPE.SET_COUNTER_VALUE} as const)
export const changeMaxValue = (value: number) => ({type: ACTIONS_TYPE.CHANGE_MAX_VALUE, value} as const)
export const changeStartValue = (value: number) => ({type: ACTIONS_TYPE.CHANGE_START_VALUE, value} as const)

export const setValuesFromLocalStorage = (value: number) => ({type: 'SET-VALUE-FROM-LOCAL-STORAGE', value} as const)



