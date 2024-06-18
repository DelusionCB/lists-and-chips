import React from "react";
import {colors} from "../../utils/theme";

type ChipTypes = {
	icon?: React.ReactNode;
	deleteIcon?: React.ReactNode;
	label: string;
	onClick?: () => void;
	onDelete?: () => void;
	onDeleteDisabled?: boolean;
	disabled?: boolean;
	description?: string;
	color?: string;
	colorKey?: number | string;
	size?: "small" | "medium" | "large";
	labelColor?: string;
}

export default function Chip({
	icon,
	deleteIcon,
	label,
	onClick,
	disabled,
	onDelete,
	onDeleteDisabled,
	description,
	color = "white",
	colorKey = 600,
	size = "medium",
	labelColor = "white"
	} : ChipTypes ) {
	const chipClasses = `chip-default chip-${size}-wrapper ${disabled ? `pointer-events-none` : ``} ${onClick ? `hover:opacity-85 disabled:opacity-50 focus:opacity-85 active:opacity-85` : `opacity-1`} `;
	const chipElementProps = {
		className: chipClasses,
		style: {
			borderColor: colors[labelColor][colorKey],
			backgroundColor: colors[color][colorKey],
		},
		...(onClick ? { onClick, role: "button", tabIndex: 0, "aria-disabled": disabled } : {}),
	};

	return React.createElement(
		"div",
		chipElementProps,
		<>
			{icon && (
				<span className="pl-2">
					{icon}
				</span>
			)}
			<span
				className={`chip-text chip-${size}-span`}
				style={{
					color: labelColor,
				}}
			>
				{label}
			</span>
			{onDelete && (
				<span
					tabIndex={0}
					role="button"
					aria-disabled={onDeleteDisabled}
					aria-label="Delete this chip"
					style={{
						color: labelColor,
					}}
					className={`chip-delete chip-${size}-delete ${onDeleteDisabled ? `pointer-events-none` : ``}`}
					onClick={(e) => {
						e.stopPropagation();
						onDelete();
					}}
				>
           {deleteIcon ?? <>&#x2715;</>}
        </span>
			)}
		</>
	);
}
