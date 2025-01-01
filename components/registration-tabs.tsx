"use client";
import { useState } from "react";
import RegistrationForm from "./registration-form";
import Link from "next/link";

const RegistrationTabs = () => {
  const [activeTab, setActiveTab] = useState("visitor");

  const tabs = [
    { id: "event", label: "Event Registration" },
    { id: "visitor", label: "Visitor Registration" },
    { id: "accommodation", label: "Accommodation" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "event":
        return (
          <div className="text-center p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Event Registration
            </h3>
            <p className="text-gray-300 mb-6">
              For security and better coordination, event registrations are
              handled through our dedicated events page.
            </p>
            <Link
              href="/events"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              Go to Events Page
            </Link>
          </div>
        );
      case "visitor":
        return <RegistrationForm />;
      case "accommodation":
        return (
          <div className="text-center p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Accommodation
            </h3>
            <p className="text-gray-300 mb-6">
              For accommodation arrangements during Wings'25, please fill out
              our dedicated Google Form. This helps us better manage and secure
              your stay.
            </p>
            <a
              href="https://docs.google.com/forms/d/1meZekmvdrx6jxCgiJBSv6hddNkXS9r8oPWXOV-Dnae4/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              Go to Accommodation Form
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg bg-gray-900 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === tab.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-400 hover:text-white"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-gray-900/50 rounded-lg backdrop-blur-sm">
        {renderContent()}
      </div>
    </div>
  );
};

export default RegistrationTabs;
