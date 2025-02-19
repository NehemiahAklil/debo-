import { Input } from "@/components/ui/input"

export default function SearchInput() {
    return (
        <div class="flex items-center p-2 bg-primary/10 rounded-lg shadow">
            <Input
                class="flex-1 text-gray-900 dark:text-white bg-transparent border-none focus:ring-0"
                placeholder="A landing page for my design portfolio"
                type="text"
            />
            <SearchIcon class="text-gray-500 dark:text-gray-400" />
        </div>
    )
}

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}