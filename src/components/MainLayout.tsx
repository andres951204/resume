import Menu from "./Menu"
import Header from "./Header"
import Sales from "../pages/Sales"

type Props = {
    children: JSX.Element
}

function MainLayout({ children }: Props) {
    return <>
        <Header />
        <div className="mt-10 pl-36 pr-7">
            {/* {children} */}
            <Sales />
        </div>
        <Menu />
    </>
}

export default MainLayout