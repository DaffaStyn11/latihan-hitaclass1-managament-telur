import React from "react";
import {usePage} from "@inertiajs/react";



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
    const {kandangs} = usePage<CustomProps>().props;

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Daftar Kandang</h1>
            {kandangs.length === 0 ? (
                <p>Tidak ada data kandang tersedia.</p>
            ) : ( <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">Nama Kandang</th>
                            <th className="py-2 px-4 border-b">Jumlah Ayam</th>
                            <th className="py-2 px-4 border-b">Lokasi</th>
                            <th className="py-2 px-4 border-b">Dibuat Pada</th>
                            <th className="py-2 px-4 border-b">Diupdate Pada</th>
                                          </tr>
                                          </thead>
                                          <tbody className="text-center">
                                            {kandangs.map((kandang) => (
                                                <tr key={kandang.id}>
                                                    <td className="py-2 px-4 border-b">{kandang.id}</td>
                                                    <td className="py-2 px-4 border-b">{kandang.nama_kandang}</td>
                                                    <td className="py-2 px-4 border-b">{kandang.jumlah_ayam}</td>
                                                    <td className="py-2 px-4 border-b">{kandang.lokasi}</td>
                                                    <td className="py-2 px-4 border-b">
                                                        {kandang.created_at ? new Date(kandang.created_at).toLocaleDateString() : ''}

                                                    </td>
                                                    <td className="py-2 px-4 border-b">
                                                        {kandang.updated_at ? new Date(kandang.updated_at).toLocaleDateString("id-ID", {
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
}

export default KandangIndex;
