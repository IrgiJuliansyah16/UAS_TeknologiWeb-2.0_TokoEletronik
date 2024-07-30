import React from "react";
import Layout from "../../Layouts/Defautls";
import { ListGroup, Card, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4 mb-4 text-center">About Us</h1>

                <Accordion defaultActiveKey="0" className="bg-primary text-white mb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>PC</Accordion.Header>
                        <Accordion.Body>
                            <div className="d-flex align-items-center mb-3">
                                <i className="fas fa-desktop fa-2x me-3"></i>
                                <div>
                                    <h5>PC</h5>
                                    <p>Kami menyediakan berbagai macam PC dengan spesifikasi tinggi yang cocok untuk gaming dan pekerjaan berat lainnya.</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>HP</Accordion.Header>
                        <Accordion.Body>
                            <div className="d-flex align-items-center mb-3">
                                <i className="fas fa-mobile-alt fa-2x me-3"></i>
                                <div>
                                    <h5>HP</h5>
                                    <p>Berbagai pilihan HP dari merek-merek terkenal dengan fitur terbaru dan harga terjangkau.</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Laptop</Accordion.Header>
                        <Accordion.Body>
                            <div className="d-flex align-items-center mb-3">
                                <i className="fas fa-laptop fa-2x me-3"></i>
                                <div>
                                    <h5>Laptop</h5>
                                    <p>Laptop dengan performa tinggi untuk kebutuhan sehari-hari, bekerja, dan belajar.</p>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Card className="mb-4">
                    <Card.Img variant="top" src="/img/bg.jpg" />
                    <Card.Body>
                        <Card.Title>Our Vision & Mission</Card.Title>
                        <Card.Text>
                            Kami berkomitmen untuk menyediakan produk elektronik berkualitas tinggi dengan harga yang terjangkau. Misi kami adalah untuk menjadi toko elektronik terkemuka yang dipercaya oleh pelanggan kami.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Accordion defaultActiveKey="0" className="mb-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Visi Kami</Accordion.Header>
                        <Accordion.Body>
                            Menjadi toko elektronik terpercaya dengan pelayanan terbaik dan produk berkualitas tinggi.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Misi Kami</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li>Menyediakan produk elektronik berkualitas.</li>
                                <li>Memberikan pelayanan yang memuaskan kepada pelanggan.</li>
                                <li>Menjaga kepercayaan dan kepuasan pelanggan.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Our Values</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                <li><strong>Integrity:</strong> Kami selalu berkomitmen untuk menjalankan bisnis dengan integritas dan kejujuran.</li>
                                <li><strong>Customer Focus:</strong> Kami selalu menempatkan kepuasan pelanggan sebagai prioritas utama.</li>
                                <li><strong>Innovation:</strong> Kami terus mencari cara-cara baru untuk meningkatkan produk dan layanan kami.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            <footer className="py-4 bg-light mt-4">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">
                            Copyright &copy; H.I.I 2024
                        </div>
                        <div>
                            <a href="#" className="text-primary">Privacy Policy</a>
                            &middot;
                            <a href="#" className="text-primary">Terms & Conditions</a>
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
