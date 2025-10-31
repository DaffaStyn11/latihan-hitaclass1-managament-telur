<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Pakan;

class PakanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Pakans = pakan::all();

        return Inertia::render('pakan/index', [
            'pakans' => $Pakans
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('pakan/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_pakan' => 'required',
            'jumlah_pakan' => 'nullable',
            'harga_pakan' => 'nullable',
            'satuan' => 'required',
        ]);

        pakan::create($validated);
        return redirect()->route('pakan.index')->with('success', 'data berhasil di simpan');
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
        $pakan = Pakan::findOrFail($id);
        return Inertia::render('pakan/edit', ['pakan' => $pakan]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
         $validated = $request->validate([
            'nama_pakan' => 'required',
            'jumlah_pakan' => 'nullable',
            'harga_pakan' => 'nullable',
            'satuan' => 'required',
        ]);

        $pakan = Pakan::findOrFail($id);
        $pakan->update($validated);
        return redirect()->route('pakan.index')->with('success','data berhasil di update');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
