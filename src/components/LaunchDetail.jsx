import {useParams} from 'react-router-dom'

export function LaunchDetail(props){
    const {launchId} = useParams();

    return <div>Hola {launchId}</div>
}