import React from "react";
import { usePage } from "@inertiajs/react";


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
    const {telurs} = usePage<CustomProps>().props;
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Daftar Telur</h1>
            {telurs.length === 0 ? (
                <p>Tidak ada data telur tersedia.</p>
            ) : ( <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Jumlah Telur</th>
                            <th className="py-2 px-4 border-b">Harga Telur</th>
                            <th className="py-2 px-4 border-b">Dibuat Pada</th>
                            <th className="py-2 px-4 border-b">Diupdate Pada</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {telurs.map((telur) => (
                            <tr key={telur.id}>
                                <td className="py-2 px-4 border-b">{telur.id}</td>
                                <td className="py-2 px-4 border-b">{telur.jumlah_telur || 'N/A'}</td>
                                <td className="py-2 px-4 border-b">{telur.harga_telur !== undefined ? telur.harga_telur : 'N/A'}</td>
                                <td className="py-2 px-4 border-b">
                                    {telur.created_at ? new Date(telur.created_at).toLocaleDateString() : ''}</td>
                                <td className="py-2 px-4 border-b">
                                    {telur.updated_at ? new Date(telur.updated_at).toLocaleDateString("id-ID", {
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
export default TelurIndex;