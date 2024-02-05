import {useEffect, useState} from "react";
import {getOne} from "../../api/todoApi.ts";
import {todoReadType} from "../../types/todoType.ts";

const initState = {
    tno: 0,
    title: '',
    content: '',
    dueDate: '',
    complete: false
}
const ReadComponent = ({tno}) => {
    const [todo, setTodo] = useState(initState)

    useEffect(() => {
        getOne(tno).then(data => {
            console.log(data)
            setTodo(data)
        })
    }, [tno])

    return (
        <div>

        </div>
    );
};

export default ReadComponent;