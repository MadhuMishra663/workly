interface IdlePopupProps {
  handlePopupResponse: (accept: boolean) => void;
}

export default function IdlePopup({ handlePopupResponse }: IdlePopupProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-white/40 z-50">
      <div className="bg-white p-6 rounded shadow-lg text-center space-y-4 border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700">
          Are you still there?
        </h3>
        <p className="text-gray-600">We noticed no activity for 20 minutes.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handlePopupResponse(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Yes, I’m here
          </button>
          <button
            onClick={() => handlePopupResponse(false)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            No, I was away
          </button>
        </div>
      </div>
    </div>
  );
}
