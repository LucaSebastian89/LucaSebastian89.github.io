import ProgressBar from 'react-bootstrap/ProgressBar';

const SkillBar = (props) => {
    
    const { skillIndex, skillName, skillValue} = props;

    return (
        <div className="py-3" key={skillIndex}>
            <h5>{skillName}</h5>
            <ProgressBar 
                variant="info"
                now={skillValue}
            />
        </div>
    )
}



export default SkillBar;