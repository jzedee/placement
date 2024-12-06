import AdminSidebar from "@/app/components/AdminSidebar";

export default function RootLayout({ children }) {
    return (
        <div className="flex gap-3 h-screen">
            <AdminSidebar />
            {children}
        </div>

    );
}