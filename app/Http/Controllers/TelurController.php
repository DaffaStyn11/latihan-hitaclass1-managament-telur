<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\telur;
class TelurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Telurs = telur::all();
        return Inertia::render('telur/index',[
            'telurs' => $Telurs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('telur/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
        'jumlah_telur' => 'required',
        'harga_telur' => 'required',
        ]);

        telur::create($validated);
        return redirect()->route('telur.index')->with('success','data berhasil di simpan');
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
