import { createSelector } from 'reselect'

const getElement = (state)=>state.reducerAdd;

export const getStateProps = createSelector(
    [ getElement ],
    ( reducerAdd ) => reducerAdd
  )


