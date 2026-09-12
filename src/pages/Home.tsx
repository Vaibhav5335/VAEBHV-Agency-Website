import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { Services } from '../sections/Services';
import { Work } from '../sections/Work';
import { Process } from '../sections/Process';
import { ContactCTA } from '../sections/ContactCTA';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                width: '100%',
            }}
        >
            {/* Top Sticky Navigation */}
            <Navbar />

            {/* Main Content Landmark */}
            <main id="main-content" style={{ flex: 1, width: '100%' }}>
                {/* 1. Hero with Strategy Board Visual */}
                <Hero />

                {/* 2. Services Grid */}
                <Services />

                {/* 3. Selected Work */}
                <Work />

                {/* 4. Process */}
                <Process />

                {/* 5. Final CTA */}
                <ContactCTA />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};
