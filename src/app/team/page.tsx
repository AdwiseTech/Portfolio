import Image from "next/image";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { teamMembers, socialMedia } from "@/constants";
 
export default function OurTeam() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our team
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {
         teamMembers.map((member, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative w-full h-80 overflow-hidden rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Info */}
              <div className="mt-6">
                <h3 className="text-white text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-400 mt-1">{member.role}</p>

                {/* Social Icons */}
                <div className="flex gap-4 mt-4 text-gray-400">
                  <FaXTwitter className="cursor-pointer hover:text-white transition" />
                  <FaLinkedinIn className="cursor-pointer hover:text-white transition" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}