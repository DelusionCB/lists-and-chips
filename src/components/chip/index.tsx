import React from "react";


type ChipTypes = {
	label: string,
	onClick?: () => void;
	onDelete?: () => void;
	description?: string;
	color?: string;
	colorKey?: number | string;
	size?: "small" | "medium" | "large";
}

export default function Chip({
	label,
	onClick,
	onDelete,
	description,
	color = "black",
	colorKey = "600",
	size = "medium",
	} : ChipTypes ) {

	const chipElementProps = {
		className: `chip-default chip-${size}-wrapper border-${color} bg-${color}-${colorKey}`,
		...(onClick ? { onClick, role: 'button' } : {})
	};

	return React.createElement(
		"div",
		chipElementProps,
		<>
			<span className={`chip-text chip-${size}-span`}>
				{label}
			</span>
			{onDelete && (
				<span
					className="chip-delete"
					onClick={(e) => {
						e.stopPropagation();
						onDelete();
					}}
				>
          &#x2715; {/* Unicode for a close (x) symbol */}
        </span>
			)}
		</>
	);
}
