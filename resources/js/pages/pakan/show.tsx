import { usePage } from "@inertiajs/react"

interface Pakan
{
    id: number;
    nama_pakan?: string;
    jumlah_pakan?: number;
    harga_pakan?: number;
    satuan?: string;
    created_at?: string;
    updated_at?: string;
}

interface CustomProps extends Record<string, unknown> {
    pakan: Pakan;
}

const PakanShow: React.FC = () => {
    const { pakan } = usePage <CustomProps>().props;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Detail Pakan</h1>

            <div className="bg-white rounded-lg shadow-md p-4">
                <p><strong>ID:</strong>{pakan.id}</p>
                <p><strong>Nama Pakan:</strong>{pakan.nama_pakan}</p>
                <p><strong>Jumlah Pakan:</strong>{pakan.jumlah_pakan}</p>
                <p><strong>Lokasi:</strong>{pakan.harga_pakan}</p>
            </div>
        </div>
    )
}


export default PakanShow
