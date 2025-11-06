import { router } from '@inertiajs/react';
import { useState } from 'react';

const CreateTelur: React.FC = () => {
    const [values, setValues] = useState({
        jumlah_telur: '',
        harga_telur: '',
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    // handle submit form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/telur', values);
    };

    return (
        <div>
            <div className="mx-auto max-w-xl rounded-xl border border-gray-200 p-6 shadow-sm dark:border-gray-700">
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Input Nama pakan */}
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
                            placeholder="masukan harga"
                            name="harga_telur"
                            value={values.harga_telur}
                            onChange={handleChange}
                            className="w-full rounded border border-gray-300 px-3 py-2"
                        />
                    </div>

                    <button
                        type="submit"
                        title="create"
                        className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-amber-600">
                        Simpan
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTelur;
