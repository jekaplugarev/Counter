export type ChangeCounterActionType = ReturnType<typeof changeCounter>
export type SetCounterValueActionType = ReturnType<typeof setCounterValue>
export type ChangeMaxValueActionType = ReturnType<typeof changeMaxValue>
export type ChangeStartValueActionType = ReturnType<typeof changeStartValue>
export type SwitchCounterActionType = ReturnType<typeof switchCounter>
export type CounterReducerType =
    ChangeCounterActionType
    | SetCounterValueActionType
    | ChangeMaxValueActionType
    | ChangeStartValueActionType
    | SwitchCounterActionType
type InitialStateType = typeof initialState

const initialState = {
    maxValue: 1,
    startValue: 0,
    currentValue: 0,
    isSwitch: false
}

export enum ACTIONS_TYPE {
    CHANGE_COUNTER = 'CHANGE_COUNTER',
    SET_COUNTER_VALUE = 'SET_COUNTER_VALUE',
    CHANGE_MAX_VALUE = 'CHANGE_MAX_VALUE',
    CHANGE_START_VALUE = 'CHANGE_START_VALUE',
    SWITCH_COUNTER = 'SWITCH_COUNTER',
}

export const counterReducer = (state: InitialStateType = initialState, action: CounterReducerType): InitialStateType => {
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
        case ACTIONS_TYPE.SWITCH_COUNTER:
            return {
                ...state, isSwitch: action.isSwitch
            }
        default:
            return state
    }
}

export const changeCounter = () => ({type: ACTIONS_TYPE.CHANGE_COUNTER} as const)
export const setCounterValue = () => ({type: ACTIONS_TYPE.SET_COUNTER_VALUE} as const)
export const changeMaxValue = (value: number) => ({type: ACTIONS_TYPE.CHANGE_MAX_VALUE, value} as const)
export const changeStartValue = (value: number) => ({type: ACTIONS_TYPE.CHANGE_START_VALUE, value} as const)
export const switchCounter = (isSwitch: boolean) => ({type: ACTIONS_TYPE.SWITCH_COUNTER, isSwitch} as const)
