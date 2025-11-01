import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

interface Telur
{
    id: number,
    jumlah_telur: string,
    harga_telur: number,
}

const EditPenjualan: React.FC = () => {
    const { props } = usePage<{ telur: Telur}>();
    const {telur} = props;

    const [values, setValues] = useState({
        jumlah_telur: telur.jumlah_telur || '',
        harga_telur: telur.harga_telur || 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.put(`/telur/${telur.id}`, values);
    };


    return (
        <div className="mx-auto max-w-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Input jumlah telur */}
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
                    <label className="mb-1 block font-medium">Harga Telur</label>
                    <input
                        type="number"
                        placeholder="masukan jumlah ayam"
                        name="harga_telur"
                        value={values.harga_telur}
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
