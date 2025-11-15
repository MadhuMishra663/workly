export default function CalendarSection() {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">
        Meetings Calendar
      </h2>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=en.indian%23holiday%40group.v.calendar.google.com&ctz=Asia%2FKolkata"
        style={{ border: 0 }}
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        className="rounded"
      ></iframe>
    </div>
  );
}
