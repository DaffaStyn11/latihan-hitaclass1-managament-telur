import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

interface Pakan
{
    id: number,
    nama_pakan: string,
    jumlah_pakan: number,
    harga_pakan: number,
    satuan: string,
}

const EditPakan: React.FC = () => {
    const { props } = usePage<{ pakan: Pakan}>();
    const {pakan} = props;

    const [values, setValues] = useState({
        nama_pakan: pakan.nama_pakan || '',
        jumlah_pakan: pakan.jumlah_pakan || 0,
        harga_pakan: pakan.harga_pakan || 0,
        satuan: pakan.satuan || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.put(`/pakan/${pakan.id}`, values);
    };

    return (
        <div className="mx-auto max-w-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input Nama pakan */}
                <div>
                    <label className="mb-1 block font-medium">Nama Pakan</label>
                    <input
                        type="text"
                        placeholder="masukan nama pakan"
                        name="nama_pakan"
                        value={values.nama_pakan}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label className="mb-1 block font-medium">Jumlah</label>
                    <input
                        type="number"
                        placeholder="masukan jumlah pakan"
                        name="jumlah_pakan"
                        value={values.jumlah_pakan}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label className="mb-1 block font-medium">Harga</label>
                    <input
                        type="text"
                        placeholder="masukan harga pakan"
                        name="harga_pakan"
                        value={values.harga_pakan}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label className="mb-1 block font-medium">Satuan</label>
                    <input
                        type="string"
                        name="satuan"
                        placeholder="satuan kg/ton"
                        value={values.satuan}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                </div>

                <button type="submit" title="update" className="rounded bg-amber-500 text-white hover:bg-amber-100">
                    Update
                </button>
            </form>
        </div>
    );

};

export default EditPakan;
