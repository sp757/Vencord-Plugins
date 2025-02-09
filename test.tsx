import { useState } from "react";

const SidebarToggle = () => {
  const [serversOpen, setServersOpen] = useState(false);
  const [channelsOpen, setChannelsOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Servers List */}
      <div
        className={`transition-all duration-500 ${serversOpen ? "w-24" : "w-2"}`}
      >
        <button
          onClick={() => setServersOpen(!serversOpen)}
          className="block w-full h-full"
        >
          Servers
        </button>
      </div>

      {/* Channels List */}
      <div
        className={`transition-all duration-500 ${channelsOpen ? "w-64" : "w-16"}`}
      >
        <button
          onClick={() => setChannelsOpen(!channelsOpen)}
          className="block w-full h-full"
        >
          Channels
        </button>
      </div>

      {/* Members List */}
      <div
        className={`transition-all duration-500 ${membersOpen ? "w-60" : "w-16"}`}
      >
        <button
          onClick={() => setMembersOpen(!membersOpen)}
          className="block w-full h-full"
        >
          Members
        </button>
      </div>
    </div>
  );
};

export default SidebarToggle;
