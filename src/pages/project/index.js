import React,{ Component,Fragment } from 'react';
import { ProjectWrapper } from './styles'

class Project extends Component {
    componentDidMount(){
        document.title="JimmyLam的Demo"
    }
    render() {
         return (
             <Fragment>
                 <ProjectWrapper>
                    <div className="projectOneTitle">Demo：极限生存 && 画布</div>
                    <div className="projectTwo">
                        <iframe src="http://www.JinmyLam.xin/canvasGame" width="375" height="667" className="canvasGame" title="canvasGame"></iframe>
                        <iframe src="http://www.JinmyLam.xin/JimmyNotes" width="375" height="667" className="JimmyNotes" title="JimmtNotes"></iframe>
                    </div>
                    <div className="projectOneTitle">Demo：深大荔知新版公文通</div>
                    <a className="aEle" href="http://www.JinmyLam.xin/SZUNewsBeta" target="_blank" rel="noopener noreferrer">深大荔知公文通（移动端）</a><span className="aSpan">← click</span>
                    
                 </ProjectWrapper>

                 
             </Fragment>
        )       
    }   
}

export default Project;