import Image from "next/image";

export default function AboutSection() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-blue-700">About Workly</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Workly is a modern HRMS portal designed to simplify and automate human
          resource management. Easily handle employee data, manage performance,
          and streamline company workflows—all in one unified dashboard.
        </p>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/images/img1.png"
          alt="About Workly"
          width={400}
          height={300}
          className="rounded-lg"
        />
      </div>
    </main>
  );
}
