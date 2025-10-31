<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kandang;
use Inertia\Inertia;


class KandangController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kandangs = kandang::all();
        return Inertia::render('kandang/index', [
            'kandangs' => $kandangs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('kandang/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //validasi forminput
        $validated = $request->validate([
            'nama_kandang' => 'required',
            'jumlah_ayam' => 'nullable',
            'lokasi' => 'required'
        ]);

        //menyiman ke database
        kandang::create($validated);

        return redirect()->route('kandang.index')->with('success', 'data kandang berhasil di simpan');
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
        $kandang = Kandang::findOrFail($id);
        return Inertia::render('kandang/edit', ['kandang' => $kandang]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'nama_kandang' => 'required',
            'jumlah_ayam' => 'nullable',
            'lokasi' => 'required',
        ]);

        $kandang = Kandang::findOrFail($id);
        $kandang->update($validated);
        return redirect()->route('kandang.index')->with('success','data berhasil di update');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
