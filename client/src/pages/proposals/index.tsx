import React from "react";
import Proposals_table from "./components/table";

export function Index() {
  return (
    <div className="container mx-auto mb-8">
      <section className="bg-white px-8 py-8 rounded-xl drop-shadow-md">
        <h2 className="text-[20px] font-semibold mb-6">Proposals</h2>
        <Proposals_table />
      </section>
    </div>
  );
}

export default Index;
