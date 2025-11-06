import { router, usePage } from '@inertiajs/react';
import React from 'react';

interface Kandang {
    id: number;
    nama_kandang?: string;
    jumlah_ayam?: number;
    lokasi?: string;
    created_at?: string;
    updated_at?: string;
}

interface CustomProps extends Record<string, unknown> {
    kandangs: Kandang[];
}

const KandangIndex: React.FC = () => {
    const { kandangs } = usePage<CustomProps>().props;

    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus kandang ini?')) {
            router.delete(`kandang/${id}`, {
                onSuccess: () => alert('Kandan berhasil dihapus'),
                onError: () => alert('Kandang gagal di hapus'),
            });
        }
    };

    const handleShow = (id: number) => {
        router.visit(`/kandang/${id}`);
    };

    return (
        <div className="p-6">
            <h1 className="mb-4 text-2xl font-bold">Daftar Kandang</h1>
            {kandangs.length === 0 ? (
                <p>Tidak ada data kandang tersedia.</p>
            ) : (
                <table className="min-w-full border border-gray-200 bg-white">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border-b px-4 py-2">ID</th>
                            <th className="border-b px-4 py-2">Nama Kandang</th>
                            <th className="border-b px-4 py-2">Jumlah Ayam</th>
                            <th className="border-b px-4 py-2">Lokasi</th>
                            <th className="border-b px-4 py-2">Dibuat Pada</th>
                            <th className="border-b px-4 py-2">Diupdate Pada</th>
                            <th className="border-b px-4 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {kandangs.map((kandang) => (
                            <tr key={kandang.id}>
                                <td className="border-b px-4 py-2">{kandang.id}</td>
                                <td className="border-b px-4 py-2">{kandang.nama_kandang}</td>
                                <td className="border-b px-4 py-2">{kandang.jumlah_ayam}</td>
                                <td className="border-b px-4 py-2">{kandang.lokasi}</td>
                                {/* <td className="py-2 px-4 border-b">
                                    {kandang.created_at ? new Date(kandang.created_at).toLocaleDateString() : ''}</td> */}
                                <td className="border-b px-4 py-2">
                                    {kandang.created_at
                                        ? new Date(kandang.created_at).toLocaleDateString('id-ID', {
                                              day: '2-digit',
                                              month: 'short',
                                              year: 'numeric',
                                              hour: '2-digit',
                                              minute: '2-digit',
                                          })
                                        : ''}
                                </td>
                                <td className="border-b px-4 py-2">
                                    {kandang.updated_at
                                        ? new Date(kandang.updated_at).toLocaleDateString('id-ID', {
                                              day: '2-digit',
                                              month: 'short',
                                              year: 'numeric',
                                              hour: '2-digit',
                                              minute: '2-digit',
                                          })
                                        : ''}
                                </td>

                                <td className="border-b px-4 py-2">
                                    <button onClick={() => handleShow(kandang.id)} className="rounded-md bg-amber-400 px-3 py-1 font-medium text-gray-900 transition-colors duration-200 hover:bg-amber-500">
                                        Detail
                                    </button>
                                    <button onClick={() => handleDelete(kandang.id)} className="px-3 py-1 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition-colors duration-200">
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default KandangIndex;
