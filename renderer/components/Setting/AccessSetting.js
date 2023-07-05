import React from 'react';
import Container from './Container';

function AccessSetting() {
  return (
    <Container title="Access" para="Set access to other users.">
      <div className="px-2 py-2">
        <div className="w-full flex justify-center items-end mt-5">
          <button className="px-3 py-2 text-xs text-gray-300 font-medium bg-[#161515] opacity-70 cursor-context-menu rounded shadow">
            Save changes
          </button>
        </div>
      </div>
    </Container>
  );
}

export default AccessSetting;
