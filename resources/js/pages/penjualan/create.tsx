import { router } from '@inertiajs/react';
import { useState } from 'react';

const CreatePenjualan: React.FC = () => {
    const [values, setValues] = useState({
        jumlah_telur: '',
        harga_satuan: '',
        total_harga: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const updatedValues = { ...values, [name]: value };

        // Hitung total otomatis bila jumlah_telur & harga_satuan terisi
        if (name === 'jumlah_telur' || name === 'harga_satuan') {
            const jumlah = parseFloat(updatedValues.jumlah_telur) || 0;
            const harga = parseFloat(updatedValues.harga_satuan) || 0;
            updatedValues.total_harga = (jumlah * harga).toString();
        }

        setValues(updatedValues);
    };

    // handle submit form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/penjualan', values);
    };

    return (
        <div className="mx-auto max-w-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input Nama jumlah telur */}
                <div>
                    <label className="mb-1 block font-medium">Jumlah Telur</label>
                    <input
                        type="text"
                        placeholder="masukan jumlah telur"
                        name="jumlah_telur"
                        value={values.jumlah_telur}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label className="mb-1 block font-medium">Harga Satuan</label>
                    <input
                        type="number"
                        placeholder="masukan harga satuan"
                        name="harga_satuan"
                        value={values.harga_satuan}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label className="mb-1 block font-medium">Total Harga</label>
                    <input
                        type="text"
                        placeholder="total harga"
                        name="total_harga"
                        value={values.total_harga}
                        readOnly // ✅ agar tidak bisa diketik manual
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

export default CreatePenjualan;
