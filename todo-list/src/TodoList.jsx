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

    const removeTheItem = (i)=> {
        // const upDatedList = [...list]

       const upDatedList = list.filter((elem, id) => {
          return i !== id
        })
        setList(upDatedList)
    }

const removeAll = () => {
    setList([])
}
    return (
        <>
            <div className="container bg-light py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <input type="text" placeholder='Add Activity' className='form-control py-3' value={activity} onChange={(e) => setActivity(e.target.value)} />
                    </div>
                    <div className="col-lg-4">
                        <button className='btn btn-primary btn-lg py-3 px-5' onClick={btnClicked}>Add</button>
                    </div>
                </div>
                </div>
                <div className="container bg-dark text-light py-3">
             
                <h3>Here is the List :{")"}</h3>
                {list.map((item,i) =>
                <><div className="row ">
                    <div className="col-lg-6">
                    <p className='list-data'>
                        {item}
                    </p>
                    </div>
                   <div className="col-lg-6">
                   <button className='btn btn-danger btn-lg' onClick={() =>removeTheItem(i)}>Remove</button>
                   </div>
                   </div>
                   
                </>

                )}
                {list.length >= 1 && <button className='btn btn-danger btn-lg' onClick={removeAll}>Remove All</button>}
                       
                       </div>

           
        </>
    )
}
