import { useContext } from "react"
import Icon from "./Icon"
import { ThemeContext } from "../context/theme"

type Props = {
    icon: JSX.Element,
    name: string
}
function Action({ icon, name }: Props) {
    const theme = useContext(ThemeContext)

    return <>
        <div className={`flex flex-col items-center justify-center pt-4 pb-4 pl-2 pr-2 hover:cursor-pointer hover:bg-${theme.color}-dark`}>
            <Icon icon={icon} />
            <span className={`font-medium text-white`}>{name}</span>
        </div>
    </>
}

export default Action