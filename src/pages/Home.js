import React from 'react'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'
import cake from '../images/cake.webp'
import '../style/HomeStyles.css'
const Home = () => {
    return (
        <Layout>
            <div className="home" style={{ backgroundImage: `url(${cake})` }}>
                <div className="headerContainer">
                    <h1>Food website</h1>
                    <p>Best Food In India</p>
                    <Link to="/menu">
                        <button>Order Now</button>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default Home
