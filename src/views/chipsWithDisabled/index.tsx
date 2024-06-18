import React, {useState} from "react";
import Chip from "../../components/chip";
import ResetButton from "../../components/button/ResetButton";

export default function ChipsWithDisabled({ initialState }: { initialState: string[] }) {
	const [chips, setChips] = useState<string[]>(initialState);
	const [indexCount, setIndexCount] = useState<number>(0);

	/**
	 * Add new chip to array.
	 * With chips, chipKey returns new number based on first item + 1.
	 * With 0 chips, chipKey starts from 1.
	 */
	function handleAdd() {
		const chipKey = chips.length > 0 ? Number(chips[chips.length - 1].split(' ')[1]) + 1 : 1;
		setChips((prevState) => [...prevState, `Chip ${chipKey}`]);
	}

	/**
	 * Delete chip based on given index.
	 */
	function handleRemove(ind: number){
		setChips((prevState) =>
			prevState.filter((_, index) => ind !== index)
		)
	}

	function handleClick(ind: number) {
		const increaseWith = chips.length > 0 ? Number(chips[ind].split(' ')[1]) : 1;
		setIndexCount((prevState) => prevState + increaseWith);
	}

	function resetChips() {
		setChips(initialState)
		setIndexCount(0)
	}

	return (
		<div className="w-full justify-center items-center border-2 p-2 border-solid border-white rounded-16 flex-col max-w-[900px]">
			<div className="w-full items-center justify-center flex gap-4">
				<h2 className="text-white font-bold text-4xl">
					8. If list has only 1 Chip, it will be disabled
				</h2>
				<ResetButton onClick={() => resetChips()} label="Reset this list"/>
			</div>
			<h3 className="text-white font-bold text-2xl">
				Counter (chip + count): {indexCount}
			</h3>
			<div className="flex-col gap-4 flex w-full p-4">
				<button onClick={() => handleAdd()}
						className="rounded-full text-white font-bold text-3xl border-2 border-white w-full p-4">
					Add chip +
				</button>
			</div>
			<hr/>
			<div className="flex gap-4 flex-wrap w-full p-4">
				{chips.map((chip, index) => (
					<Chip
						disabled={chips.length <= 1}
						onDeleteDisabled={chips.length <= 1}
						onClick={() => handleClick(index)}
						onDelete={() => handleRemove(index)}
						labelColor="black"
						color="yellow"
						size="large"
						colorKey={500}
						key={`${index}-chip`}
						label={chip}
					/>
				))}
			</div>
		</div>
	);
}
