import React, { useState } from "react";
import { Check, Star, Eye, EyeOff } from "lucide-react";
import AppleIcon from "../assets/apple-48.png";
import GoogleIcon from "../assets/google.png";
import FacebookIcon from "../assets/facebook.png";
import Header from "./Header";

function Login() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        agree: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        const updatedValue = type === "checkbox" ? checked : value;

        setForm((prev) => ({
            ...prev,
            [name]: updatedValue,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validate = () => {
        const newErrors = {};

        if (!form.firstName.trim()) newErrors.firstName = "First name required";
        if (!form.lastName.trim()) newErrors.lastName = "Last name required";
        if (!form.email.includes("@")) newErrors.email = "Valid email required";
        if (form.password.length < 8)
            newErrors.password = "Minimum 8 characters required";
        if (!form.agree) newErrors.agree = "You must accept terms";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        console.log("Form Submitted:", form);
    };

    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col lg:flex-row ">

                <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
                    <div className="max-w-lg text-white space-y-8">
                        <div className="space-y-6">
                            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                                Expert level Cybersecurity in{" "}
                                <span className="text-[#0CC8A8]">hours</span> not weeks.
                            </h1>

                            <p className="text-sm text-gray-300">What’s included</p>

                            <div className="space-y-3 text-sm sm:text-base">
                                {[
                                    "Effortlessly spider and map targets to uncover hidden security flaws.",
                                    "Deliver high-quality, validated findings in hours, not weeks.",
                                    "Generate professional, enterprise-grade security reports automatically.",
                                ].map((text, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <Check size={16} className="text-[#0CC8A8] mt-1" />
                                        <p>{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="pt-8 space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                <Star size={14} fill="#0CC8A8" className="text-[#0CC8A8]" />
                                <span>Trustpilot</span>
                            </div>
                            <p className="text-sm">
                                Rated 4.5/5.0{" "}
                                <span className="text-gray-400 text-xs">(100k+ reviews)</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center px-4 py-12">
                    <div className="w-full max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-10">

                        <form onSubmit={handleSubmit}>

                            <div className="text-center space-y-2">
                                <h2 className="text-3xl font-semibold text-gray-800">Sign up</h2>
                                <p className="text-sm text-gray-600">
                                    Already have an account?{" "}
                                    <a href="#" className="text-[#0CC8A8] font-medium hover:underline">
                                        Log in
                                    </a>
                                </p>
                            </div>

                            <div className="mt-8 space-y-4">
                                <div>
                                    <input
                                        name="firstName"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="First name*"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#0CC8A8] outline-none"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        name="lastName"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Last name*"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#0CC8A8] outline-none"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="Email address*"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#0CC8A8] outline-none"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>

                                <div className="relative">
                                    <input
                                        name="password"
                                        value={form.password}
                                        onChange={handleChange}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password (8+ characters)*"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-3 pr-10 text-sm focus:ring-2 focus:ring-[#0CC8A8] outline-none"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-start gap-2 mt-5 text-xs text-gray-600">
                                <input
                                    name="agree"
                                    type="checkbox"
                                    checked={form.agree}
                                    onChange={handleChange}
                                    className="mt-1 accent-[#0CC8A8]"
                                />
                                <p>
                                    I agree to Aps’s{" "}
                                    <a href="#" className="text-blue-600 hover:underline">
                                        Terms & Conditions
                                    </a>{" "}
                                    and acknowledge the{" "}
                                    <a href="#" className="text-blue-600 hover:underline">
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>
                            {errors.agree && (
                                <p className="text-red-500 text-xs mt-1">{errors.agree}</p>
                            )}

                            <button
                                type="submit"
                                className="w-full mt-6 bg-[#0CC8A8] hover:bg-[#0bb79a] text-white font-medium rounded-full py-3 transition"
                            >
                                Create account
                            </button>

                            <div className="flex items-center justify-between gap-3 mt-6">
                                <button type="button" className="flex-1 flex items-center justify-center bg-black rounded-full py-2.5">
                                    <img src={AppleIcon} alt="Apple" className="h-5" />
                                </button>

                                <button type="button" className="flex-1 flex items-center justify-center bg-gray-100 rounded-full py-2.5">
                                    <img src={GoogleIcon} alt="Google" className="h-5" />
                                </button>

                                <button type="button" className="flex-1 flex items-center justify-center bg-blue-600 rounded-full py-2.5">
                                    <img src={FacebookIcon} alt="Facebook" className="h-5" />
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;