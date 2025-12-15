import { useState } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { ThemeToggle } from "../components/ui/theme-toggle";
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Download,
    ExternalLink,
    Code2,
    Rocket,
    ChevronDown,
    MapPin,
    Calendar,
    Menu,
    X,
    Database,
    Layers,
    Cpu,
    Search,
    Trophy,
    Crown,
    Bot
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const projects = [
        {
            title: "Blocknogotchi",
            description: "Blocknogotchi is a blockchain-based virtual pet game inspired by the classic Tamagotchi. Mint your own unique pet, care for it, and watch it grow!",
            tech: ["NextJS", "Typescript", "Socket.io", "Blockchain", "Tailwind CSS"],
            image: "/opencampus.png",
            link: "https://www.blocknogotchi.fun/",
            github: "https://github.com/Atan0707/UMHackathon2025"
        },
        {
            title: "BlockCash",
            description: "Revolutionizing Allowances: NFC Tags are the New Piggy Banks.",
            tech: ["React Native", "Blockchain", "NFC"],
            image: "/ethKL2024.png",
            link: "https://devfolio.co/projects/blockcash-08ba",
            github: "https://github.com/goodbyeO0/ethKL-letsgooo"
        },
        {
            title: "Zakat Token",
            description: "Convert zakat money into token which will then be credited to the recipients ID card",
            tech: ["NextJS", "Typescript", "NFC", "Blockchain", "Tailwind CSS"],
            image: "/umHacks.png",
            link: "https://zakatchain.vercel.app/",
            github: "https://github.com/Atan0707/UMHackathon2025"
        }
    ];

    const skills = [
        {
            name: "Programming Languages",
            icon: Code2,
            items: ["JavaScript", "TypeScript", "Golang", "PHP", "Java", "C++", "Python", "Rust", "Solidity", "Dart"]
        },
        {
            name: "Frameworks and Technologies",
            icon: Layers,
            items: ["NextJS", "ViteJS", "React Native", "Flutter", "Fiber", "Express", "FastAPI", "Laravel", "Hardhat", "Flowise AI", "Prisma ORM"]
        },
        {
            name: "Databases",
            icon: Database,
            items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase", "AWS", "Blockchain"]
        },
        {
            name: "Hardware",
            icon: Cpu,
            items: ["Raspberry Pi", "ESP32", "Arduino"]
        },
        {
            name: "Tools",
            icon: Rocket,
            items: ["Git", "GitHub", "Postman", "Docker", "Cisco Packet Tracer", "VMware", "VSCode", "CursorAI", "Remix IDE", "Solana Playground", "Android Studio"]
        },
        {
            name: "AI & Automation",
            icon: Bot,
            items: ["LangChain", "AutoGPT", "Flowise AI", "Prompt Engineering", "RAG", "Fine-tuning", "TensorFlow", "PyTorch", "Hugging Face", "LangChain", "Pandas", "NumPy", "Jupyter", ]
        }
    ];

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
    };

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
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                            >
                                About
                            </button>
                            <button
                                onClick={() => scrollToSection('projects')}
                                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                            >
                                Projects
                            </button>
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
                                <button
                                    onClick={() => scrollToSection('hero')}
                                    className="text-left text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors py-2"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => scrollToSection('about')}
                                    className="text-left text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors py-2"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="text-left text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors py-2"
                                >
                                    Projects
                                </button>
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

            {/* Hero Section */}
            <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="mb-4">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    Available for work
                                </Badge>
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                                    Hi, I'm{" "}
                                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                        Izhan
                                    </span>
                                </h1>
                                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light">
                                    Full-Stack Developer
                                </h2>
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                    Need a Web2 app? Done. Web3 smart contract? Easy. IoT device talking to the cloud? Built it yesterday. A robot that moves when you buy an NFT? On it.
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                    I'm like nasi kandar —  a little bit of everything, somehow still delicious.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                                <a href="/resume_real.pdf" download="Izhan_Resume.pdf">
                                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                        <Download className="w-4 h-4 mr-2" />
                                        Download Resume
                                    </Button>
                                </a>
                                <Button variant="outline" size="lg" onClick={() => scrollToSection('projects')} className="w-full sm:w-auto">
                                    View Projects
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </Button>
                            </div>

                            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
                                <a href="https://github.com/goodbyeO0" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/in/muhammad-izhan-zikry-mohd-hamdani-479a1027a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="https://x.com/izhann_nn" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a href="mailto:izhanhamdani11@gmail.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center lg:justify-end order-first lg:order-last">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
                                <Avatar className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border-4 border-white dark:border-gray-800 shadow-2xl relative z-10">
                                    <AvatarImage
                                        src="/gambarCool.jpg"
                                        alt="Profile"
                                        className="object-cover w-full h-full"
                                        style={{
                                            objectFit: 'cover',
                                            aspectRatio: '1/1'
                                        }}
                                    />
                                    <AvatarFallback className="text-4xl sm:text-5xl lg:text-6xl">A</AvatarFallback>
                                </Avatar>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mt-8 lg:mt-12 animate-bounce">
                        <button onClick={() => scrollToSection('about')}>
                            <ChevronDown className="w-8 h-8 text-gray-400" />
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 lg:mb-16">
                        <Badge variant="secondary" className="mb-4">
                            <MapPin className="w-3 h-3 mr-1" />
                            About Me
                        </Badge>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Web3 Nerd, IoT Tinkerer,
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block sm:inline">
                                {" "}Hackathon Warrior
                            </span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            From Kuala Lumpur <span className="text-sm">🇲🇾</span> — Building the future, one smart contract and IoT device at a time
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Story Cards */}
                        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Search className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg">The Explorer</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        A Computer Science grad who can't sit still when there's new tech to explore. From building websites to breaking into blockchain — I'm all about chasing the next big thing.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Trophy className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg">The Competitor</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        I've joined a bunch of hackathons, and let's just say... I don't always compete, but when I do, I bring home trophies and bragging rights.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                                <CardHeader className="text-center pb-4">
                                    <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                        <Crown className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-lg">The Leader</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        Former President of UiTM Blockchain Association. During my reign, I organized events, led nerdy revolutions, and probably broke some sleep records.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Skills Section */}
                        <div className="space-y-8">
                            <div className="text-center">
                                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                    Technical Arsenal
                                </h3>
                                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                    The tools and technologies I wield to bring ideas to life
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {skills.map((skill, index) => (
                                    <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-blue-200 dark:hover:border-blue-800 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                                        <CardHeader className="pb-4">
                                            <div className="flex items-center space-x-3 mb-4">
                                                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform">
                                                    <skill.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                    {skill.name}
                                                </CardTitle>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {skill.items.map((item, itemIndex) => (
                                                    <Badge
                                                        key={itemIndex}
                                                        variant="secondary"
                                                        className="text-xs hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-default"
                                                    >
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-12 lg:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Projects
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                            Things I Made While Avoiding Assignments
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {projects.map((project, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200 dark:hover:border-blue-800">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                </div>
                                <CardHeader>
                                    <CardTitle className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-lg sm:text-xl">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-3 text-sm sm:text-base">
                                        {project.description}
                                    </CardDescription>
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
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full sm:flex-1">
                                            <Button variant="outline" size="sm" className="w-full">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Demo
                                            </Button>
                                        </a>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                            <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                                                <Github className="w-4 h-4" />
                                            </Button>
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-8 lg:mt-12">
                        <Link to="/project">
                            <Button variant="outline" size="lg">
                                View All Projects
                                <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
                <div className="container mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Wanna Build Cool Stuff Together?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 lg:mb-12 max-w-2xl mx-auto">
                        I'm always up for new adventures in tech. If you've got an idea, a project, or just want to nerd out.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <a href="mailto:izhanhamdani11@gmail.com">
                            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                <Mail className="w-5 h-5 mr-2" />
                                Get In Touch
                            </Button>
                        </a>
                        <a href="/resume.pdf" download="Izhan_Resume.pdf">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                <Download className="w-5 h-5 mr-2" />
                                Download Resume
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;