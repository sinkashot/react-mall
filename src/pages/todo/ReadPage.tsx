import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";

const ReadPage = () => {
    const navigate = useNavigate()

    const {tno} = useParams()
    console.log(tno)

    const [queryParams] = useSearchParams()

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const queryStr = createSearchParams({page:page, size:size}).toString()

    const moveToModify = (tno) => {
        navigate({
            pathname: `/todo/modify/${tno}`,
            search: queryStr
        })
    }

    const moveToList = () => {
        navigate({
            pathname: '/todo/list',
            search: queryStr
        })
    }

    return (
        <div className={'text-3xl'}>
            Todo Read Page tno:{tno}

            <div>
                <button className={'p-3'} onClick={() => moveToModify(tno)}>Modify</button>
                <button className={'p-3'} onClick={moveToList}>List</button>
            </div>
        </div>
    );
};

export default ReadPage;