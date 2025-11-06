import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface Pakan {
    id: number;
    nama_pakan: string;
    jumlah_pakan: number;
    harga_pakan: number;
    satuan: string;
}

const EditPakan: React.FC = () => {
    const { props } = usePage<{ pakan: Pakan }>();
    const { pakan } = props;

    const [values, setValues] = useState({
        nama_pakan: pakan.nama_pakan || '',
        jumlah_pakan: pakan.jumlah_pakan || 0,
        harga_pakan: pakan.harga_pakan || 0,
        satuan: pakan.satuan || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.put(`/pakan/${pakan.id}`, values);
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="mx-auto max-w-xl rounded-xl border border-gray-200 p-6 shadow-sm dark:border-gray-700">
                <p className="">Edit Pakan</p>
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
                        <label className="mb-1 block font-medium">Jumlah Pakan</label>
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
                        <label className="mb-1 block font-medium">Harga Harga</label>
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

                    <button
                        type="submit"
                        title="update"
                        className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-amber-600"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );

};

export default EditPakan;
