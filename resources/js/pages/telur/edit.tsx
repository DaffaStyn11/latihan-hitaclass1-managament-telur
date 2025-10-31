import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

interface Kandang
{
    id: number,
    nama_kandang: string,
    jumlah_ayam: number,
    lokasi: string,
}

const EditPenjualan: React.FC = () => {
    const { props } = usePage<{ kandang: Kandang}>();
    const {kandang} = props;

    const [values, setValues] = useState({
        nama_kandang: kandang.nama_kandang || '',
        jumlah_ayam: kandang.jumlah_ayam || 0,
        lokasi: kandang.lokasi || '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.put(`/kandang/${kandang.id}`, values);
    };


    return (
        <div className="mx-auto max-w-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input Nama kandang */}
                <div>
                    <label className="mb-1 block font-medium">Nama kandang</label>
                    <input
                        type="text"
                        placeholder="masukan nama kandang"
                        name="nama_kandang"
                        value={values.nama_kandang}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label className="mb-1 block font-medium">Jumlah</label>
                    <input
                        type="number"
                        placeholder="masukan jumlah ayam"
                        name="jumlah_ayam"
                        value={values.jumlah_ayam}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 px-3 py-2"
                    />
                </div>

                <div>
                    <label className="mb-1 block font-medium">Harga</label>
                    <input
                        type="text"
                        placeholder="masukan lokasi"
                        name="lokasi"
                        value={values.lokasi}
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

export default EditPenjualan;
