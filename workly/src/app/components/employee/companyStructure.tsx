"use client";

import dynamic from "next/dynamic";
import React from "react";
import ClientOnly from "../common/modal/clientOnly";

// Dynamically import the org chart library (client side only)
const Tree = dynamic(
  () => import("react-organizational-chart").then((mod) => mod.Tree),
  { ssr: false }
);
const TreeNode = dynamic(
  () => import("react-organizational-chart").then((mod) => mod.TreeNode),
  { ssr: false }
);

interface CompanyProps {
  show?: boolean;
  toggle?: () => void;
  showGraph?: boolean;
}

export default function CompanyStructure({
  show,
  toggle,
  showGraph,
}: CompanyProps) {
  if (showGraph) {
    return (
      <div className="mt-10 bg-white p-6 rounded shadow overflow-auto">
        <h2 className="text-xl font-semibold text-blue-700 mb-4 text-center">
          Company Structure
        </h2>

        {/* ✅ Wrapped inside ClientOnly */}
        <ClientOnly>
          <div className="flex justify-center">
            <Tree
              lineWidth={"2px"}
              lineColor={"#90caf9"}
              lineBorderRadius={"10px"}
              label={
                <div className="p-3 bg-blue-100 text-blue-800 rounded font-semibold shadow">
                  CEO – Alice Johnson
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="p-3 bg-green-100 text-green-800 rounded shadow font-semibold">
                    CTO – Robert Smith
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="p-2 bg-gray-100 rounded shadow text-gray-700">
                      Frontend Team
                    </div>
                  }
                >
                  <TreeNode
                    label={<div className="p-1">React Developer</div>}
                  />
                  <TreeNode label={<div className="p-1">UI/UX Designer</div>} />
                </TreeNode>
                <TreeNode
                  label={
                    <div className="p-2 bg-gray-100 rounded shadow text-gray-700">
                      Backend Team
                    </div>
                  }
                >
                  <TreeNode label={<div className="p-1">Node.js Dev</div>} />
                  <TreeNode label={<div className="p-1">Database Admin</div>} />
                </TreeNode>
              </TreeNode>

              <TreeNode
                label={
                  <div className="p-3 bg-yellow-100 text-yellow-800 rounded shadow font-semibold">
                    HR Manager – Emily Davis
                  </div>
                }
              >
                <TreeNode label={<div className="p-1">Recruitment</div>} />
                <TreeNode
                  label={<div className="p-1">Employee Relations</div>}
                />
              </TreeNode>
            </Tree>
          </div>
        </ClientOnly>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded shadow text-center">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Company</h2>
      <p className="text-gray-600 text-sm mb-4">
        View company hierarchy and teams.
      </p>
      <button
        onClick={toggle}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {show ? "Hide Structure" : "Show Structure"}
      </button>
    </div>
  );
}
