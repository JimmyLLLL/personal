import { combineReducers } from 'redux'
import {reducer as resumeHeader} from '../pages/resume/components/Header/store'
import {reducer as resumeLeft} from '../pages/resume/components/Left/store'
import {reducer as resumeRight} from '../pages/resume/components/Right/store'

export default combineReducers({
    resumeHeader,
    resumeLeft,
    resumeRight
})