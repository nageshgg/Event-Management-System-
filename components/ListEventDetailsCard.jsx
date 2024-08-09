export default function ({name, details}) {
    return (
        <div>
            <div className={"text-sm text-gray-500"}>{name}</div>
            <div>{details}</div>
        </div>
    )
}