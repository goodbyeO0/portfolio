import { useState, useEffect } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { ThemeToggle } from "../components/ui/theme-toggle";
import {
    Github,
    ExternalLink,
    Calendar,
    Star,
    Filter,
    ArrowLeft,
    Mail,
    Menu,
    X
} from "lucide-react";
import { Link } from "react-router-dom";

function Project() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = ["All", "Web Development", "Mobile Development", "IoT", "AI", "Blockchain"];

    const projects = [
        {
            id: 1,
            title: "Blocknogotchi",
            description: "Blocknogotchi is a blockchain-based virtual pet game inspired by the classic Tamagotchi. Mint your own unique pet, care for it, and watch it grow!",
            category: ["Web Development", "Blockchain"],
            tech: ["NextJS", "Typescript", "Socket.io", "Blockchain", "Tailwind CSS"],
            image: "/opencampus.png",
            githubUrl: "https://github.com/Atan0707/UMHackathon2025",
            liveUrl: "https://www.blocknogotchi.fun/",
            featured: true,
            completedDate: "2025",
            status: "Completed"
        },
        {
            id: 2,
            title: "BlockCash",
            description: "Revolutionizing Allowances: NFC Tags are the New Piggy Banks.",
            category: ["Mobile Development"],
            tech: ["React native", "Blockchain", "NFC"],
            image: "/ethKL2024.png",
            githubUrl: "https://github.com/goodbyeO0/ethKL-letsgooo",
            liveUrl: "https://devfolio.co/projects/blockcash-08ba",
            featured: true,
            completedDate: "2024",
            status: "Completed"
        },
        {
            id: 3,
            title: "Glass fund",
            description: "Track donation with combination of real-time device and blockchain ensuring transparency",
            category: ["IoT", "AI", "Blockchain"],
            tech: ["Python", "FLowise AI", "Raspberry pi", "Camera module", "NextJS"],
            image: "/varsity.png",
            githubUrl: "https://github.com/Atan0707/varsity-hackathon",
            liveUrl: "https://glassfund.vercel.app/",
            featured: false,
            completedDate: "2024",
            status: "Completed"
        },
        {
            id: 4,
            title: "Zakat token",
            description: "Convert zakat money into token which will then be credited to the recipients ID card",
            category: ["Web Development", "Blockchain"],
            tech: ["NextJS", "Typescript", "NFC", "Blockchain", "Tailwind CSS"],
            image: "/umHacks.png",
            githubUrl: "https://github.com/Atan0707/UMHackathon2025",
            liveUrl: "https://zakatchain.vercel.app/",
            featured: false,
            completedDate: "2025",
            status: "Completed"
        },
        {
            id: 5,
            title: "Medicix",
            description: "Physcial NFTs for powered by IoT to make purchase more transparent and genuine product for supply chain in medical sector.",
            category: ["IoT", "Blockchain"],
            tech: ["ESP32", "RFID module", "Blockchain", "ViteJS", "ExpressJS"],
            image: "/devmatch.png",
            githubUrl: "https://github.com/goodbyeO0/hackathon-devmatch",
            liveUrl: "https://devfolio.co/projects/medicix-1e2d",
            featured: false,
            completedDate: "2024",
            status: "Completed"
        },
        {
            id: 6,
            title: "TraffAI",
            description: "IoT-based red light camera and notifications used to instantly notified user if they break the red lights through emails.",
            category: ["IoT", "Blockchain"],
            tech: ["Raspberry pi", "Camera module", "Blockchain"],
            image: "/ethglobal.png",
            githubUrl: "https://github.com/Atan0707/ethbangkok",
            liveUrl: "https://ethglobal.com/showcase/traffai-oh43a",
            featured: false,
            completedDate: "2024",
            status: "Completed"
        },
        {
            id: 7,
            title: "TeleSpectrom",
            description: "Guarding your chat, Defeating Scams with AI",
            category: ["Web Development", "AI"],
            tech: ["NextJS", "ExpressJS", "TypeScript", "FlowiseAI"],
            image: "/godamlah.png",
            githubUrl: "https://github.com/goodbyeO0/Godamlah",
            liveUrl: "https://devfolio.co/projects/telespectrom-737e",
            featured: true,
            completedDate: "2025",
            status: "Completed"
        },
        {
            id: 8,
            title: "Telespector (Final Year Project)",
            description: "A comprehensive anti-scam platform for Telegram that uses AI to detect and protect users from scam groups through real-time analysis and education.",
            category: ["Web Development", "AI", "Mobile Development"],
            tech: ["React 19", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Groq API", "Telegram API"],
            image: "/telespector.png",
            githubUrl: "https://github.com/goodbyeO0/fyp_real",
            liveUrl: "https://t.me/TeleSpecBot/teleSpector",
            featured: true,
            completedDate: "2025",
            status: "Completed but not maintain"
        },
    ];

    const filteredProjects = projects.filter(project => {
        if (selectedCategory === "All") return true;
        return project.category.includes(selectedCategory);
    });

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                            <Link to="/#hero" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                                Home
                            </Link>
                            <Link to="/#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                                About
                            </Link>
                            <Link to="/#projects" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                                Projects
                            </Link>
                            <a href="mailto:izhanhamdani11@gmail.com">
                                <Button variant="outline" size="sm">
                                    <Mail className="w-4 h-4 mr-2" />
                                    Contact
                                </Button>
                            </a>
                            <ThemeToggle />
                        </div>

                        {/* Mobile Navigation Toggle */}
                        <div className="flex items-center space-x-3 md:hidden">
                            <ThemeToggle />
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2"
                            >
                                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex flex-col space-y-4 pt-4">
                                <Link to="/#hero" className="text-left text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                                    Home
                                </Link>
                                <Link to="/#about" className="text-left text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                                    About
                                </Link>
                                <Link to="/#projects" className="text-left text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
                                    Projects
                                </Link>
                                <a href="mailto:izhanhamdani11@gmail.com">
                                    <Button variant="outline" size="sm" className="justify-start w-fit">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Contact
                                    </Button>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            <div className="pt-24 pb-12">
                {/* Header Section */}
                <section className="px-4 sm:px-6 py-12">
                    <div className="container mx-auto max-w-6xl text-center">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Things I Made While Avoiding Assignments
                        </h1>


                        {/* Category Filter */}
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <Filter className="w-4 h-4 text-gray-500 mr-2" />
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${selectedCategory === category
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured Projects */}
                {selectedCategory === "All" && (
                    <section className="px-4 sm:px-6 py-12">
                        <div className="container mx-auto max-w-6xl">
                            <div className="flex items-center space-x-2 mb-8">
                                <Star className="w-6 h-6 text-yellow-500" />
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                                    Featured Projects
                                </h2>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                {featuredProjects.map((project) => (
                                    <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                                        <div className="relative overflow-hidden rounded-t-lg">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                            <Badge className="absolute top-3 left-3 bg-yellow-500 text-white">
                                                <Star className="w-3 h-3 mr-1" />
                                                Featured
                                            </Badge>
                                        </div>
                                        <CardHeader>
                                            <div className="flex items-start justify-between">
                                                <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-lg">
                                                    {project.title}
                                                </CardTitle>
                                                <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                                                    {project.status}
                                                </Badge>
                                            </div>
                                            <CardDescription className="line-clamp-3 text-sm">
                                                {project.description}
                                            </CardDescription>
                                            <div className="flex items-center space-x-2 text-sm text-gray-500">
                                                <Calendar className="w-4 h-4" />
                                                <span>{project.completedDate}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.map((tech, techIndex) => (
                                                    <Badge key={techIndex} variant="outline" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1">
                                                    <Button variant="outline" size="sm" className="w-full">
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Live Demo
                                                    </Button>
                                                </a>
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                                    <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                                                        <Github className="w-4 h-4" />
                                                    </Button>
                                                </a>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                <Separator className="my-12" />

                {/* All Projects */}
                <section className="px-4 sm:px-6 py-12">
                    <div className="container mx-auto max-w-6xl">
                        <div className="mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                {selectedCategory === "All" ? "All Projects" : selectedCategory}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {filteredProjects.map((project) => (
                                <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                                    <div className="relative overflow-hidden rounded-t-lg">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                        {project.featured && (
                                            <Badge className="absolute top-3 left-3 bg-yellow-500 text-white">
                                                <Star className="w-3 h-3 mr-1" />
                                                Featured
                                            </Badge>
                                        )}
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-start justify-between">
                                            <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-lg">
                                                {project.title}
                                            </CardTitle>
                                            <Badge variant={project.status === "Completed" ? "default" : "secondary"}>
                                                {project.status}
                                            </Badge>
                                        </div>
                                        <CardDescription className="line-clamp-3 text-sm">
                                            {project.description}
                                        </CardDescription>
                                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{project.completedDate}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, techIndex) => (
                                                <Badge key={techIndex} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1">
                                                <Button variant="outline" size="sm" className="w-full">
                                                    <ExternalLink className="w-4 h-4 mr-2" />
                                                    Live Demo
                                                </Button>
                                            </a>
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                                <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                                                    <Github className="w-4 h-4" />
                                                </Button>
                                            </a>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <Filter className="w-16 h-16 mx-auto" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    No projects found
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Try adjusting your filter criteria.
                                </p>
                            </div>
                        )}
                    </div>
                </section>

                {/* Call to Action */}
                <section className="px-4 sm:px-6 py-16 sm:py-24">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Wanna Build Cool Stuff Together?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto">
                            I'm always up for new adventures in tech. If you've got an idea, a project, or just want to nerd out.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <a href="mailto:izhanhamdani11@gmail.com">
                                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                    Get In Touch
                                </Button>
                            </a>
                            <Link to="/">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                    <ArrowLeft className="w-5 h-5 mr-2" />
                                    Back to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Project;