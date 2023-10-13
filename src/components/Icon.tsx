import { cloneElement } from "react"
type Props = {
    icon: JSX.Element,
    props?: {}
}

function Icon({ icon, props }: Props) {
    let newProps = props ?? { className: `fill-[#fff] text-3xl` }

    let newIcon = cloneElement(icon, { ...newProps })
    return <>
        {newIcon}
    </>
}

export default Icon