import { usePage } from "@inertiajs/react";

interface Penjualan {
  id: number;
  jumlah_telur?: number;
  harga_satuan?: number;
  total_harga?: number;
  created_at?: string;
  updated_at?: string;
}

interface CustomProps extends Record<string, unknown> {
  penjualan: Penjualan;
}

const PenjualanShow: React.FC = () => {
  const { penjualan } = usePage<CustomProps>().props;

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Detail Penjualan</h1>

      <div className="rounded-lg bg-white p-4 shadow-md">
        <p>
          <strong>ID:</strong> {penjualan.id}
        </p>
        <p>
          <strong>Jumlah Telur:</strong> {penjualan.jumlah_telur}
        </p>
        <p>
          <strong>Harga Satuan:</strong> {penjualan.harga_satuan}
        </p>
        <p>
          <strong>Total Harga:</strong> {penjualan.total_harga}
        </p>
      </div>
    </div>
  );
};

export default PenjualanShow;
