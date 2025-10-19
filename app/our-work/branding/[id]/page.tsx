// app/our-work/branding/[id]/page.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SuspenseSiteHeader } from "@/components/suspense-site-header";
import { ShoppingCart } from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface WorkDetails {
  deliverables: string[];
  timeline: string;
  revisions: number;
  designConcepts: number;
  termsOfPayment: {
    initialDeposit: string;
    midProject: string;
    finalPayment: string;
    note: string;
  };
  clientResponsibility: {
    requiredInformation: string[];
    communication: string[];
  };
}

interface WorkData {
  title: string;
  description: string;
  images: string[];
  details?: WorkDetails;
}

export default async function BrandingWorkDetail({ params }: PageProps) {
  const { id } = await params;

  // TODO: Replace the images in worksData with actual project images
  // Mock data for different branding works
  const worksData: Record<number, WorkData> = {
    2: {
      title: "Event & Club Poster",
      description: "Creative event and club poster design.",
      images: [
        "/c1.jpg",
        "/c2.jpg",
        "/c3.jpg",
        "/c4.jpg",
        "/c5.jpg",
        "/c6.jpg",
        "/c7.jpg",
        "/c8.jpg",
      ],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    3: {
      title: "Sports Graphics",
      description: "Dynamic sports graphics and visual elements.",
      images: [
        "/sp1.jpg",
        "/sp2.jpg",
        "/sp3.jpg",
        "/sp4.jpg",
        "/sp5.jpg",
        "/sp6.jpg",
        "/sp7.jpg",
        "/sp8.jpg",
        "/sp9.jpg",
        "/sp10.jpg",
        "/SP11.jpg",
        "/SP12.jpg",
      ],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    4: {
      title: "Social Media Post",
      description: "Engaging social media post designs.",
      images: [
        "/SC1.jpg",
        "/SC2.jpg",
        "/SC3.jpg",
        "/SC4.jpg",
        "/SC5.jpg",
        "/SC6.jpg",
        "/SC7.jpg",
        "/SC8.jpg",
        "/SC9.jpg",
        "/S10.jpg",
        "/SC11.jpg",
        "/SC12.jpg",
        "/SC13.jpg",
        "/SC14.jpg",
        "/SC15.jpg",
        "/sc16.jpg",
      ],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    5: {
      title: "Print Materials",
      description: "Professional print materials design.",
      images: [
        "/pr1.jpg",
        "/pr2.jpg",
        "/pr3.jpg",
        "/pr4.jpg",
        "/pr5.jpg",
        "/p6.jpg",
        "/pr7.jpg",
        "/pr8.jpg",
        "/pr9.jpg",
        "/pr10.jpg",
      ],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    6: {
      title: "Politics Branding",
      description: "Political branding and campaign materials.",
      images: ["/p1.jpg", "/p2.jpg", "/p3.jpg", "/p4.jpg", "/p5.jpg"],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    7: {
      title: "Brand Identity 2",
      description: "Complete brand identity development.",
      images: ["/br.jpg", "/br1.jpg", "/br3.jpg"],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    8: {
      title: "Logo Design 2",
      description: "Custom logo design services.",
      images: ["/l.jpg", "/l1.jpg", "/l2.jpg"],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    9: {
      title: "Eulogy Booklet",
      description: "Elegant eulogy booklet design.",
      images: ["/f1.jpg", "/f2.jpg", "/f3.jpg"],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 5,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    10: {
      title: "Presentations",
      description: "Professional presentation design.",
      images: ["/prs.jpg", "/prs1.jpg"],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    11: {
      title: "Product ads",
      description: "Effective product advertisement design.",
      images: ["/b1.jpg", "/b2.jpg", "/b3.jpg"],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    12: {
      title: "Company Profile",
      description: "Comprehensive company profile design.",
      images: ["/co.jpg", "/co1.jpg"],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    1: {
      title: "Motion Graphics",
      description: "Animated motion graphics and videos.",
      images: ["/wb.jpg", "/sg7.jpg"],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: ["Provide quality images", "Event details"],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
    13: {
      title: "Jersey Design",
      description: "Custom jersey design for sports teams and events.",
      images: ["/je1.jpg", "/je2.jpg"],
      details: {
        deliverables: ["High quality PNG & JPG and/or PDF"],
        timeline: "24 hours",
        revisions: 2,
        designConcepts: 1,
        termsOfPayment: {
          initialDeposit: "50%",
          midProject: "25%",
          finalPayment: "25%",
          note: "Payments are due within 7 days of invoice.",
        },
        clientResponsibility: {
          requiredInformation: [
            "Provide team colors",
            "Jersey style preferences",
          ],
          communication: [
            "Available for revisions",
            "Timely feedback on concepts",
          ],
        },
      },
    },
  };

  const work =
    worksData[parseInt(id) as keyof typeof worksData] || worksData[1];

  // Import branding works from the main page
  const brandingWorks = [
    { id: 1, title: "Event & Club Poster", image: "/sg7.jpg" },
    { id: 2, title: "Sports Graphics", image: "/sg8.jpg" },
    { id: 3, title: "Social Media Post", image: "/sg4.jpg" },
    { id: 4, title: "Print Materials", image: "/sg3.jpg" },
    { id: 5, title: "Politics Branding", image: "/wb.jpg" },
    { id: 6, title: "Brand Identity 2", image: "/sg6.jpg" },
    { id: 7, title: "Logo Design 2", image: "/sg2.jpg" },
    { id: 8, title: "Eulogy Booklet", image: "/sg10.jpg" },
    { id: 9, title: "Presentations", image: "/sg5.jpg" },
    { id: 10, title: "Product ads", image: "/sg9.jpg" },
    { id: 11, title: "Company Profile", image: "/wb.jpg" },
    { id: 12, title: "Motion Graphics", image: "/wb.jpg" },
    { id: 13, title: "Jersey Design", image: "/jersey.jpg" },
  ];

  // Generate suggested works dynamically, excluding the current work
  const suggestedWorks = brandingWorks
    .filter((work) => work.id !== parseInt(id))
    .slice(0, 3);

  return (
    <>
      <SuspenseSiteHeader />
      {/* Hero Section */}
      <section className="relative bg-black text-white py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{work.title}</h1>
          <p className="text-lg md:text-xl opacity-80 mb-4">
            {work.description}
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-neutral-900 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {work.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${work.title} ${index + 1}`}
                className="w-full object-contain rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-16 bg-neutral-900 text-white px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Project Details
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Client Expected Deliverables */}
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
                Client Expected Deliverables
              </h3>
              <ul className="space-y-2 text-gray-300">
                {work.details?.deliverables ? (
                  work.details.deliverables.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))
                ) : (
                  <>
                    <li>• Logo Design (Primary & Secondary)</li>
                    <li>• Brand Color Palette</li>
                    <li>• Typography Guidelines</li>
                    <li>• Brand Style Guide</li>
                    <li>• Business Card Design</li>
                    <li>• Social Media Templates</li>
                  </>
                )}
              </ul>
            </div>

            {/* Timeline */}
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
                Timeline
              </h3>
              <div className="space-y-3">
                {work.details?.timeline ? (
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Timeline</span>
                    <span className="font-medium text-white">
                      {work.details.timeline}
                    </span>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Research & Planning</span>
                      <span className="font-medium text-white">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Design Concepts</span>
                      <span className="font-medium text-white">2-3 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Revisions</span>
                      <span className="font-medium text-white">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Final Delivery</span>
                      <span className="font-medium text-white">1 week</span>
                    </div>
                  </>
                )}
                {work.details?.revisions && (
                  <div className="flex justify-between">
                    <span className="text-gray-300">Revisions</span>
                    <span className="font-medium text-white">
                      {work.details.revisions}
                    </span>
                  </div>
                )}
                {work.details?.designConcepts && (
                  <div className="flex justify-between">
                    <span className="text-gray-300">Design Concepts</span>
                    <span className="font-medium text-white">
                      {work.details.designConcepts}
                    </span>
                  </div>
                )}
                <div className="mt-4 pt-3 border-t border-gray-600">
                  <p className="text-sm text-gray-400">
                    Total project duration:{" "}
                    {work.details?.timeline || "5-8 weeks"}
                  </p>
                </div>
              </div>
            </div>

            {/* Terms of Payment */}
            <div className="bg-neutral-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
                Terms of Payment
              </h3>
              <div className="space-y-3">
                {work.details?.termsOfPayment ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Initial Deposit</span>
                      <span className="font-medium text-white">
                        {work.details.termsOfPayment.initialDeposit}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Mid-Project</span>
                      <span className="font-medium text-white">
                        {work.details.termsOfPayment.midProject}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Final Payment</span>
                      <span className="font-medium text-white">
                        {work.details.termsOfPayment.finalPayment}
                      </span>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-300">
                      <p className="text-sm text-gray-400">
                        {work.details.termsOfPayment.note}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Initial Deposit</span>
                      <span className="font-medium text-white">50%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Mid-Project</span>
                      <span className="font-medium text-white">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Final Payment</span>
                      <span className="font-medium text-white">25%</span>
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-300">
                      <p className="text-sm text-gray-400">
                        Payments are due within 7 days of invoice.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Client Responsibility */}
          <div className="mt-12 bg-neutral-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#3AB3FF]">
              Client Responsibility
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-medium mb-2 text-white">
                  Required Information
                </h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  {work.details?.clientResponsibility?.requiredInformation ? (
                    work.details.clientResponsibility.requiredInformation.map(
                      (item, index) => <li key={index}>• {item}</li>
                    )
                  ) : (
                    <>
                      <li>• Company background and mission</li>
                      <li>• Target audience details</li>
                      <li>• Preferred colors or style references</li>
                      <li>• Competitor examples</li>
                      <li>• Brand personality traits</li>
                    </>
                  )}
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 text-white">Communication</h4>
                <ul className="space-y-1 text-gray-300 text-sm">
                  {work.details?.clientResponsibility?.communication ? (
                    work.details.clientResponsibility.communication.map(
                      (item, index) => <li key={index}>• {item}</li>
                    )
                  ) : (
                    <>
                      <li>• Timely feedback on concepts</li>
                      <li>• Availability for review meetings</li>
                      <li>• Clear communication of preferences</li>
                      <li>• Approval of final deliverables</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Works */}
      <section className="py-16 bg-black text-white px-6 md:px-12 lg:px-20">
        <h2 className="text-3xl font-bold mb-8 text-center">
          More Branding Work
        </h2>
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <div className="flex gap-6 pb-4">
            {suggestedWorks.map((suggested) => (
              <div
                key={suggested.id}
                className="flex-shrink-0 w-80 bg-neutral-800 p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                <img
                  src={suggested.image}
                  alt={suggested.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-3">
                  {suggested.title}
                </h3>
                <Button asChild>
                  <Link href={`/our-work/branding/${suggested.id}`}>View</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        {/* Behance Button */}
        <a
          href="https://www.behance.net/stanpixels"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0166f0] text-white p-3 rounded-full shadow-lg hover:bg-[#0155d0] transition-all text-sm font-bold liquid-glass-button"
        >
          Be
        </a>

        {/* Order Button */}
        <Button
          asChild
          className="bg-[#3AB3FF] text-black font-medium rounded-full p-3 hover:bg-[#2a9eff] shadow-lg"
          title="Order Now"
        >
          <a
            href={`https://wa.me/254722465983?text=Hello%2C%20I%20want%20to%20order%20${encodeURIComponent(
              work.title
            )}%20priced%20at%20${encodeURIComponent("Contact for pricing")}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShoppingCart className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </>
  );
}
