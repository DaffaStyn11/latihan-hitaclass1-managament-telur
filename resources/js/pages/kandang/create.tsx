import { router } from '@inertiajs/react';
import React, { useState } from 'react';

const CreateKandang: React.FC = () => {
    const [values, setValues] = useState({
        nama_kandang: '',
        lokasi: '',
        jumlah_ayam: '',
    });

    // handle perubahan input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    // handle submit form
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.post('/kandang', values);
    };

    return (
        <div className='p-6 max-w-xl mx-auto border'>
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Input Nama Kandang */}
            <div>
                <label className="mb-1 block font-medium">Nama Kandang</label>
                <input
                    type="text"
                    placeholder="nama kandanG"
                    name="nama_kandang"
                    value={values.nama_kandang}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 px-3 py-2"
                />
            </div>

            <div>
                <label className="mb-1 block font-medium">Lokasi</label>
                <input
                    type="text"
                    placeholder="nama lokasi"
                    name="lokasi"
                    value={values.lokasi}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 px-3 py-2"
                />
            </div>

            <div>
                <label className="mb-1 block font-medium">Jumlah Ayam</label>
                <input
                    type="number"
                    name="jumlah_ayam"
                    placeholder="jumlah ayam"
                    value={values.jumlah_ayam}
                    onChange={handleChange}
                    className="w-full rounded border border-gray-300 px-3 py-2"
                />
            </div>

            <button type='submit' title='simpan' className='bg-amber-500 text-white rounded hover:bg-amber-100'>
            Simpan
            </button>
        </form>
        </div>
    );
};

export default CreateKandang;
