import { ServiceInfo } from "../../components/ServiceInfo"
import "./style.css"

export const Confirmation = () => {
    return (
        <div className="confirmation">
            <ServiceInfo />
            <input className="btn" type="button" value="Confirmar" />
        </div>
    )
}