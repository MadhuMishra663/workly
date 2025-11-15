interface LeaveRequest {
  id: number;
  name: string;
  type: string;
  days: number;
  status: string;
}

export default function LeaveRequests({
  leaveRequests,
  handleLeaveAction,
}: {
  leaveRequests: LeaveRequest[];
  handleLeaveAction: (id: number, action: "Approve" | "Reject") => void;
}) {
  return (
    <div className="md:col-span-2 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-4">
        Leave Requests
      </h2>
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-blue-100 text-left">
            <th className="p-2">Employee</th>
            <th className="p-2">Type</th>
            <th className="p-2">Days</th>
            <th className="p-2">Status</th>
            <th className="p-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map((req) => (
            <tr key={req.id} className="border-t">
              <td className="p-2">{req.name}</td>
              <td className="p-2">{req.type}</td>
              <td className="p-2">{req.days}</td>
              <td
                className={`p-2 font-medium ${
                  req.status === "Approved"
                    ? "text-green-600"
                    : req.status === "Rejected"
                    ? "text-red-500"
                    : "text-yellow-600"
                }`}
              >
                {req.status}
              </td>
              <td className="p-2 text-center space-x-2">
                {req.status === "Pending" && (
                  <>
                    <button
                      onClick={() => handleLeaveAction(req.id, "Approve")}
                      className="px-3 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleLeaveAction(req.id, "Reject")}
                      className="px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
                    >
                      Reject
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
