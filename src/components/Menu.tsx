import { FaChartBar,FaBoxes,FaMoneyBillAlt,FaUserCog, FaCog } from 'react-icons/fa';
import Action from './Action';

function Menu() {
    return <>
        <div className="fixed top-1/4">
            <div className="flex flex-col justify-between bg-pink">
                <Action icon={<FaChartBar />} name='Reportes' />
                <Action icon={<FaBoxes />} name='Inventario' />
                <Action icon={<FaMoneyBillAlt />} name='Venta' />
                <Action icon={<FaUserCog />} name='Usuario' />
                <Action icon={<FaChartBar />} name='Config' />
            </div>
        </div>
    </>
}

export default Menu