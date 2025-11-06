import { usePage } from "@inertiajs/react"

interface Kandang
{
    id: number,
    nama_kandang: string,
    jumlah_ayam: number,
    lokasi: string,
}

interface CustomProps extends Record<string, unknown> {
    kandang: Kandang;
}

const KandangShow: React.FC = () => {
    const { kandang } = usePage <CustomProps>().props;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Detail Kandang</h1>

            <div className="bg-white rounded-lg shadow-md p-4">
                <p><strong>ID:</strong>{kandang.id}</p>
                <p><strong>Nama Kandang:</strong>{kandang.nama_kandang}</p>
                <p><strong>Jumlah Ayam:</strong>{kandang.jumlah_ayam}</p>
                <p><strong>Lokasi:</strong>{kandang.lokasi}</p>
            </div>
        </div>
    )
}


export default KandangShow
