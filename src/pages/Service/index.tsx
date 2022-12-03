import QRCode from "../../assets/img/QRCode.png"
import { ServiceInfo } from "../../components/ServiceInfo"

export const Service = () => {
    return (
        <div>
            <ServiceInfo />
            <button>Iniciar</button>
            <button>Finalizar</button>
            <img src={QRCode} alt="" />
        </div>
    )
}