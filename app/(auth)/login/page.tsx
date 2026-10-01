"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";
import facebookIcon from "@/public/facebook.png";
import googleIcon from "@/public/google.png";

interface LoginInput {
    email: string;
    password: string;
}

export default function LoginPage() {
    const router = useRouter();
    const { data: session, isPending: isSessionLoading } = authClient.useSession();
    const [isSocialLoading, setIsSocialLoading] = useState(false);

    // Redirect signed-in users away from the login page
    useEffect(() => {
        if (!isSessionLoading && session) {
            router.replace("/courses");
        }
    }, [session, isSessionLoading, router]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginInput>();

    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        await authClient.signIn.email(
            {
                email: data.email,
                password: data.password,
            },
            {
                onSuccess: () => {
                    toast.success("Signed in successfully! Redirecting...");
                    router.push("/");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message || "Invalid email or password.");
                },
            }
        );
    };

    const handleGoogleSignIn = async () => {
        setIsSocialLoading(true);
        try {
            await authClient.signIn.social({
                provider: "google",
                callbackURL: "/",
            });
        } catch (error) {
            toast.error("Failed to connect with Google.");
            setIsSocialLoading(false);
        }
    };

    const handleFacebookClick = () => {
        toast.info("Facebook login is currently not available.");
    };

    // Prevent screen flicker while checking session state
    if (isSessionLoading || session) {
        return null;
    }

    return (
        <div className="w-full max-w-120 rounded-4xl bg-white p-8 sm:p-12 shadow-2xl border border-white/20">
            {/* Header */}
            <div>
                <span className="text-xs font-semibold text-[#003BE2] tracking-wide font-['Satoshi',sans-serif]">
                    Sign In
                </span>
                <h2 className="title-main">Welcome Back</h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 flex flex-col gap-5">
                {/* Email */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-[#4B5563] font-['Satoshi',sans-serif]">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="designer@example.com"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        className={`w-full rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3.5 text-sm text-[#111827] placeholder-[#9CA3AF] focus:border-[#003BE2] focus:bg-white focus:outline-none transition-all font-['Satoshi',sans-serif] ${errors.email ? "border-red-500" : ""
                            }`}
                    />
                    {errors.email && (
                        <span className="text-xs text-red-500 font-['Satoshi',sans-serif]">
                            {errors.email.message}
                        </span>
                    )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-[#4B5563] font-['Satoshi',sans-serif]">
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        className={`w-full rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3.5 text-sm text-[#111827] placeholder-[#9CA3AF] focus:border-[#003BE2] focus:bg-white focus:outline-none transition-all font-['Satoshi',sans-serif] ${errors.password ? "border-red-500" : ""
                            }`}
                    />
                    {errors.password && (
                        <span className="text-xs text-red-500 font-['Satoshi',sans-serif]">
                            {errors.password.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <div className="mt-2 flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting || isSocialLoading}
                        className="rounded-full bg-[#D4FB20] px-8 py-3 text-sm font-semibold text-[#111827] hover:bg-[#c2ea13] transition-colors cursor-pointer shadow-sm font-['Satoshi',sans-serif] disabled:opacity-50"
                    >
                        {isSubmitting ? "Signing in..." : "Sign In"}
                    </button>
                </div>
            </form>

            {/* Divider */}
            <div className="relative my-8 flex items-center justify-center">
                <div className="w-full border-t border-gray-200"></div>
                <span className="absolute bg-white px-3 text-xs text-gray-400 font-['Satoshi',sans-serif]">
                    or
                </span>
            </div>

            {/* Social Login Buttons */}
            <div className="flex items-center justify-center gap-4">
                {/* Facebook Button */}
                <button
                    type="button"
                    onClick={handleFacebookClick}
                    aria-label="Sign in with Facebook"
                    className="flex size-12 items-center justify-center rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer shadow-sm"
                >
                    <Image
                        src={facebookIcon}
                        alt="Facebook"
                        loading="lazy"
                        className="size-5 object-contain"
                    />
                </button>

                {/* Google Button */}
                <button
                    type="button"
                    disabled={isSocialLoading || isSubmitting}
                    onClick={handleGoogleSignIn}
                    aria-label="Sign in with Google"
                    className="flex size-12 items-center justify-center rounded-2xl border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer shadow-sm disabled:opacity-50"
                >
                    <Image
                        src={googleIcon}
                        alt="Google"
                        loading="lazy"
                        className="size-5 object-contain"
                    />
                </button>
            </div>

            {/* Footer Switcher Link */}
            <div className="mt-8 text-center text-xs text-[#6B7280] font-['Satoshi',sans-serif]">
                New user?{" "}
                <Link
                    href="/register"
                    className="text-[#003BE2] font-medium hover:underline cursor-pointer"
                >
                    Create an account
                </Link>
            </div>
        </div>
    );
}