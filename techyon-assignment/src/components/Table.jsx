import { useState, useEffect, useId } from 'react';
import logo from '../assets/logo.png'
import SwornMembers from './SwornMembers';

const Table = () => {
    const [users, setUsers] = useState([])
    const [swornMember, setSwornMember] = useState("")
    const [loading, setLoading] = useState(false)
    const id = useId();

    let str = ""
    
    useEffect(() => {
        setLoading(true)
        fetch("https://anapioficeandfire.com/api/houses")
            .then(response => response.json())
            .then((json) => {
                setUsers(json)
                // json.swornMembers.
                
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    
    

    // const getSwornMenbers = (member) => {
    //     let str = "";
    //     fetch(member)
    //     .then(response => response.json())
    //     .then((json) => {
    //         // setSwornMember((prevSwornMamber) => prevSwornMamber + json.name)
    //         console.log("console yeh : ", json.name)
    //          str += json.name;
            
    //     })
    //     return str
    // }

    return (
        <div className="table-cont">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className="logo-cont">
                        <img src={logo} alt="" />
                    </div>
                    <table >
                        <tr>
                            <th>Name of the house</th>
                            <th>Region</th>
                            <th>Name of all the titles</th>
                            <th>Sworn members</th>
                        </tr>
                        {users.map(user => (
                            <tr key={id}>
                                <td>{user.name}</td>
                                <td>{user.region}</td>
                                <td>{
                                    user.titles.length ? 
                                    user.titles.join(',')
                                    : <p>none</p>
                                }</td>
                                <td>{
                                    // user.swornMembers.length ? 
                                    
                                    user.swornMembers.map((smember) => 
                                        {
                                            let str = [];
                                        //  getSwornMenbers(smember)
                                        
                                        fetch(smember)
                                        .then(response => response.json())
                                        .then((json) => {
                                            // setSwornMember((prevSwornMamber) => prevSwornMamber + json.name)
                                                console.log("console yeh : ", json.name)
                                                str.push(json.name);
                                                
                                                console.log("sss",str)
                                            })
                                            {str}
                                        })

                                        
                                        

                                }</td>
                            </tr>
                        ))}
                    </table>
                </>
            )}
        </div>
    )
};

export default Table;