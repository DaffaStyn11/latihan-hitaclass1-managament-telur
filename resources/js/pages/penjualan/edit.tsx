import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';

interface Penjualan {
    id: number;
    jumlah_telur: number;
    harga_satuan: number;
    total_harga: number;
}

// gunakan union type agar bisa "" (string kosong) atau number
interface Values {
    jumlah_telur: string | number;
    harga_satuan: string | number;
    total_harga: number;
}

const EditPenjualan: React.FC = () => {
    const { props } = usePage<{ penjualan: Penjualan }>();
    const { penjualan } = props;

    // inisialisasi state dengan number
    const [values, setValues] = useState<Values>({
        jumlah_telur: penjualan.jumlah_telur ?? 0,
        harga_satuan: penjualan.harga_satuan ?? 0,
        total_harga: penjualan.total_harga ?? 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // biarkan kosong kalau input kosong
        const updatedValues = {
            ...values,
            [name]: value,
        };

        // hitung total harga hanya jika dua field terisi angka valid
        const jumlah = parseFloat(updatedValues.jumlah_telur as string) || 0;
        const harga = parseFloat(updatedValues.harga_satuan as string) || 0;
        updatedValues.total_harga = jumlah * harga;

        setValues(updatedValues);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // konversi string ke number saat dikirim
        router.put(`/penjualan/${penjualan.id}`, {
            jumlah_telur: parseFloat(values.jumlah_telur as string) || 0,
            harga_satuan: parseFloat(values.harga_satuan as string) || 0,
            total_harga: values.total_harga,
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="mx-auto max-w-xl rounded-xl border border-gray-200 p-6 shadow-sm dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="mb-1 block font-medium">Jumlah Telur</label>
                        <input
                            type="number"
                            placeholder="masukan jumlah telur"
                            name="jumlah_telur"
                            value={values.jumlah_telur}
                            onChange={handleChange}
                            // step="1"
                            // min="0"
                            className="w-full rounded border border-gray-300 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Harga per Butir</label>
                        <input
                            placeholder="masukan harga satuan"
                            type="number"
                            name="harga_satuan"
                            value={values.harga_satuan}
                            onChange={handleChange}
                            step="0.01"
                            min="0"
                            className="w-full rounded border border-gray-300 px-3 py-2"
                        />
                    </div>

                    <div>
                        <label className="mb-1 block font-medium">Total Harga</label>
                        <input
                            placeholder="total harga"
                            type="number"
                            name="total_harga"
                            value={values.total_harga}
                            readOnly
                            className="w-full rounded border border-gray-300 bg-gray-100 px-3 py-2"
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

export default EditPenjualan;
