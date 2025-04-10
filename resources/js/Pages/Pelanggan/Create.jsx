import React, { useState } from "react";
import Layout from "../../Layouts/Defautls";

// import inertia adapter
import { Inertia } from "@inertiajs/inertia";

export default function CreatePelanggan({ errors }) {
    const [nama, setNama] = useState("");
    const [umur, setUmur] = useState("");
    const [alamat, setAlamat] = useState("");
    const [nomor_telepon, setNomorTelepon] = useState("");

    // Function to handle form submission
    const storePelanggan = async (e) => {
        e.preventDefault();

        Inertia.post("/pelanggan", {
            nama: nama,
            umur: umur,
            alamat: alamat,
            nomor_telepon: nomor_telepon,
        });
    };

    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Tambah Barang</h1>
                <div className="card-body">
                    <form onSubmit={storePelanggan}>
                        <div className="mb-3">
                            <label className="form-label">Nama Pelanggan</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nama_pelanggan"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                            <div id="nama_pelanggan" className="form-text">
                                Masukan nama pelanggan
                            </div>
                        </div>

                        {errors.nama && (
                            <div className="alert alert-danger">
                                {errors.nama}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Umur</label>
                            <input
                                type="text"
                                className="form-control"
                                id="umur"
                                value={umur}
                                onChange={(e) => setUmur(e.target.value)}
                            />
                            <div id="umur" className="form-text">
                                Masukan umur pelanggan
                            </div>
                        </div>

                        {errors.umur && (
                            <div className="alert alert-danger">
                                {errors.umur}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Alamat</label>
                            <input
                                type="text"
                                className="form-control"
                                id="alamat"
                                value={alamat}
                                onChange={(e) => setAlamat(e.target.value)}
                            />
                            <div id="alamat" className="form-text">
                                Masukan umur pelanggan
                            </div>
                        </div>

                        {errors.alamat && (
                            <div className="alert alert-danger">
                                {errors.alamat}
                            </div>
                        )}

                        <div className="mb-3">
                            <label className="form-label">Nomor Telepon</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nomor_telepon"
                                value={nomor_telepon}
                                onChange={(e) => setNomorTelepon(e.target.value)}
                            />
                            <div id="nomor_telepon" className="form-text">
                                Masukan nomor telepon pelanggan
                            </div>
                        </div>

                        {errors.nomor_telepon && (
                            <div className="alert alert-danger">
                                {errors.nomor_telpon}
                            </div>
                        )}
                        <div>
                            <button
                                type="submit"
                                className="btn btn-primary me-2"
                            >
                                SAVE
                            </button>
                            <button type="reset" className="btn btn-primary">
                                RESET
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">
                            Copyright &copy; H.I.I 2024
                        </div>
                        <div>
                            <a href="#">Privacy Policy</a>
                            &middot;
                            <a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </Layout>
    );
}
