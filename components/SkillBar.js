import ProgressBar from 'react-bootstrap/ProgressBar';

const SkillBar = (props) => {
    
    const { skillName, skillValue} = props;

    return (
        <div className="py-3">
            <h5>{skillName}</h5>
            <ProgressBar 
                variant="info"
                now={skillValue}
            />
        </div>
    )
}



export default SkillBar;