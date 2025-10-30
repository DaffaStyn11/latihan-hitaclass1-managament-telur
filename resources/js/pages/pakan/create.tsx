import { router } from '@inertiajs/react';
import { useState } from 'react';

const CreatePakan: React.FC = () => {
    const [values, setValues] = useState({
        nama_pakan: '',
        jumlah_pakan: '',
        harga_pakan: '',
        satuan: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    // handle submit form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/pakan', values);
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

                <button type="submit" title="simpan" className="rounded bg-amber-500 text-white hover:bg-amber-100">
                    Simpan
                </button>
            </form>
        </div>
    );
};

export default CreatePakan;
