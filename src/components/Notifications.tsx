import { FaBell } from "react-icons/fa"
import Icon from "./Icon"
import { useContext } from "react"
import { ThemeContext } from "../context/theme"

function Notifications() {

    const theme = useContext(ThemeContext)

    return <>
        <Icon icon={<FaBell />} props={{ className: `fill-${theme.color} text-3xl hover:cursor-pointer` }} />
    </>
}

export default Notifications