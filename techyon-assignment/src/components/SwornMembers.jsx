import { useState, useEffect,useId } from 'react';

const SwornMembers = (props) => {
    const [swornMembers, setSwornMembers] = useState("")
    const id = useId();

    useEffect(() => {
        fetch(prop.url)
            .then(response => response.json())
            .then((json) => {
                setSwornMembers(swornMembers + json.name)
                debugger;
            })
    }, [])
    
    

    return (
        <>
            <p key={id}></p>
        </>
    )
};

export default SwornMembers;