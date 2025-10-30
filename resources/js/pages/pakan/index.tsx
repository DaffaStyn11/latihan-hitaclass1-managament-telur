import React from "react";
import {usePage} from "@inertiajs/react";

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
    const {pakans} = usePage<CustomProps>().props;
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Daftar Pakan</h1>
            {pakans.length === 0 ? (
                <p>Tidak ada data pakan tersedia.</p>
            ) : ( <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Nama Pakan</th>
                            <th className="py-2 px-4 border-b">Jumlah Pakan</th>
                            <th className="py-2 px-4 border-b">Harga Pakan</th>
                            <th className="py-2 px-4 border-b">Stok</th>
                            <th className="py-2 px-4 border-b">Dibuat Pada</th>
                            <th className="py-2 px-4 border-b">Diupdate Pada</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {pakans.map((pakan) => (
                            <tr key={pakan.id}>
                                <td className="py-2 px-4 border-b">{pakan.id}</td>
                                <td className="py-2 px-4 border-b">{pakan.nama_pakan || 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{pakan.jumlah_pakan || 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{pakan.harga_pakan !== undefined ? pakan.harga_pakan : 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{pakan.satuan || 'N/A'}</td>
                                <td className="py-2 px-4 border-b">
                                    {pakan.created_at ? new Date(pakan.created_at).toLocaleDateString() : ''}</td>
                                <td className="py-2 px-4 border-b">
                                    {pakan.updated_at ? new Date(pakan.updated_at).toLocaleDateString("id-ID", {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric",
                                                            hour: "2-digit",
                                                            minute: "2-digit",
                                                        }) : ''}
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