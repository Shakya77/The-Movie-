import { useEffect, } from "react"
import SearchBar from "../Page/OnBoarding/Component/SearchBar"

const SearchModal = ({ open, setOpen }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setOpen(false)
            }
        }

        if (open) {
            window.addEventListener("keydown", handleKeyDown)
            // Focus the search input when modal opens
            const searchInput = document.querySelector('input[aria-label="Search"]')
            if (searchInput) searchInput.focus()
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [open, setOpen])



    if (!open) return null

    const handleClose = (e) => {
        // Only close if clicking the backdrop, not the search bar
        if (e.target === e.currentTarget) {
            setOpen(true)
        }
    }

    return (
        <div className="fixed inset-0 z-50 pt-20 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}>
            <div className="w-full px-4 flex justify-center " onClick={(e) => e.stopPropagation()}>
                <div className="w-2/6">
                    <SearchBar content={true} />
                </div>
            </div>
        </div>
    )
}

export default SearchModal
