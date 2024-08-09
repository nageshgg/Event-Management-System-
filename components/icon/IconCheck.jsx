export default function({checked=false}){
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="16" height="16" rx="8" fill={checked ? "#66C87B" : "#E6E6E6"}/>
            <path d="M5.3335 8L7.00016 9.66667L10.6668 6" stroke="white" strokeWidth="1.5"/>
        </svg>
    )
}