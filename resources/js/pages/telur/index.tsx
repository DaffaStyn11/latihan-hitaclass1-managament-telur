import { router, usePage } from '@inertiajs/react';
import React from 'react';

interface telur {
    id: number;
    jumlah_telur?: number;
    harga_telur?: number;
    created_at?: string;
    updated_at?: string;
}
interface CustomProps extends Record<string, unknown> {
    telurs: telur[];
}
const TelurIndex: React.FC = () => {
    const { telurs } = usePage<CustomProps>().props;
    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus telur ini?')) {
            router.delete(`telur/${id}`, {
                onSuccess: () => alert('Telur berhasil dihapus'),
                onError: () => alert('Telur gagal di hapus'),
            });
        }
    };

    const handleShow = (id: number) => {
        router.visit(`/telur/${id}`);
    };

    return (
        <div className="p-6">
            <h1 className="mb-4 text-2xl font-bold">Daftar Telur</h1>
            {telurs.length === 0 ? (
                <p>Tidak ada data telur tersedia.</p>
            ) : (
                <table className="min-w-full border border-gray-200 bg-white">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border-b px-4 py-2">ID</th>
                            <th className="border-b px-4 py-2">Jumlah Telur</th>
                            <th className="border-b px-4 py-2">Harga Telur</th>
                            <th className="border-b px-4 py-2">Dibuat Pada</th>
                            <th className="border-b px-4 py-2">Diupdate Pada</th>
                            <th className="border-b px-4 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {telurs.map((telur) => (
                            <tr key={telur.id}>
                                <td className="border-b px-4 py-2">{telur.id}</td>
                                <td className="border-b px-4 py-2">{telur.jumlah_telur || 'N/A'}</td>
                                <td className="border-b px-4 py-2">{telur.harga_telur !== undefined ? telur.harga_telur : 'N/A'}</td>
                                {/* <td className="py-2 px-4 border-b">
                                    {pakan.created_at ? new Date(pakan.created_at).toLocaleDateString() : ''}</td> */}
                                <td className="border-b px-4 py-2">
                                    {telur.created_at
                                        ? new Date(telur.created_at).toLocaleDateString('id-ID', {
                                              day: '2-digit',
                                              month: 'short',
                                              year: 'numeric',
                                              hour: '2-digit',
                                              minute: '2-digit',
                                          })
                                        : ''}
                                </td>
                                <td className="border-b px-4 py-2">
                                    {telur.updated_at
                                        ? new Date(telur.updated_at).toLocaleDateString('id-ID', {
                                              day: '2-digit',
                                              month: 'short',
                                              year: 'numeric',
                                              hour: '2-digit',
                                              minute: '2-digit',
                                          })
                                        : ''}
                                </td>
                                <td className="border-b px-4 py-2">
                                    <button
                                        onClick={() => handleShow(telur.id)}
                                        className="rounded-md bg-amber-400 px-3 py-1 font-medium text-gray-900 transition-colors duration-200 hover:bg-amber-500"
                                    >
                                        Detail
                                    </button>
                                    <button
                                        onClick={() => handleDelete(telur.id)}
                                        className="rounded-md bg-red-500 px-3 py-1 font-medium text-white transition-colors duration-200 hover:bg-red-600"
                                    >
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
export default TelurIndex;
