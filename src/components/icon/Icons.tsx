type IconTypes = Record<
	TitleTypes,
	{
		d: string;
		fillRule?: "evenodd" | "nonzero" | "inherit" | undefined;
		clipRule?: "evenodd" | "nonzero" | "inherit" | undefined;
	}[]
>;

export type TitleTypes = "exl" | "trash" | "reset";

const Icons: IconTypes = {
	exl: [
		{
			d: "M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z",
		},
	],
	trash: [
		{
			d: "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",
		},
	],
	reset: [
		{
			d: "M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z",
		},
	],
};

export default function Icon({
	color,
	width = 24,
	height = 24,
	vboxWidth,
	vboxHeight,
	title,
	classes,
	} : {
	color: string;
	width?: number;
	height?: number;
	vboxWidth?: number;
	vboxHeight?: number;
	title: TitleTypes;
	classes?: string;
}) {
	return (
		<svg aria-hidden width={width} height={height} viewBox={`0 0 ${vboxWidth ?? 24} ${vboxHeight ?? 24}`} fill="none" className={classes}>
			{Icons[title].map((prop, index) => (
				<path key={index} fill={color} {...prop} />
			))}
		</svg>
	);
}
