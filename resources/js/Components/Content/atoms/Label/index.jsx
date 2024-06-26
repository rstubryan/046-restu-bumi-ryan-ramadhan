export default function Label({ label, name }) {
    return (
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={name}
        >
            {label}
        </label>
    );
}
