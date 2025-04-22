import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './components/Button.js';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/Card.js';
import { ArrowRight, Building2, Home, Info, Mail, Phone, Wrench } from 'lucide-react';

// ===============================
// Data (Replace with your actual data)
// ===============================

const projects = [
    {
        id: '1',
        title: 'Modern Residence',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Modern+Residence&font=Montserrat',
        description: 'A stunning modern residence with clean lines and open spaces.',
        details: 'This project features...',
    },
    {
        id: '2',
        title: 'Commercial Building',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Commercial+Building&font=Montserrat',
        description: 'A state-of-the-art commercial building designed for efficiency and style.',
        details: 'This building includes...',
    },
    {
        id: '3',
        title: 'Luxury Villa',
        imageUrl: 'https://placehold.co/600x400/EEE/31343C?text=Luxury+Villa&font=Montserrat',
        description: 'A luxurious villa with high-end finishes and breathtaking views.',
        details: 'The villa has...',
    },
];

const services = [
    { title: 'Architectural Design', description: 'Creating innovative and functional designs.', icon: <Building2 className="w-6 h-6 text-blue-500" /> },
    { title: 'Interior Design', description: 'Crafting beautiful and comfortable interior spaces.', icon: <Home className="w-6 h-6 text-blue-500" /> },
    { title: 'Construction Management', description: 'Overseeing projects from start to finish.', icon: <Wrench className="w-6 h-6 text-blue-500" /> },
];

const contactInfo = {
    phone: '+123 456 7890',
    email: 'info@example.com',
    address: '123 Main St, Anytown, USA',
};

// ===============================
// Animation Variants
// ===============================

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

const serviceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
};

// ===============================
// Components
// ===============================

const ProjectCard = ({ project, onClick }) => (
    <motion.div variants={cardVariants}>
        <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div
                className="relative w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>
            <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant="outline" onClick={onClick} className="w-full">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardContent>
        </Card>
    </motion.div>
);

const ServiceCard = ({ service }) => (
    <motion.div variants={serviceVariants}>
        <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center">
            <CardHeader>
                <div className="flex items-center justify-center mb-4">
                    {service.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
            </CardContent>
        </Card>
    </motion.div>
);

const ProjectDetailsModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="bg-white rounded-lg w-full max-w-2xl p-6 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h2>
                <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full rounded-lg mb-4"
                />
                <p className="text-gray-700 mb-4">{project.description}</p>
                <p className="text-gray-700">{project.details}</p>
                <Button variant="outline" onClick={onClose} className="mt-6">
                    Close
                </Button>
            </motion.div>
        </div>
    );
};

// ===============================
// Main Component
// ===============================

const PortfolioWebsite = () => {
    const [selectedProject, setSelectedProject] = React.useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <header className="bg-gradient-to-br from-gray-900 to-black text-white py-20 md:py-32">
                <div className="container mx-auto text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        Abhishek Jain
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.3 }}
                        className="text-lg md:text-xl mb-8"
                    >
                        Architecture & Building Portfolio
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.6 }}
                    >
                        <Button
                            variant="outline"
                            className="bg-white text-gray-900 border-white hover:bg-gray-900 hover:text-white
                            px-6 py-3 rounded-full transition-colors duration-300 font-semibold text-base"
                        >
                            Explore Projects
                        </Button>
                    </motion.div>
                </div>
            </header>

            {/* Projects Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => handleProjectClick(project)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">About Us</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Abhishek Jain is a leading architecture and building firm dedicated to creating
                            innovative and sustainable spaces.  With years of experience, we combine artistic vision
                            with technical expertise to deliver exceptional results.  We are passionate about transforming
                            ideas into reality and exceeding our clients&apos; expectations.
                        </p>
                        <Button variant="outline" className="mt-6">
                            Learn More <Info className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://placehold.co/600x400/EEE/31343C?text=About+Us&font=Montserrat"
                            alt="About Us"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
                    <div className="flex flex-col md:flex-row justify-center gap-8">
                        <div className="text-gray-700">
                            <div className="flex items-center mb-4">
                                <Phone className="mr-2 h-5 w-5 text-blue-500" />
                                <span>Phone: {contactInfo.phone}</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <Mail className="mr-2 h-5 w-5 text-blue-500" />
                                <span>Email: {contactInfo.email}</span>
                            </div>
                            <div className="flex items-center">
                                <Home className="mr-2 h-5 w-5 text-blue-500" />
                                <span>Address: {contactInfo.address}</span>
                            </div>
                        </div>
                        {/* Contact Form (Simplified -  Add a form library like Formik for real forms) */}
                        <div className="w-full md:w-1/2">
                            <Card className="border-0 shadow-lg">
                                <CardHeader>
                                    <CardTitle>Get in Touch</CardTitle>
                                    <CardDescription>Send us a message, and we&apos;ll get back to you.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <textarea
                                            placeholder="Your Message"
                                            rows={4}
                                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                        <Button className="w-full">Send Message</Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details Modal */}
            <ProjectDetailsModal project={selectedProject} onClose={handleCloseModal} />

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6">
                <div className="container mx-auto text-center px-4">
                    &copy; {new Date().getFullYear()} Abhishek Jain. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default PortfolioWebsite;