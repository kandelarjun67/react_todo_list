import React from 'react'
import { useState } from 'react'

export default function TodoList() {
    const [activity, setActivity] = useState(" ")

    const [list, setList] = useState([])

    const btnClicked = () => {
        let newList = [...list]
        if (activity !== ' ') {
            newList.push(activity)
            setList(newList)
            // console.log(newList)
            setActivity(' ')
        }
    }
    return (
        <>
            {list.map((item) =>
                <li>
                    {item} 
                </li>
            )}
            <input type="text" placeholder='Add Activity' value={activity} onChange={(e) => setActivity(e.target.value)} />
            <button onClick={btnClicked}>Add</button>
        </>
    )
}
