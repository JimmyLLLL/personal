import { combineReducers } from 'redux'
import {reducer as resumeHeader} from '../pages/resume/components/Header/store'
import {reducer as resumeLeft} from '../pages/resume/components/Left/store'
import {reducer as resumeRight} from '../pages/resume/components/Right/store'
import {reducer as blog} from '../pages/blog/store'
import {reducer as body} from '../pages/body/store'

export default combineReducers({
    resumeHeader,
    resumeLeft,
    resumeRight,
    blog,
    body
})