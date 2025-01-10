import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 h-full flex items-center justify-center">
        {children}
      </div>
      <div className="hidden md:flex w-1/2 h-full relative">
        <Image
          src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={1000}
          height={1000}
          alt="Doctors"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
