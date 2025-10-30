import React from "react";
import { usePage } from "@inertiajs/react";
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
                            <th className="py-2 px-4 border-b">Harga Satuanr</th>
                            <th className="py-2 px-4 border-b">Total Harga</th>
                            <th className="py-2 px-4 border-b">Dibuat Pada</th>
                            <th className="py-2 px-4 border-b">Diupdate Pada</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {penjualans.map((penjualan) => (
                            <tr key={penjualan.id}>
                                <td className="py-2 px-4 border-b">{penjualan.id}</td>
                                <td className="py-2 px-4 border-b">{penjualan.jumlah_telur || 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{penjualan.harga_satuan !== undefined ? penjualan.harga_satuan : 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{penjualan.total_harga !== undefined ? penjualan.total_harga : 'N/A'}</td>
                                <td className="py-2 px-4 border-b">
                                    {penjualan.created_at ? new Date(penjualan.created_at).toLocaleDateString() : ''}</td>
                                <td className="py-2 px-4 border-b">
                                    {penjualan.updated_at ? new Date(penjualan.updated_at).toLocaleDateString("id-ID", {
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
    )
};
export default PenjualanIndex;
