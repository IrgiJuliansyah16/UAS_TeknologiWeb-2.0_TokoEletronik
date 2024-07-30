import React from "react";
import Layout from "../../Layouts/Defautls";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Index() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
        ],
    };

    return (
        <Layout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Electronics Store Dashboard</h1>
                <div className="row">
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-primary text-white mb-4">
                            <div className="card-body">
                                <i className="fas fa-tv fa-2x"></i>
                                <h5>TVs</h5>
                                <p>150 Units Sold</p>
                            </div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View Details</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-warning text-white mb-4">
                            <div className="card-body">
                                <i className="fas fa-laptop fa-2x"></i>
                                <h5>Laptops</h5>
                                <p>120 Units Sold</p>
                            </div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View Details</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-success text-white mb-4">
                            <div className="card-body">
                                <i className="fas fa-mobile-alt fa-2x"></i>
                                <h5>Mobile Phones</h5>
                                <p>300 Units Sold</p>
                            </div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View Details</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6">
                        <div className="card bg-danger text-white mb-4">
                            <div className="card-body">
                                <i className="fas fa-headphones fa-2x"></i>
                                <h5>Accessories</h5>
                                <p>500 Units Sold</p>
                            </div>
                            <div className="card-footer d-flex align-items-center justify-content-between">
                                <a className="small text-white stretched-link" href="#">View Details</a>
                                <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-chart-bar me-1"></i>
                        Sales Bar Chart
                    </div>
                    <div className="card-body">
                        <Bar data={data} />
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-table me-1"></i>
                        Latest Transactions
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Samsung TV</td>
                                    <td>John Doe</td>
                                    <td>2024/07/01</td>
                                    <td>2</td>
                                    <td>$1000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Dell Laptop</td>
                                    <td>Jane Smith</td>
                                    <td>2024/07/02</td>
                                    <td>1</td>
                                    <td>$700</td>
                                </tr>
                                {/* Tambahkan baris data lainnya di sini */}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card mb-4">
                    <div className="card-header">
                        <i className="fas fa-images me-1"></i>
                        Product Images
                    </div>
                    <div className="card-body">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/laptop.jpg"
                                    alt="First product"
                                />
                                <Carousel.Caption>
                                    <h5>First product</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/hp.jpg"
                                    alt="Second product"
                                />
                                <Carousel.Caption>
                                    <h5>Second product</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/img/komputer.jpg"
                                    alt="Third product"
                                />
                                <Carousel.Caption>
                                    <h5>Third product</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
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
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                crossOrigin="anonymous"
            ></script>
            <script src="js/scripts.js"></script>
        </Layout>
    );
}
