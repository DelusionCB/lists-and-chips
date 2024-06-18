import Icon from "../icon/Icons";


export default function ResetButton({ onClick, label }: { onClick: () => void, label: string }) {
	return (
		<button className="bg-transparent p-1 hover:animate-pulse focus:animate-pulse active:animate-pulse border-2 rounded-full border-white border-solid" aria-label={label} onClick={onClick}>
			<Icon color="white" title="reset" vboxHeight={512} vboxWidth={512} />
		</button>
	)
}
