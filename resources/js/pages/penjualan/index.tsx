import React from "react";
import { router, usePage } from '@inertiajs/react';

interface penjualan {
    id: number;
    jumlah_telur?: number;
    harga_satuan?: number;
    total_harga?: number;
    created_at?: string;
    updated_at?: string;
}
interface CustomProps extends Record<string, unknown>{
    penjualans: penjualan[];
}
const PenjualanIndex: React.FC = () =>{
    const {penjualans} = usePage<CustomProps>().props;

        const handleDelete = (id: number) => {
            if (confirm('Yakin ingin menghapus penjualan ini?')) {
                router.delete(`penjualan/${id}`, {
                    onSuccess: () => alert('penjualan berhasil dihapus'),
                    onError: () => alert('penjualan gagal di hapus'),
                });
            }
        };

        const handleShow = (id: number) => {
            router.visit(`/penjualan/${id}`);
        };

    return(
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Daftar Penjualan</h1>
            {penjualans.length === 0 ? (
                <p>Tidak ada data telur tersedia.</p>
            ) : ( <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Jumlah Telur</th>
                            <th className="py-2 px-4 border-b">Harga Satuan</th>
                            <th className="py-2 px-4 border-b">Total Harga</th>
                            <th className="py-2 px-4 border-b">Dibuat Pada</th>
                            <th className="py-2 px-4 border-b">Diupdate Pada</th>
                            <th className="py-2 px-4 border-b">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {penjualans.map((penjualan) => (
                            <tr key={penjualan.id}>
                                <td className="py-2 px-4 border-b">{penjualan.id}</td>
                                <td className="py-2 px-4 border-b">{penjualan.jumlah_telur || 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{penjualan.harga_satuan !== undefined ? penjualan.harga_satuan : 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{penjualan.total_harga !== undefined ? penjualan.total_harga : 'N/A'}</td>
                                {/* <td className="py-2 px-4 border-b">
                                    {pakan.created_at ? new Date(pakan.created_at).toLocaleDateString() : ''}</td> */}
                                 <td className="py-2 px-4 border-b">
                                    {penjualan.created_at ? new Date(penjualan.created_at).toLocaleDateString("id-ID", {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric",
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                        }) : ''}
                                </td>
                                <td className="py-2 px-4 border-b">
                                    {penjualan.updated_at
                                    ? new Date(penjualan.updated_at).toLocaleDateString("id-ID", {
                                          day: "2-digit",
                                          month: "short",
                                          year: "numeric",
                                          hour: "2-digit",
                                          minute: "2-digit",
                                        })
                                        : ''}
                                </td>

                                <td className="border-b px-4 py-2">
                                    <button onClick={() => handleShow(penjualan.id)} className="rounded-md bg-amber-400 px-3 py-1 font-medium text-gray-900 transition-colors duration-200 hover:bg-amber-500">
                                        Detail
                                    </button>
                                    <button onClick={() => handleDelete(penjualan.id)} className="px-3 py-1 rounded-md bg-red-500 text-white font-medium hover:bg-red-600 transition-colors duration-200">
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
};
export default PenjualanIndex;
