import { usePage } from "@inertiajs/react";

interface Telur {
    id: number,
    jumlah_telur: number,
    harga_telur:  number,

}

interface CustomProps extends Record<string, unknown>{
    telur: Telur;
}

const TelurShow: React.FC = () =>{
    const { telur } = usePage <CustomProps>().props;
        return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Detail Telur</h1>

            <div className="bg-white rounded-lg shadow-md p-4">
                <p><strong>ID:</strong>{telur.id}</p>
                <p><strong>Jumlah Telur:</strong>{telur.jumlah_telur}</p>
                <p><strong>Harga Telur:</strong>{telur.harga_telur}</p>
            </div>
        </div>
    )
}

export default TelurShow


