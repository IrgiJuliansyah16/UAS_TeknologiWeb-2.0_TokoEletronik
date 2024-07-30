import React from "react";
import Layout from "../../Layouts/Defautls"; // Corrected path

export default function Index() {
    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4 mb-4 text-center text-primary">Media Sosial</h1>
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-lg border-0 rounded">
                            <div className="card-body p-4">
                                <h5 className="card-title text-primary mb-3">Our Media Social</h5>
                                <h6 className="card-subtitle mb-4 text-secondary">Follow Us</h6>

                                <div className="d-flex align-items-center mb-4">
                                    <img src="/img/instagram.png" alt="Instagram" className="me-3 rounded-circle border" width={"60"} height={"60"} />
                                    <div>
                                        <p className="card-text mb-0">
                                            Instagram: <a href="https://instagram.com/tokoelektronik" className="text-primary fw-bold">@EletronikStore_HII</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center mb-4">
                                    <img src="/img/twitter.png" alt="Twitter" className="me-3 rounded-circle border" width={"60"} height={"60"} />
                                    <div>
                                        <p className="card-text mb-0">
                                            Twitter: <a href="https://twitter.com/tokoelektronik_17" className="text-primary fw-bold">@EletronikStore_HII</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="py-4 bg-dark text-white mt-4">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">
                            &copy; H.I.I 2024
                        </div>
                        <div>
                            <a href="#" className="text-white">Privacy Policy</a>
                            &middot;
                            <a href="#" className="text-white">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                crossOrigin="anonymous"
            ></script>
            <script src="/js/scripts.js"></script>
        </Layout>
    );
}
