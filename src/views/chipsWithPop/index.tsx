import Chip from "../../components/chip";
import React, {useState} from "react";
import ResetButton from "../../components/button/ResetButton";
export default function ChipsWithPop({ initialState }: { initialState: string[] }) {
	const [chips, setChips] = useState<string[]>(initialState)

	function handleRemove() {
		setChips((prevState) =>
			prevState.filter((_, index) => prevState.length - 1 !== index)
		)
	}

	function resetChips() {
		setChips(initialState)
	}

	return (
		<div className="w-full justify-center items-center border-2 p-2 border-solid border-white rounded-16 flex-col max-w-[900px]">
			<div className="w-full items-center justify-center flex gap-4">
				<h2 className="text-white font-bold text-4xl">
					10. List with removal of last Chip
				</h2>
				<ResetButton onClick={() => resetChips()} label="Reset this list"/>
			</div>
			<div className="flex-col gap-4 flex w-full p-4">
				<button onClick={() => handleRemove()}
						className="rounded-full text-white font-bold text-3xl border-2 border-white w-full p-4">
					Remove last chip -
				</button>
			</div>
			<hr/>
			<div className="flex gap-4 flex-wrap w-full p-4">
				{chips.map((chip, index) => (
					<Chip labelColor="white" color="green" size="medium" colorKey="600" key={`${index}-chip`}
						  label={chip}/>
				))}
			</div>
		</div>
	);
}
