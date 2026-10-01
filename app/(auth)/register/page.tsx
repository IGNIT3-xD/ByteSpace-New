"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

interface RegisterInput {
    fullName: string;
    email: string;
    password: string;
}

export default function RegisterPage() {
    const router = useRouter();
    const { data: session, isPending: isSessionLoading } = authClient.useSession();
    const [isSocialLoading, setIsSocialLoading] = useState(false);

    // Redirect signed-in users away from the registration page
    useEffect(() => {
        if (!isSessionLoading && session) {
            router.replace("/courses");
        }
    }, [session, isSessionLoading, router]);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegisterInput>();

    const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
        await authClient.signUp.email(
            {
                email: data.email,
                password: data.password,
                name: data.fullName,
            },
            {
                onSuccess: () => {
                    toast.success("Account created successfully! Redirecting...");
                    router.push("/");
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message || "Failed to create account. Please try again.");
                },
            }
        );
    };

    // Prevent screen flicker while checking session state
    if (isSessionLoading || session) {
        return null;
    }

    return (
        <div className="w-full max-w-120 rounded-4xl bg-white p-8 sm:p-12 shadow-2xl border border-white/20">
            {/* Header */}
            <div>
                <span className="text-xs font-normal text-[#003BE2] tracking-wide font-satoshi">
                    Create an Account
                </span>
                <h2 className="title-main">
                    Welcome to
                    <br />
                    ByteSpace
                </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                    <label className="text-[14px] font-medium text-[#4B5563] font-['Satoshi',sans-serif]">
                        Full Name
                    </label>
                    <input
                        type="text"
                        placeholder="Jamie Davis"
                        {...register("fullName", { required: "Full name is required" })}
                        className={`w-full rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3.5 text-sm text-[#111827] placeholder-[#9CA3AF] focus:border-[#003BE2] focus:bg-white focus:outline-none transition-all font-['Satoshi',sans-serif] ${errors.fullName ? "border-red-500" : ""
                            }`}
                    />
                    {errors.fullName && (
                        <span className="text-xs text-red-500 font-['Satoshi',sans-serif]">
                            {errors.fullName.message}
                        </span>
                    )}
                </div>

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
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
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

                {/* Action Button */}
                <div className="mt-2 flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting || isSocialLoading}
                        className="rounded-full bg-[#D4FB20] px-8 py-3 text-sm font-semibold text-[#111827] hover:bg-[#c2ea13] transition-colors cursor-pointer shadow-sm font-['Satoshi',sans-serif] disabled:opacity-50"
                    >
                        {isSubmitting ? "Submitting..." : "Continue"}
                    </button>
                </div>
            </form>

            {/* Footer link */}
            <div className="mt-8 text-center text-xs text-[#6B7280] font-['Satoshi',sans-serif]">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="text-[#003BE2] font-medium hover:underline cursor-pointer"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}