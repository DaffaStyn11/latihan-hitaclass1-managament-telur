<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Penjualan;

class PenjualanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Penjualans = penjualan::all();
        return Inertia::render('penjualan/index',[
            'penjualans' => $Penjualans
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('penjualan/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'jumlah_telur' => 'required|numeric|min:1',
            'harga_satuan' => 'required|numeric|min:0',
        ]);

        //  Hitung total harga otomatis
        $validated['total_harga'] = $validated['jumlah_telur'] * $validated['harga_satuan'];

        // Simpan ke database
        penjualan::create($validated);

        // Redirect ke halaman daftar penjualan dengan pesan sukses
        return redirect()->route('penjualan.index')->with('success', 'Data penjualan berhasil disimpan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $penjualan = Penjualan::findOrFail($id);
        return Inertia::render('penjualan/edit',['penjualan' => $penjualan]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
$validated = $request->validate([
        'jumlah_telur' => 'required|numeric|min:1',
        'harga_satuan' => 'required|numeric|min:0',
    ]);

    // Hitung total harga otomatis
    $validated['total_harga'] = $validated['jumlah_telur'] * $validated['harga_satuan'];

    $penjualan = Penjualan::findOrFail($id);
    $penjualan->update($validated);

    return redirect()->route('penjualan.index')->with('success', 'Data penjualan berhasil diupdate.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
