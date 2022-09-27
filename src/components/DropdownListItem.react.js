
export default function DropdownListItem({className, option, onClick}){
    return(<li className={`dropDownItem ${className}`} onClick={onClick}>{option}</li>)
}