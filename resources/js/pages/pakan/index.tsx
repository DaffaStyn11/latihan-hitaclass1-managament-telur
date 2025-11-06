import { router, usePage } from '@inertiajs/react';
import React from 'react';

interface pakan {
    id: number;
    nama_pakan?: string;
    jumlah_pakan?: number;
    harga_pakan?: number;
    satuan?: string;
    created_at?: string;
    updated_at?: string;
}
interface CustomProps extends Record<string, unknown> {
    pakans: pakan[];
}
const PakanIndex: React.FC = () => {
    const { pakans } = usePage<CustomProps>().props;
    const handleDelete = (id: number) => {
        if (confirm('Yakin ingin menghapus Pakan ini?')) {
            router.delete(`pakan/${id}`, {
                onSuccess: () => alert('Pakan berhasil dihapus'),
                onError: () => alert('Pakan gagal di hapus'),
            });
        }
    };

    const handleShow = (id: number) => {
        router.visit(`/pakan/${id}`);
    };
    return (
        <div className="p-6">
            <h1 className="mb-4 text-2xl font-bold">Daftar Pakan</h1>
            {pakans.length === 0 ? (
                <p>Tidak ada data pakan tersedia.</p>
            ) : (
                <table className="min-w-full border border-gray-200 bg-white">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border-b px-4 py-2">ID</th>
                            <th className="border-b px-4 py-2">Nama Pakan</th>
                            <th className="border-b px-4 py-2">Jumlah Pakan</th>
                            <th className="border-b px-4 py-2">Harga Pakan</th>
                            <th className="border-b px-4 py-2">Stok</th>
                            <th className="border-b px-4 py-2">Dibuat Pada</th>
                            <th className="border-b px-4 py-2">Diupdate Pada</th>
                            <th className="border-b px-4 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {pakans.map((pakan) => (
                            <tr key={pakan.id}>
                                <td className="border-b px-4 py-2">{pakan.id}</td>
                                <td className="border-b px-4 py-2">{pakan.nama_pakan || 'N/A'}</td>
                                <td className="border-b px-4 py-2">{pakan.jumlah_pakan || 'N/A'}</td>
                                <td className="border-b px-4 py-2">{pakan.harga_pakan !== undefined ? pakan.harga_pakan : 'N/A'}</td>
                                <td className="border-b px-4 py-2">{pakan.satuan || 'N/A'}</td>
                                {/* <td className="py-2 px-4 border-b">
                                    {pakan.created_at ? new Date(pakan.created_at).toLocaleDateString() : ''}</td> */}
                                <td className="border-b px-4 py-2">
                                    {pakan.created_at
                                        ? new Date(pakan.created_at).toLocaleDateString('id-ID', {
                                              day: '2-digit',
                                              month: 'short',
                                              year: 'numeric',
                                              hour: '2-digit',
                                              minute: '2-digit',
                                          })
                                        : ''}
                                </td>
                                <td className="border-b px-4 py-2">
                                    {pakan.updated_at
                                        ? new Date(pakan.updated_at).toLocaleDateString('id-ID', {
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
                                        onClick={() => handleShow(pakan.id)}
                                        className="rounded-md bg-amber-400 px-3 py-1 font-medium text-gray-900 transition-colors duration-200 hover:bg-amber-500"
                                    >
                                        Detail
                                    </button>
                                    <button
                                        onClick={() => handleDelete(pakan.id)}
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
export default PakanIndex;
