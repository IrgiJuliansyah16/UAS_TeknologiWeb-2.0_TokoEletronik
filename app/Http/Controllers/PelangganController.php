<?php

namespace App\Http\Controllers;

use App\Models\Pelanggan;
use Illuminate\Http\Request;

class PelangganController extends Controller
{
    public function index()
    {
        $pelanggan = Pelanggan::latest()->get();
        return inertia('Pelanggan/indexcustomer', ['pelanggan' => $pelanggan]);
    }

    public function create()
    {
        return inertia('Pelanggan/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama' => 'required',
            'umur' => 'required',
            'alamat' => 'required',
            'nomor_telepon' => 'required'
        ]);

        Pelanggan::create([
            'nama' => $request->input('nama'),
            'umur' => $request->input('umur'),
            'alamat' => $request->input('alamat'),
            'nomor_telepon' => $request->input('nomor_telepon'),
        ]);

        return redirect()->route('pelanggan.indexcustomer')->with('success', 'Data pelanggan berhasil di tambah!');
    }

    public function edit(Pelanggan $pelanggan)
    {
        return inertia('Pelanggan/Edit', ['pelanggan' => $pelanggan]);
    }

    public function update(Request $request, Pelanggan $pelanggan)
    {
        $request->validate([
            'nama' => 'required',
            'umur' => 'required',
            'alamat' => 'required',
            'nomor_telepon' => 'required'
        ]);

        $pelanggan->update([
            'nama' => $request->input('nama'),
            'umur' => $request->input('umur'),
            'alamat' => $request->input('alamat'),
            'nomor_telepon' => $request->input('nomor_telepon'),
        ]);

        return redirect()->route('pelanggan.indexcustomer')->with('success', 'Data pelanggan berhasil di update!');
    }

    public function destroy(Pelanggan $pelanggan)
    {
        $pelanggan->delete();
        return redirect()->route('pelanggan.indexcustomer')->with('success', 'Data pelanggan berhasil di hapus!');
    }
}
